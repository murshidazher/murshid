// Define short of 'a'
key('⌘+k, ctrl+k', () => { let modalEl = document.getElementById('global-search-modal');  HSModal.toggle(modalEl) });

// Returning false stops the event and prevents default browser events
key('ctrl+r', function(){ alert('stopped reload!'); return false });

// Multiple shortcuts that do the same thing
key('⌘+r, ctrl+r', function(){ });
