let pages, pagesIndex, searchIndex;

const loadSearch = async () => {
    const response = await fetch(`index.json`, {
        method: 'GET',
    });

    const data = await response.json();
    console.log("data", data);

    if (data) {
        const normalizedData = data.map((result) => {
            return {
                ...result,
                categories: result.categories.map((category) => category.toLowerCase()).join(" ; ")
            }
        })
        pages = normalizedData;
    };

    await initSearchIndex();
}

const initSearchIndex = async () => {
    try {
        pagesIndex = pages;
        searchIndex = lunr(function () {
            this.field("title");
            this.field("content");
            this.field("categories");
            this.ref("href");
            pagesIndex.forEach((page) => this.add(page));
        });
    } catch (e) {
        console.log(e);
    }
}

const handleSearchQuery = async (event) => {
    const searchElem = document.getElementById("search-input");
    const query = searchElem.value.trim().toLowerCase();
    const results = await searchSite(query);

    console.log("results", results);
    await renderSearchResults(query, results);
}

const searchSite = async (query) => {
    const originalQuery = query;
    query = getLunrSearchQuery(query);
    let results = await getSearchResults(query);
    return results.length ?
        results :
        query !== originalQuery ?
        getSearchResults(originalQuery) :
        [];
}

const getFuzzySearchResults = (query) => {
    return searchIndex.query((q) => {
        q.term(query, {
            usePipeline: true,
            boost: 100
        });
        q.term(query, {
            usePipeline: false,
            boost: 10,
            wildcard: lunr.Query.wildcard.TRAILING
        });
    }).flatMap((hit) => {
        let pageMatch = pagesIndex.filter((page) => page.href === hit.ref)[0];
        pageMatch.score = hit.score;
        return [pageMatch];
    });
}

const getSearchResults = async (query) => {

    const searchResults = await searchIndex.search(query).flatMap((hit) => {
        if (hit.ref == "undefined") {
            return [];
        };

        let pageMatch = pagesIndex.filter((page) => page.href === hit.ref)[0];
        pageMatch.score = hit.score;
        return [pageMatch];
    });

    const fuzzyResults = await getFuzzySearchResults(query);
    return searchResults.length ? searchResults : fuzzyResults;
}

const getLunrSearchQuery = (query) => {
    const searchTerms = query.split(" ");
    if (searchTerms.length === 1) {
        return query;
    }
    query = "";
    for (const term of searchTerms) {
        query += `+${term} `;
    }
    return query.trim();
}

const renderSearchResults = async (query, results) => {
    await updateSearchResults(query, results);
}


const updateSearchResults = async (query, results) => {
    var targetEl = document.getElementById('search-results');

    if (query && query != '') {
        if (results.length > 0) {
            let maxHitScore = 0;
            const maxHitScoreDifference = 1;

            targetEl.innerHTML = results.map((hit) => {
                if (hit !== undefined && (hit.score.toFixed(2) >= (maxHitScore - maxHitScoreDifference))) {
                    if (maxHitScore < hit.score.toFixed(2)) maxHitScore = hit.score.toFixed(2);
                    return `<li class="search-result-item" data-score="${hit.score.toFixed(2)}"><a href="${hit.href}" class="search-result-page-title">${hit.title}</a></li>`;
                }
            }).join('');
        } else {
            // if no results found, then render a general message
            targetEl.innerHTML = `<br><h2 style="text-align:center">No search results found</h2>`;
        };
    } else {
        targetEl.innerHTML = ''
    }
}


loadSearch();
