// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all timeline years
document.querySelectorAll('.timeline-year').forEach(year => {
    observer.observe(year);
});

// Add hover effect for member cards
document.querySelectorAll('.member-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Add parallax effect to team photos
document.querySelectorAll('.team-photo').forEach(photo => {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.1;
        photo.style.transform = `translateY(${rate}px)`;
    });
});

// Add active state to current year in navigation
function updateActiveYear() {
    const years = document.querySelectorAll('.timeline-year');
    const scrollPosition = window.scrollY;

    years.forEach(year => {
        const yearTop = year.offsetTop;
        const yearBottom = yearTop + year.offsetHeight;

        if (scrollPosition >= yearTop - 100 && scrollPosition < yearBottom - 100) {
            year.classList.add('active');
        } else {
            year.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', updateActiveYear);

// Add loading animation for images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('load', () => {
        img.classList.add('loaded');
    });
});

// Add click event for member cards to show more details
document.querySelectorAll('.member-card').forEach(card => {
    card.addEventListener('click', () => {
        const memberName = card.querySelector('h4').textContent;
        const memberRole = card.querySelector('p').textContent;
        
        // You can add a modal or expand the card to show more details
        console.log(`Clicked on ${memberName} - ${memberRole}`);
    });
});

// Add scroll progress indicator
const progressBar = document.createElement('div');
progressBar.className = 'scroll-progress';
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    progressBar.style.width = `${scrolled}%`;
});

// Add CSS for scroll progress bar
const style = document.createElement('style');
style.textContent = `
    .scroll-progress {
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
        z-index: 1001;
        transition: width 0.1s ease;
    }
`;
document.head.appendChild(style); 