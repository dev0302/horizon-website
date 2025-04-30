// Ensure code runs after DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Animate SVG paths
    function animatePath(pathId, delay = 0) {
      const path = document.getElementById(pathId);
      if (!path) return;
  
      const length = path.getTotalLength();
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;
      path.style.opacity = 0;
  
      function startAnimation() {
        let startTime = null;
  
        function animate(time) {
          if (!startTime) startTime = time;
          const elapsed = time - startTime;
          const duration = 2000;
          const progress = Math.min(elapsed / duration, 1);
  
          path.style.strokeDashoffset = length * (1 - progress);
          path.style.opacity = progress;
  
          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            setTimeout(() => {
              path.style.opacity = 0;
              path.style.strokeDashoffset = length;
              requestAnimationFrame(animate);
            }, 1000);
          }
        }
  
        requestAnimationFrame(animate);
      }
  
      setTimeout(startAnimation, delay);
    }
  
    // Animate straight lines
    function animateLine(lineElement, delay = 0) {
      if (!lineElement) return;
  
      function runAnimation() {
        lineElement.style.transition = 'none';
        lineElement.style.transform = 'translateX(100%)';
        lineElement.style.opacity = 0;
  
        setTimeout(() => {
          lineElement.style.transition = 'transform 2.5s linear, opacity 1s ease-in-out';
          lineElement.style.transform = 'translateX(-100%)';
          lineElement.style.opacity = 0.8;
  
          setTimeout(() => {
            lineElement.style.opacity = 0;
            setTimeout(runAnimation, 1000);
          }, 2500);
        }, 50);
      }
  
      setTimeout(runAnimation, delay);
    }
  
    // Animate orbs
    function animateOrb(orbElement, delay = 0) {
      if (!orbElement) return;
  
      setTimeout(() => {
        orbElement.style.transition = 'opacity 2s ease-in-out';
        orbElement.style.opacity = 1;
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
  });
  