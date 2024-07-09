let firstname = prompt("Quel est ton prénom ?");
let name = prompt("Salut " + firstname + ", quel est ton nom ?");
let age = prompt("Quel est ton age ?");

while (age <= 0 || age > 150) {
  alert("Erreur sur ton age.");
  age = prompt("Quel est ton age ?");
}
if (!Number.isInteger(age)) {
  age = parseInt(age);
}
console.log(age, typeof age);
if (age >= 18) {
  alert("C'est bon, tu es majeur.");
  window.location.assign("../exo_fetch/pokeAPI.html");
} else {
  alert("Non, sors d'ici !");
}
