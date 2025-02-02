let backToTop = document.querySelector(".back-to-top");
// on scroll display back to top button
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 100) {
    backToTop.classList.add("back-to-top-on-scroll");
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});
// on click scroll to top
backToTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
console.log("general-script.js loaded");
