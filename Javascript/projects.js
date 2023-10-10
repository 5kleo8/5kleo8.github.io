function triggerAnimationUp(entries) {
  const animationUpDivs = document.querySelectorAll(".animation-element-up");
  animationUpDivs.forEach((animationUp) => {
    animationUp.classList.toggle("unset", entries[0].isIntersecting);
  });
}

const animationUp = document.querySelectorAll(".animation-up-container");

console.log(animationUp);

const observerUp = new IntersectionObserver(triggerAnimationUp);

console.log(observerUp);

animationUp.forEach((animationUp) => {
  observerUp.observe(animationUp);
});
