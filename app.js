const btn = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
//console.log(btn);
btn.addEventListener("click", function () {
  links.classList.toggle("show-links");
});
