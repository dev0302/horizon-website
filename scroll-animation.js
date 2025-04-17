document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('.latest-events-title');
    const section = document.querySelector('#upcoming-event-section');
    let hasAnimated = false;

    function checkScroll() {
        if (hasAnimated) return;

        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Start animation when section is 1/3 visible
        if (sectionTop < windowHeight * 0.66) {
            title.classList.add('animate');
            hasAnimated = true;
            // Remove event listener after animation starts
            window.removeEventListener('scroll', checkScroll);
        }
    }

    // Initial check in case section is already visible
    checkScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', checkScroll);
}); 