// Créez une classe Personne
class Personne {
  constructor(nom, age) {
    this.nom = nom;
    this.age = age;
  }

  sePresenter() {
    return "Je m'appelle " + this.nom + " et j'ai " + this.age + ".";
  }
}
// Dans la console :
// const Julie = new Personne("julie", 31)
// undefined
// Julie.sePresenter()
// "Je m'appelle julie et j'ai 31."

// Créez un prototype pour les objets Chien
class Chien {
  constructor(nom, race) {
    this.nom = nom;
    this.race = race;
  }

  aboyer() {
    return `Woof ! Je suis ${this.nom}, un ${this.race}`;
  }
}
// Créez une classe Rectangle et une classe Cercle
class Rectangle {
  constructor(largeur, hauteur) {
    this.largeur = largeur;
    this.hauteur = hauteur;
  }

  calculSuperficie() {
    return this.largeur * this.hauteur;
  }

  CalculPerimetre() {
    return (this.largeur + this.hauteur) * 2;
  }
}

class Cercle {
  constructor(rayon, couleur) {
    this.rayon = rayon;
    this.couleur = couleur;
  }

  calculPerimetre() {
    return this.rayon * 2 * Math.PI;
  }
  calculerAire() {
    return Math.PI * (this.rayon * this.rayon);
  }
}
// Créer une classe Voiture
class Vehicule {
  name;
  couleur = "rouge";
  constructor(name) {
    this.name = name;
  }
}
class Voiture extends Vehicule {
  constructor(name, marque) {
    super(name);
    this.marque = marque;
  }
}
