/**
 * tabs.js - Handles tab functionality and other UI interactions
 */

// Team section tabs functionality
function initTeamTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
  
    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        // Remove active class from all buttons and contents
        tabButtons.forEach(b => b.classList.remove('active'));
        tabContents.forEach(tc => tc.classList.remove('active'));
  
        // Add active class to clicked button and corresponding content
        btn.classList.add('active');
        const tabId = btn.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
      });
    });
  }
  
  // About section scroll animation
  function initAboutAnimation() {
    const aboutObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("scroll-reveal");
        }
      });
    }, { threshold: 0.3 });
  
    const aboutTarget = document.querySelector(".content-left");
    if (aboutTarget) {
      aboutObserver.observe(aboutTarget);
    }
  }
  
  // Family section scroll animations
  function initFamilyAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('scroll-reveal');
            }
        });
    }, observerOptions);

    // Observe all team sections
    document.querySelectorAll('.testimonial-outer, .card, .testimonial-container, .member-list-container').forEach(el => {
        observer.observe(el);
    });
  }
  
  // Event timeline scroll animation
  function initEventAnimations() {
    const eventObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    });
  
    document.querySelectorAll('.event-timeline-item').forEach(el => {
      eventObserver.observe(el);
    });
  }
  
  // Initialize all UI interactions
  document.addEventListener('DOMContentLoaded', () => {
    initTeamTabs();
    initAboutAnimation();
    initFamilyAnimations();
    initEventAnimations();
  });