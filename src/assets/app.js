window.addEventListener("scroll", function () {
  var nav = document.querySelector("nav");
  nav.classList.remove("bg-transparent");
  nav.classList.toggle("fondo-claro", window.scrollY > 2);
  nav.classList.toggle("fixed-top", window.scrollY > 2);
});
