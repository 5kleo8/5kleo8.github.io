

function triggerAnimation(entries) {
  const practiceDivs = document.querySelectorAll('.animation-element');
  practiceDivs.forEach(practice => {
    practice.classList.toggle('unset', entries[0].isIntersecting);
  });
}

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0,
};

const practice = document.querySelectorAll(".animation-show-container");
console.log(practice);

const observer = new IntersectionObserver(triggerAnimation, options);

console.log(observer)

practice.forEach((practice) => {
  observer.observe(practice);
});


