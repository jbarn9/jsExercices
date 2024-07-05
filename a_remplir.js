// Retourne une ligne de taille w, avec le caractère c
// Exemple : "*******"
function fullLine(w, c) {
  let s = "";
  for (let i = 0; i < w; i++) {
    s += c;
  }

  return s;
}
// Retourne un rectangle avec le caractère c, de w colonnes et h lignes
// Exemple :
// "*****\n*****\n*****\n"
//
// Puisque le caractère \n est un retour à la ligne, ce mot correspond en réalité au rectangle :
// "*****
//  *****
//  *****"
function fullRectangle(w, h, c) {
  let s = "";
  for (let i = 0; i < h; i++) {
    s += fullLine(w, c);
    s += "\n";
  }
  return s;
}
// Retourne une ligne de taille w avec c1 au bord, c2 au milieu
// Exemple : "*-----*"
function emptyLine(w, c1, c2) {
  let s = "";
  for (let i = 0; i < w; i++) {
    if (i == 0 || i == w - 1) {
      s += c1;
    } else {
      s += c2;
    }
  }
  return s;
}

// Retourne un rectangle avec c1 aux bords et c2 au milieu, de w colonnes et h lignes
// Exemple : "*****\n*---*\n*****\n"
// Dessin correspondant :
// *****
// *---*
// *****
function emptyRectangle(w, h, c1, c2) {
  let s = "";
  for (let i = 0; i < h; i++) {
    if (i == 0 || i == h - 1) {
      s += fullLine(w, c1);
      s += "\n";
    } else {
      s += emptyLine(w, c1, c2);
      s += "\n";
    }
  }
  return s;
}

// Retourne un triangle rectangle avec le caractère c, de hauteur h
// Angle droit en bas à gauche
// Exemple : "*\n**\n***\n****\n"
// Dessin correspondant :
// *
// **
// ***
// ****
function fullTriangle1(h, c) {
  let s = "";
  for (let i = 1; i <= h; i++) {
    s += fullLine(i, c);
    s += "\n";
  }
  return s;
}

// Retourne un triangle rectangle avec les caractères c1 et c2, de hauteur h
// Angle droit en bas à droite
// Exemple : "---*\n--**\n-***\n****\n"
// Dessin correspondant :
// ---*
// --**
// -***
// ****
function fullTriangle2(h, c1, c2) {
  let s = "";
  let j = 1;
  for (let i = h - 1; i >= 0; i--) {
    s += fullLine(i, c2);
    s += fullLine(j, c1);
    s += "\n";
    j++;
  }
  return s;
}

// Retourne un triangle isocèle avec les caractères c1 et c2, de hauteur h
// Base en bas
// Exemple : "---*\n--***\n-*****\n*******\n"
// Dessin correspondant :
// ---*
// --***
// -*****
// *******
function fullTriangle3(h, c1, c2) {
  let s = "";
  let j = 1;
  for (let i = h - 1; i >= 0; i--) {
    s += fullLine(i, c2);
    s += fullLine(j, c1);
    s += "\n";
    j += 2;
  }
  return s;
}

// Retourne un triangle rectangle vide avec les caractères c1 et c2, de hauteur h
// Angle droit en bas à gauche
// Exemple : "*\n**\n*-*\n****\n"
// Dessin correspondant :
// *
// **
// *-*
// ****
function emptyTriangle1(h, c1, c2) {
  let s = "";
  for (let i = 1; i <= h; i++) {
    if (i == h) {
      s += fullLine(i, c1);
    } else {
      s += emptyLine(i, c1, c2);
    }
    s += "\n";
  }
  return s;
}

// Retourne un triangle rectangle vide avec les caractères c1 et c2, de hauteur h
// Angle droit en bas à droite
// Exemple : "---*\n--**\n-*-*\n****\n"
// Dessin correspondant :
// ---*
// --**
// -*-*
// ****
function emptyTriangle2(h, c1, c2) {
  let s = "";
  let j = h - 1;
  for (let i = 1; i <= h; i++) {
    s += fullLine(j, c2);
    j--;
    if (i == h) {
      s += fullLine(i, c1);
    } else {
      s += emptyLine(i, c1, c2);
    }
    s += "\n";
  }
  return s;
}

// Retourne un triangle isocèle vide avec les caractères c1 et c2, de hauteur h
// Base en bas
// Exemple : "---*\n--*-*\n-*---*\n*******\n"
// Dessin correspondant :
// ---*
// --*-*
// -*---*
// *******
function emptyTriangle3(h, c1, c2) {
  let s = "";
  let j = h - 1;
  let k = 1;
  for (let i = 1; i <= h; i++) {
    s += fullLine(j, c2);
    j--;
    if (i == h) {
      s += fullLine(k, c1);
    } else {
      s += emptyLine(k, c1, c2);
    }
    k += 2;
    s += "\n";
  }
  return s;
}

// Retourn un "pacman" de hauteur h avec le caractère c1
// Exemple :
// *****\n***\n*\n***\n*****\n"
// Dessin correspondant :
// *****
// ***
// *
// ***
// *****
function pacman(h, c1) {
  let s = "";
  if (h % 2 == 0) {
    h = h - 1;
  }
  let j = h;
  while (j >= 1) {
    s += fullLine(j, c1);
    s += "\n";
    j -= 2;
  }
  while (j < h) {
    j += 2;
    s += fullLine(j, c1);
    s += "\n";
  }
  return s;
}

// Retourne un sablier de hauteur h avec les caractères c1 et c2
// Exemple :
// "*****\n-***\n--*\n-***\n*****\n"
// Dessin correspondant :
// *****
// -***
// --*
// -***
// *****
function hourglass(h, c1, c2) {
  let s = "";
  if (h % 2 == 0) {
    h = h - 1;
  }
  let j = h;
  let k = 0;
  while (j >= 1) {
    s += fullLine(k, c2);
    s += fullLine(j, c1);
    s += "\n";
    j -= 2;
    k++;
  }
  while (j < h) {
    j += 2;
    k--;
    s += fullLine(k, c2);
    s += fullLine(j, c1);
    s += "\n";
  }
  return s;
}

// Retourne un plus de taille w avec les caractères c1 et c2
// Exemple :
// "--*\n--*\n*****\n--*\n--*\n"
// Dessin correspondant :
// --*
// --*
// *****
// --*
// --*
function plus(w, c1, c2) {
  let s = "";
  s += "TODO";
  return s;
}

// Retourne un multiplié de taille w avec les caractères c1 et c2
// Exemple :
// "*---*\n-*-*\n--*\n-*-*\n*---*\n"
// Dessin correspondant :
// *---*
// -*-*
// --*
// -*-*
// *---*
function times(w, c1, c2) {
  let s = "";
  s += "TODO";
  return s;
}

// Retourne un serpent horizontal de taille w avec les caractères c1 et c2
// Exemple :
// "*****\n----*\n*****\n*\n*****\n"
// Dessin correspondant :
// *****
// ----*
// *****
// *
// *****
function snake1(w, c1, c2) {
  let s = "";
  s += "TODO";
  return s;
}

// Retourne un serpent vertical de taille w avec les caractères c1 et c2
// Exemple :
// "*-***\n*-*-*\n*-*-*\n*-*-*\n***-*\n"
// Dessin correspondant :
// *-***
// *-*-*
// *-*-*
// *-*-*
// ***-*
function snake2(w, c1, c2) {
  let s = "";
  s += "TODO";
  return s;
}

// Retourne un échiquier de taille w avec les caractères c1 et c2
// Exemple :
// "*-*-*\n-*-*\n*-*-*\n-*-*\n*-*-*"
// Dessin correspondant :
// *-*-*
// -*-*
// *-*-*
// -*-*
// *-*-*
function checkerboard(w, c1, c2) {
  let s = "";
  s += "TODO";
  return s;
}

// Cf dessin :)
function diagonal1(w, c1, c2) {
  let s = "";
  s += "TODO";
  return s;
}

// Cf dessin :)
function diagonal2(w, c1, c2) {
  let s = "";
  s += "TODO";
  return s;
}
