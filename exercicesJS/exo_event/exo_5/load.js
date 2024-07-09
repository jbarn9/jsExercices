let pictures = document.querySelectorAll("img");

let arrayOfPictures = Array.from(pictures);
arrayOfPictures.map((picture, key) => {
  picture.addEventListener("load", function () {
    console.log("Image numéro " + key + " vient de finir de charger.");
  });
});
