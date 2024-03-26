export const handleAnimatedLine = () => {
  const line = document.querySelector(".line");
  const circles = document.querySelectorAll(".circle");
  window.addEventListener("scroll", (e) => {
    const y = clamp(window.scrollY, 0, 170);
    line.style.height = `${y}px`;
    line.style.opacity = clamp(y, 0, 170) / 100;
    circles.forEach((circle) => {
      circle.style.opacity = clamp(y, 0, 170) / 100;
    });
  });
};

const clamp = (num, min, max) => Math.min(Math.max(num, min), max);
