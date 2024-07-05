let memory = [];
//met la mémoire à zéro
function reset() {
  memory = [];
}
//Ajoute un élément n à la fin de la mémoire
function p(n) {
  memory.push(n);
}
//Duplique le dernier élément n ajouté à la mémoire
function duplicate() {
  p(memory[memory.length - 1]);
}
// Retire le dernier élément n ajouté à la mémoire
function r() {
  return memory.pop();
}
// Retire et récupère les deux derniers éléments  ajoutés à la mémoire, les additionne, et ajoute
// le résultat à la mémoire
function add() {
  let a = r();
  let b = r();
  p(a + b);
}
// Pareil mais c'est le résultat de la soustraction
function sub() {
  p(r() - r());
}
// Duplique le dernier éléments puis les supprime et ajoute la somme de leur addition
function twice() {
  duplicate();
  add();
}
// Affiche les éléments de la mémoire
function print() {
  console.log("Contenu actuel :");
  for (let i = 0; i < memory.length; i++) {
    console.log(i, "->", memory[i]);
  }
}

// Niveau 1
console.log("Niveau 1");
reset(); // efface
p(2); // ajoute 2
p(8); // ajoute 8
print(); // 0 -> 2, 1 -> 8

// Niveau 2
console.log("Niveau 2");
reset(); //efface
p(2); //ajoute 2
twice(); // duplique 2 puis met la somme des deux derniers éléments 2 +2 , donc 4
print(); // 0 -> 4

// Niveau 3
console.log("Niveau 3");
reset(); //efface
p(53); // ajoute 53
for (let i = 0; i < 4; i++) {
  p(53); // ajoute 53
  add(); // i(0) 106 i(1) 159  i(2) 212 i(3) 265
}
p(1); // 0 -> 265, 1 -> 1
for (let i = 0; i < 9; i++) {
  twice(); // 0 -> 2, 1 -> 267, 2 -> 534, 3->16, 4->32, 5->64, 6->128, 7->256, 8->512
}
add(); // 265 + 512 = 777
print(); // 0 -> 777

// Niveau 4
console.log("Niveau 4");
memory = [];
let level2 = 5;
for (let i = 0; i < level2; i++) {
  p(i + 1); //
}
print(); // 0 -> 1, 1 -> 2, 2 -> 3, 3 -> 4, 4 -> 5

while (memory.length > 1) {
  add(); //3->9 - 2 -> 12 - 1 -> 14, 0 -> 15
}
print(); //15

// Niveau 5
console.log("Niveau 5");
let level5 = 5;
let j = 1;
reset();
p(0);
for (let i = 0; i < level5 - 1; i++) {
  p(memory[i] + j);
  j *= 2;
}
print();
// Doit afficher :
// 0 -> 0
// 1 -> 1
// 2 -> 3
// 3 -> 7
// 4 -> 15
