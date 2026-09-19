(function () {
    function makeSelectable() {
        document.querySelectorAll("*").forEach(element => {
            element.style.userSelect = "text";
            element.style.webkitUserSelect = "text";
            element.style.mozUserSelect = "text";
            element.style.msUserSelect = "text";
        });
    }

    makeSelectable();

    // Handle dynamically created elements.
    const observer = new MutationObserver(() => {
        makeSelectable();
    });

    if (document.documentElement) {
        observer.observe(document.documentElement, {
            childList: true,
            subtree: true
        });
    }
})();
