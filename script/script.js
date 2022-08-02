// Navbar

const navbar = document.getElementsByTagName("nav")[0];

window.addEventListener("scroll", function () {
  if (this.window.scrollY > 1) {
    navbar.classList.replace("bg-transparent", "nav-color");
  } else if (this.window.scrollY === 0) {
    navbar.classList.replace("nav-color", "bg-transparent");
  }
});

// Carrousel

const carrousel = document.querySelector(".korosel");

const prevButton = document.querySelector(".button-arrow-left");
const nextButton = document.querySelector(".button-arrow-right");

nextButton.addEventListener("click", function () {
  carrousel.style.transform = "translateX(-400px)";
  console.log(carrousel.scrollLeft);
});

prevButton.addEventListener("click", function () {
  carrousel.style.transform = "translateX(-90px)";
});
