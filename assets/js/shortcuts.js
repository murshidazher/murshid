// Define short of 'a'
key('⌘+k, ctrl+k', () => {
    let modalEl = document.getElementById('global-search-modal');
    HSModal.toggle(modalEl)
});

// Returning false stops the event and prevents default browser events
key('ctrl+r', () => {
    alert('stopped reload!');
    return false
});

// Multiple shortcuts that do the same thing
key('⌘+r, ctrl+r', () => {});

// TODO: move to a sepeate file (header blur)
window.addEventListener('scroll', event => {
    const height = 40;
    const {
        scrollTop
    } = event.target.scrollingElement;
    const header = document.getElementById('main-header');
    header.classList.toggle('backdrop-blur', scrollTop >= height);
    header.classList.toggle('border-b', scrollTop >= height);
    header.classList.toggle('border-slate-900/10', scrollTop >= height);

});
