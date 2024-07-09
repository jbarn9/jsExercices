window.addEventListener("mouseout", function () {
  document.querySelector("p").classList.remove("hidden");
});

window.addEventListener("mouseover", function () {
  document.querySelector("p").classList.add("hidden");
});
