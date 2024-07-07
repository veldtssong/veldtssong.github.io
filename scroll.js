window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        let lastScrollTop = 0;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Scrolling down
            navbar.classList.add('hidden');
            document.querySelector('.grid-container').classList.add('full-width');
        } else {
            // Scrolling up
            navbar.classList.remove('hidden');
            document.querySelector('.grid-container').classList.remove('full-width');
        }

        lastScrollTop = scrollTop;
    }
});