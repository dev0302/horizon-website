/**
 * navigation.js - Handles all navigation and scrolling functionality
 */

// Smooth scrolling for all anchor links
function initSmoothScrolling() {
    document.querySelectorAll("a[href^='#'], button[id]").forEach(trigger => {
      trigger.addEventListener("click", e => {
        const targetId = trigger.getAttribute("href")?.substring(1) || 
                         trigger.id.replace("-btn", "").replace("-us", "-section");
        const targetEl = document.getElementById(targetId);
  
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  }
  
  // Mobile menu toggle functionality
  function initMobileMenu() {
    const toggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
  
    if (toggle && mobileMenu) {
      toggle.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
      });
    }
  }
  
  // Initialize all navigation features
  document.addEventListener('DOMContentLoaded', () => {
    initSmoothScrolling();
    initMobileMenu();
  });

  