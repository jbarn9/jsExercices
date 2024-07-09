let progression = "";
let scrollMax = null;
let scrollPercent = null;
window.addEventListener("scroll", function () {
  progression = document.body.scrollHeight - innerHeight;
  scrollMax = document.body.offsetHeight - innerHeight;
  scrollPercent = Math.floor((scrollY / scrollMax) * 100);
  console.log(
    "hauteur page : " +
      innerHeight +
      " Hauteur affichage : " +
      progression +
      " Scroll position : " +
      scrollY +
      " pourcentage de scroll " +
      scrollPercent
  );
  document
    .querySelector("div.progress")
    .setAttribute("aria-valuenow", scrollPercent);
  document.querySelector("div.progress-bar").style =
    "width:" + scrollPercent + "%;";
});

// Exercice 9
