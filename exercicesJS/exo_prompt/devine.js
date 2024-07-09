let number = Math.floor(Math.random() * 100);
console.log(number);
let devine = parseInt(prompt("Devine un nombre entre 1 et 100"));
let i = 0;
while (devine != number) {
  if (isNaN(devine)) {
    devine = parseInt(prompt("Ce n'est pas un nombre. Tente à nouveau ^^"));
  } else if (devine < 1 || devine > 100) {
    devine = parseInt(
      prompt("Le nombre doit être compris entre 1 et 100. Tente à nouveau ^^")
    );
  } else {
    if (devine > number) {
      devine = parseInt(prompt("Plus petit. Tente à nouveau ^^"));
    } else {
      devine = parseInt(prompt("Plus grand. Tente à nouveau ^^"));
    }
  }
  // compteur
  i++;
}
alert("Bravo, tu as trouvé le nombre " + number + " en " + i + " tentatives !");
