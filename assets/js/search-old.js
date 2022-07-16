let posts;
let searchIndex;

const loadSearch = async () => {
    // call the index.json file from server by http get request
    const url = window.location.origin;
    const response = await fetch(`${url}/index.json`, {
        method: 'GET',
    });

    const data = await response.json();
    console.log("data", data);

    if (data) {
        posts = data;
    }

    indexResults();
}

const indexResults = () => {
    // build lunr index file
    searchIndex = lunr(function () {
        this.ref('href');
        this.field('categories');
        this.field('content');
        this.field('title');
        posts.forEach(function (doc) {
            this.add(doc)
        }, this)
    });
}

loadSearch(); // call loadsearch to load the json file

// this function will parse the query_string, which will you
// to run queries like "title:lunr" (search the title field),
// "lunr^10" (boost hits with this term by a factor 10) or
// "lunr~2" (will match anything within an edit distance of 2,
// i.e. "losr" will also match)
function simpleSearchSite(query_string) {
  return searchIndex.search(query_string).map(function(result) {
    return posts.filter(function(page) {
      return page.href === result.ref;
    })[0];
  });
}

// I want a typeahead search, so if a user types a query like
// "pyth", it should show results that contain the word "Python",
// rather than just the entire word.
function searchSite(query_string) {
  return searchIndex.query(function(q) {
    // look for an exact match and give that a massive positive boost
    q.term(query_string, { usePipeline: true, boost: 100 });
    // prefix matches should not use stemming, and lower positive boost
    q.term(query_string, { usePipeline: false, boost: 10, wildcard: lunr.Query.wildcard.TRAILING });
  }).map(function(result) {
    return posts.filter(function(page) {
      return page.href === result.ref;
    })[0];
  });
}

const showSearchResults = async () => {
    const searchElem = document.getElementById("search-input");
    console.log("posts", posts);
    var query = searchElem.value.trim().toLowerCase() || ''; // get the value from input
    var target = document.getElementById('list'); // target the ul list to render the results

    // search in lunr index
    if (query && query != '') {
        var matches = searchSite(query);
        console.log("matches", matches);

        if (matches.length > 0) {

            // match found with input text and lunr index
            target.innerHTML = matches.map((p) => {
                if (p != undefined) {
                    return `<li>
                        ${p.date} -
                        <a href="${p.href}"> ${p.title}</a>
                        </li>`;
                }
            }).join('');
        } else {
            // if no results found, then render a general message
            target.innerHTML = `<br><h2 style="text-align:center">No search results found</h2>`;
        };
    } else {
        target.innerHTML = ''
    }
};
