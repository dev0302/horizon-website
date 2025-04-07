/**
 * animations.js - Handles all animations and visual effects
 */

// Hero section background animations
function initHeroAnimations() {
    // Animate SVG paths
    function animatePath(pathId, delay = 0) {
      const path = document.getElementById(pathId);
      if (!path) return;
  
      const length = path.getTotalLength();
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;
      path.style.opacity = 0;
  
      setTimeout(() => {
        path.style.transition = 'stroke-dashoffset 2s ease-in-out, opacity 1s ease-in-out';
        path.style.strokeDashoffset = '0';
        path.style.opacity = '1';
      }, delay);
    }
  
    // Animate straight lines
    function animateLine(lineElement, delay = 0) {
      if (!lineElement) return;
  
      setTimeout(() => {
        lineElement.style.transition = 'transform 2.5s linear, opacity 1s ease-in-out';
        lineElement.style.transform = 'scaleX(1)';
        lineElement.style.opacity = '0.8';
      }, delay);
    }
  
    // Animate orbs
    function animateOrb(orbElement, delay = 0) {
      if (!orbElement) return;
  
      setTimeout(() => {
        orbElement.style.transition = 'transform 1.5s ease-in-out, opacity 2s ease-in-out';
        orbElement.style.transform = 'scale(1)';
        orbElement.style.opacity = '0.8';
      }, delay);
    }
  
    // Trigger animations
    animatePath('path1', 0);
    animatePath('path2', 500);
    animatePath('path3', 1000);
  
    document.querySelectorAll('.animated-line').forEach((line, index) => {
      animateLine(line, index * 400);
    });
  
    document.querySelectorAll('.orb').forEach((orb, i) => {
      animateOrb(orb, i * 500);
    });
  }
  
  // Logo interactivity animations
  function initLogoAnimations() {
    const logo = document.querySelector('.society-logo');
    if (!logo) return;
  
    // Click to change rotation direction
    logo.addEventListener('click', function() {
      this.style.animationDirection = this.style.animationDirection === 'reverse' ? 'normal' : 'reverse';
    });
  
    // Mouse move effect for glow
    document.addEventListener('mousemove', function(e) {
      const glow = document.querySelector('.logo-glow');
      if (!glow) return;
  
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;
      glow.style.transform = `translate(${mouseX * 10 - 5}px, ${mouseY * 10 - 5}px)`;
    });
  }
  
  // Initialize all animations when DOM is loaded
  document.addEventListener('DOMContentLoaded', () => {
    initHeroAnimations();
    initLogoAnimations();
  });