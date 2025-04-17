// Performance-optimized scroll animation handler
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Intersection Observer with optimized settings
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                requestAnimationFrame(() => {
                    entry.target.classList.add('visible');
                });
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '50px 0px -50px 0px'
    });

    // Observe elements with animation classes
    const animatedElements = document.querySelectorAll('.section-fade-in, .card-fade-in, .image-fade-in, .text-fade-in');
    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // Optimized smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                requestAnimationFrame(() => {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                });
            }
        });
    });

    // Debounced scroll handler for performance
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                // Add any scroll-based animations here
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });

    // Preload images for smoother animations
    const images = document.querySelectorAll('.event-timeline-images img');
    images.forEach(img => {
        if (img.complete) {
            img.classList.add('visible');
        } else {
            img.addEventListener('load', () => {
                requestAnimationFrame(() => {
                    img.classList.add('visible');
                });
            });
        }
    });

    initUpcomingEventAnimations();
});

function initUpcomingEventAnimations() {
    const title = document.querySelector('.upcoming-event-title');
    const card = document.querySelector('.upcoming-event-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px'
    });

    if (title) observer.observe(title);
    if (card) observer.observe(card);
} 