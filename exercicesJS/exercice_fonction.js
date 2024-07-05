// Exercice 1
const helloworld1 = () => {
  return `Bonjour le monde !`;
};
// Exercice 2
const helloworld2 = (nom) => {
  return `Bonjour ${nom} !`;
};
// Exercice 3
const carre = (n) => {
  return n * n;
};
// Exercice 4 : Créer une fonction anonyme
const double = (n) => {
  return n * 2;
};
// Exercice 5 : Créer une fonction imbriquée
const tab_reverse = (array) => {
  // On imbrique raverse(), la fonction native de JS
  return array.reverse();
};
// Exercice 6 : Créer une fonction récursive
let p = 0;
let q = 0;
const recursive = (n) => {
  if (n > 0) {
    p = n - 1;
    q = n + recursive(p);
  }
  return q;
};
// Exercice 7 : Créer une fonction avec des paramètres par défaut
const carre2 = (n = 1) => {
  return n * n;
};
// Exercice 8 : Créer une fonction avec des paramètres optionnels
const carre3 = (n = 5) => {
  return n * n;
};
// Exercice 9 : Créer une fonction avec des paramètres nommés
const carre4 = (number) => {
  return number * number;
};
