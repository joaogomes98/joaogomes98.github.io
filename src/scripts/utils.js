export const scrollTo = (elementId, duration = 1000) => {
    const targetElement = document.getElementById(elementId);
    if (targetElement) {
      const targetPosition = targetElement.offsetTop;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const startTime = performance.now();
  
      const scroll = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const easing = easeInOutQuad(progress);
        window.scroll(0, startPosition + distance * easing);
  
        if (elapsedTime < duration) {
          requestAnimationFrame(scroll);
        }
      };
  
      const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);
  
      requestAnimationFrame(scroll);
    }
};