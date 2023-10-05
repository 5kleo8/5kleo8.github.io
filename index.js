function $(selector) {
  let elements = document.querySelectorAll(selector);
  if (elements.length === 1) {
    return elements[0];
  }

  return elements;
}

window.addEventListener("load", function () {
  // Obtiene el elemento h1
  const h1Element = document.querySelector("#hero h1");

  // Aplica los estilos para mostrar el h1 con una transición
  h1Element.style.opacity = "1";
  h1Element.style.transform = "translateY(0)";
});

// Esperar hasta que el contenido se cargue
document.addEventListener("DOMContentLoaded", function () {
  // Animar el título principal
  animateElement("#hero h1", "opacity", "1");
  animateElement("#hero h1", "transform", "translateY(0)");
});

window.addEventListener("scroll", function () {
  animateOnScroll("#works > .container > h2", "AnimationWritte");
});

// Función para animar elementos al hacer scroll
function animateOnScroll(selector, className) {
  const elements = document.querySelectorAll(selector);
  const position = window.scrollY + window.innerHeight;

  elements.forEach((element) => {
    if (position >= element.offsetTop) {
      element.classList.add(className);
    } else {
      element.classList.remove(className);
    }
  });
}

function animateElement(selector, property, value) {
  const element = document.querySelector(selector);
  if (element) {
    element.style[property] = value;
  }
}

function toggleCard(card) {
  card.classList.toggle("active");
}
