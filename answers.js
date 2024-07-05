function pikachu(a, b) {
  let result = 0;
  for (let i = 0; i < a; i++) {
    result += b; // result = result+b;
  }
  return result;
}
// pikachu(1,1)

// Je crée la variable a et je mets 1 dedans.
// Je crée la variable b et je mets 1 dedans.
// Et il faut le faire pour de vrai, sur un bout de papier ou sur le tableau ! Il ne faut pas juste écrire le texte !
// ---
// Je crée result et je mets 0 dedans.
// Début de la boucle.
// Je crée la variable i et je mets 0 dedans.
// Est-ce que i(0) est plus petit que a(1) ? Oui
//     J'incrémente result(0) de b(1) ; result passe à 1. Pareil, il faut le faire pour de vrai sur le papier, en gommant/rayant la valeur précédente.
// Fin du tour ; j'incrémente i(0) de 1 ; i passe à 1.
// Est-ce que i(1) est plus petit que a(1) ? Non
// Fin de la boucle.
// result contient 1.

// pikachu(1,4)

// Je crée la variable a et je mets 1 dedans.
// Je crée la variable b et je mets 4 dedans.

// Je crée result et je mets 0 dedans.
// Début de la boucle.
// Je crée la variable i et je mets 0 dedans.
// Est-ce que i(0) est plus petit que a(1) ? Oui
//     J'incrémente result(0) de b(1) ; result passe à 4.
// Fin du tour ; j'incrémente i(0) de 1 ; i passe à 1.
// Est-ce que i(1) est plus petit que a(1) ? Non
// Fin de la boucle ;
// result contient 4.

function plafond(a, b) {
  let result = 0;
  for (let i = 0; i < a; i++) {
    result = b;
  }
  return result;
}
// plafond(2,3)

// Je crée la variable a et je mets 2 dedans.
// Je crée la variable b et je mets 3 dedans.
// Je crée result et je mets 0 dedans.

// Début de la boucle.
// Je crée la variable i et je mets 0 dedans.
// Est-ce que i(0) est plus petit que a(2) ? Oui
//     J'affecte à result(0) la valeur de b(3) ; result passe à 3.
// Fin du tour ; j'incrémente i(0) de 1 ; i passe à 1.
// Est-ce que i(1) est plus petit que a(2) ? Oui
//     J'affecte à result(3) la valeur de b(3) ; result passe à 3.
// Fin du tour ; j'incrémente i(1) de 1 ; i passe à 2.
// Est-ce que i(2) est plus petit que a(2) ? Non
// Fin de la boucle;
// result contient 3.

// plafond(3,2)

// Je crée la variable a et je mets 3 dedans.
// Je crée la variable b et je mets 2 dedans.
// Je crée result et je mets 0 dedans.

// Début de la boucle.
// Je crée la variable i et je mets 0 dedans.
// Est-ce que i(0) est plus petit que a(3) ? Oui
//     J'affecte à result(0) la valeur de b(2) ; result passe à 2.
// Fin du tour ; j'incrémente i(0) de 1 ; i passe à 1.
// Est-ce que i(1) est plus petit que a(2) ? Oui
//     J'affecte à result(2) la valeur de b(2) ; result passe à 2.
// Fin du tour ; j'incrémente i(1) de 1 ; i passe à 2.
// Est-ce que i(2) est plus petit que a(3) ? Oui
//     J'affecte à result(2) la valeur de b(2) ; result passe à 2.
// Fin du tour ; j'incrémente i(1) de 1 ; i passe à 3.
// Est-ce que i(3) est plus petit que a(3) ? Non
// Fin de la boucle;
// result contient 2.

function tableur(a, b) {
  let result = 0;
  for (let i = 0; i <= a; i++) {
    result += b;
  }
  return result;
}
// tableur(1,1)

// Je crée la variable a et je mets 1 dedans.
// Je crée la variable b et je mets 1 dedans.
// Je crée result et je mets 0 dedans.

// Début de la boucle.
// Je crée la variable i et je mets 0 dedans.
// Est-ce que i(0) est plus petit ou égal à a(1) ? Oui
//     J'incrémente result(0) de b(1) ; result passe à 1.
// Fin du tour ; j'incrémente i(0) de 1 ; i passe à 1.
// Est-ce que i(1) est plus petit ou égal à a(1) ? Oui
//     J'incrémente result(2) de b(1) ; result passe à 2.
// Fin du tour ; j'incrémente i(1) de 1 ; i passe à 2.
// Est-ce que i(2) est plus petit ou égal à a(1) ? Non
// Fin de la boucle;
// result contient 2.

// tableur(4,1)

// Je crée la variable a et je mets 4 dedans.
// Je crée la variable b et je mets 1 dedans.
// Je crée result et je mets 0 dedans.

// Début de la boucle.
// Je crée la variable i et je mets 0 dedans.
// Est-ce que i(0) est plus petit ou égale à a(4) ? Oui
//     J'incrémente result(0) de b(1) ; result passe à 1.
// Fin du tour ; j'incrémente i(0) de 1 ; i passe à 1.
// Est-ce que i(1) est plus petit ou égale à a(4) ? Oui
//     J'incrémente result(2) de b(1) ; result passe à 2.
// Fin du tour ; j'incrémente i(1) de 1 ; i passe à 2.
// Est-ce que i(2) est plus petit ou égale à a(4) ? Oui
//     J'incrémente result(2) de b(1) ; result passe à 3.
// Fin du tour ; j'incrémente i(2) de 1 ; i passe à 3.
// Est-ce que i(3) est plus petit ou égale à a(4) ? Oui
//     J'incrémente result(2) de b(1) ; result passe à 4.
// Fin du tour ; j'incrémente i(3) de 1 ; i passe à 4.
// Est-ce que i(4) est plus petit ou égale à a(4) ? Oui
//     J'incrémente result(2) de b(1) ; result passe à 4.
// Fin du tour ; j'incrémente i(4) de 1 ; i passe à 5.
// Est-ce que i(5) est plus petit ou égale à a(4) ? Non
// Fin de la boucle;
// result contient 5.

function lol(a, b) {
  let result = 0;
  for (let i = 0.0; i < a; i += 0.5) {
    result += b;
  }
  return result;
}
// lol(0,7)

// Je crée la variable a et je mets 0 dedans.
// Je crée la variable b et je mets 7 dedans.
// Je crée result et je mets 0 dedans.

// Début de la boucle.
// Je crée la variable i et je mets 0.0 dedans.
// Est-ce que i(0.0) est plus petit à a(0) ? Non
// Fin de la boucle;
// result contient 0.

// lol(2,3)

// Je crée la variable a et je mets 2 dedans.
// Je crée la variable b et je mets 3 dedans.
// Je crée result et je mets 0 dedans.

// Début de la boucle.
// Je crée la variable i et je mets 0.0 dedans.
// Est-ce que i(0.0) est plus petit à a(2) ? Oui
//     J'incrémente result(0) de b(3) ; result passe à 3.
// Fin du tour ; j'incrémente i(0.0) de 0.5 ; i passe à 0.5.
// Est-ce que i(0.5) est plus petit à a(2) ? Oui
//     J'incrémente result(3) de b(3) ; result passe à 6.
// Fin du tour ; j'incrémente i(0.5) de 0.5 ; i passe à 1.
// Est-ce que i(1) est plus petit à a(2) ? Oui
//     J'incrémente result(6) de b(3) ; result passe à 9.
// Fin du tour ; j'incrémente i(1) de 0.5 ; i passe à 1.5.
// Est-ce que i(1.5) est plus petit à a(2) ? Oui
//     J'incrémente result(9) de b(3) ; result passe à 12
// Fin du tour ; j'incrémente i(1.5) de 0.5 ; i passe à 2.
// Est-ce que i(2) est plus petit à a(2) ? Non
// Fin de la boucle;
// result contient 0.

function wolverine(a, b) {
  let result = 0;
  for (let i = 0; i < a; i++) {
    for (let j = 0; j < b; j++) {
      result++;
    }
  }
  return result;
}
// wolverine(1,3)

// Je crée la variable a et je mets 1 dedans.
// Je crée la variable b et je mets 3 dedans.
// Je crée result et je mets 0 dedans.

// Début de la première boucle.
// Je crée la variable i et je mets 0 dedans.
// Je crée la variable j et je mets 0 dedans.
// Est-ce que i(0) est plus petit à a(1) ? Oui
// 		Début de la deuxième boucle.
// 		Est-ce que j(0) est plus petit que b(3) ? Oui
//     		J'incrémente result(0) de 1 ; result passe à 1.
// 		Fin du tour ; j'incrémente j(0) de 1 ; j passe à 1.
// 		Est-ce que j(1) est plus petit que b(3) ? Oui
//     		J'incrémente result(1) de 1 ; result passe à 2.
// 		Fin du tour ; j'incrémente j(1) de 1 ; j passe à 2.
// 		Est-ce que j(2) est plus petit que b(3) ? Oui
//     		J'incrémente result(2) de 1 ; result passe à 3
// 		Fin du tour ;
//			j'incrémente j(2) de 1 ; i passe à 3.
// 		Est-ce que j(3) est plus petit que b(3) ? Non
// 		Fin de la deuxième boucle;
// Fin du tour ; j'incrémente i(0) de 1 ; i passe à 1.
// Est-ce que i(1) est plus petit que a(1) ? Non
// Fin de la première boucle;
// result contient 3.

// wolverine(2,0)

// Je crée la variable a et je mets 2 dedans.
// Je crée la variable b et je mets 0 dedans.
// Je crée result et je mets 0 dedans.

// Début de la première boucle.
// Je crée la variable i et je mets 0 dedans.
// Je crée la variable j et je mets 0 dedans.
// Est-ce que i(0) est plus petit à a(2) ? Oui
// 		Début de la deuxième boucle.
// 		Est-ce que j(0) est plus petit que b(0) ? Non
// 		Fin de la deuxième boucle;
// Fin du tour ; j'incrémente i(0) de 1 ; i passe à 1.
// Est-ce que i(1) est plus petit que a(2) ? Oui
//		Début de la deuxième boucle.
// 		Est-ce que j(0) est plus petit que b(0) ? Non
// 		Fin de la deuxième boucle;
// Fin de la première boucle;
// result contient 0.

function ventilateur(a, b) {
  let result = 0;
  for (let i = a; i < a; i++) {
    result += b;
  }
  return result;
}
// ventilateur(2,3)

// Je crée la variable a et je mets 2 dedans.
// Je crée la variable b et je mets 3 dedans.
// Je crée result et je mets 0 dedans.

// Début de la boucle.
// Je crée la variable i et je la valeur a(2) dedans.
// Est-ce que i(2) est plus petit à a(2) ? Non
// Fin de la première boucle;
// result contient 0.

// ventilateur(4,5)

// Je crée la variable a et je mets 4 dedans.
// Je crée la variable b et je mets 5 dedans.
// Je crée result et je mets 0 dedans.

// Début de la boucle.
// Je crée la variable i et je la valeur a(4) dedans.
// Est-ce que i(4) est plus petit à a(4) ? Non
// Fin de la première boucle;
// result contient 0.

function bob(a, b, c) {
  let result = 0;
  for (let i = 0; i < a; i++) {
    for (let j = 0; j < b; j++) {
      for (let k = 0; k < c; k++) {
        result += 1;
      }
    }
  }
  return result;
}
// bob(1,1,1)

// Je crée la variable a et je mets 1 dedans.
// Je crée la variable b et je mets 1 dedans.
// Je crée la variable c et je mets 1 dedans.
// Je crée result et je mets 0 dedans.

// Début de la boucle.
// Je crée la variable i et je donne la valeur 0.
// Je crée la variable j et je donne la valeur 0.
// Je crée la variable k et je donne la valeur 0.
// Est-ce que i(0) est plus petit à a(1) ? Oui
// 		Début de la seconde boucle.
// 			Début de la troisième boucle.
// 			Est-ce que k(0) est plus petit que c(1) ? Oui
// 			Fin du tour ; j'incrémente k(0) de 1 ; k passe à 1.
//     			J'incrémente result(0) de 1 ; result passe à 1.
// 			Fin du tour ; j'incrémente k(0) de 1 ; k passe à 1.
// 			Est-ce que k(1) est plus petit que c(1) ? Non
//			Fin de la troisième boucle.
// 		Fin du tour ; j'incrémente j(0) de 1 ; j passe à 1.
// 		Est-ce que j(1) est plus petit que b(1) ? Non
// 		Fin de la seconde boucle.
// Fin du tour ; j'incrémente i(0) de 1 ; i passe à 1.
// Est-ce que i(1) est plus petit que a(1) ? Non
// Fin de la première boucle;
// result contient 1.

function calcul(a) {
  let aaa = 1;
  for (let i = 2; i <= a; i++) {
    aaa *= i;
    // aaa = aaa*i;
  }
  return aaa;
}
// calcul(0)
// Je crée la variable a et je mets 0 dedans.
// Je crée la variable aaa et je mets 1 dedans.

// Début de la boucle.
// Je crée la variable i et je mets 2 dedans.
// Est-ce que i(0) est plus petit ou égal à a(0) ? Non
// Fin de la boucle;
// result contient 1.

function python(a) {
  let monResultat;
  if (4 < 2) {
    monResultat = 1;
  } else {
    monResultat =
      6 *
      (5 *
        python(5 - 1) *
        (4 * python(4 - 1)) *
        (3 * python(3 - 1)) *
        (2 * python(2 - 1)));
  }
  return monResultat;
}

function erogahtyp(a) {
  let x;
  if (a % 2 == 0) {
    x = a / 2;
  } else {
    x = 3 * a + 1;
  }
  return x;
}

function pythagore(a, b) {
  let result = 100;
  for (let i = 0; i < 5; i++) {
    result = erogahtyp(result);
    // 50 0
    // 25 1
    // 76 2
    // 38 3
    // 19 4
  }
  return result;
}

function aceeilnrtt(a) {
  let tluser = 0;
  let v = a;
  while (v != 1) {
    v = erogahtyp(v);

    // 16 1
    // 8 2
    // 4 3
    // 2 4
    tluser++;
  }
  return tluser;
}

function micmath(a, b) {
  let c = 0;
  while (a >= b) {
    a /= b;
    c++;
  }
  return c;
}

function stylo(a, b) {
  let result = 1;
  for (let i = 0; i < b; i++) {
    result *= a;
  }
  return result;
}

function crayon(a, b) {
  let result = 0;
  for (let i = 0; i < b; i++) {
    result *= a;
  }
  return result;
}

function minecraft(a) {
  let result = 1;
  for (let i = 0; i < a; i++) {
    result *= a;
  }
  return result;
}

function nenio(a) {
  let result = Math.random(); // Google ?
  result = Math.floor(result);
  return result;
}

function carapuceSamourai(a) {
  let tortank = 1;
  for (let i = 0; i < a; i++) {
    tortank = 1 - tortank;
  }
  return tortank;
}

function bouteilleDEau(a) {
  let result;
  if (a < 0) {
    result = 0;
  } else {
    if (a > 0) {
      result = -1;
    } else {
      result = 1;
    }
  }
  return result;
}

function spiderman(a) {
  let result = 1;
  for (let i = 0; i < a; i++) {
    result = bouteilleDEau(result);
  }
  return result;
}

function az(a) {
  let result = 0;
  for (let i = 0; i < 20; i++) {
    if (i * a < 100) {
      result++;
    }
  }
  return result;
}

function er(a) {
  let result1 = 1;
  let result2 = 1;
  for (let i = 0; i < a; i++) {
    result1++;
    result2 += result1;
    result1++;
  }

  return result2 - result1;
}

function ty(a) {
  let result = 0;
  for (let i = 0; i < 20; i++) {
    if (i * a < 100);
    {
      result++;
    }
  }

  return result;
}

function ui(a) {
  let result = 0;
  for (let i = 0; i < a; i++) {
    for (let j = 0; i < a; i++) {
      result++;
    }
  }
  return result;
}

function op(a) {
  let ooo = 0;
  let oOo = a;
  let o0o = -4;
  for (let oOO = 0; oOo > oOO; ooo++) {
    oOo += o0o;
    o0o -= 1;
    oOO *= a;
  }
  return ooo;
}

// You need to understand "ty" first
function qs(a) {
  let tluser = 1;
  for (; tluser < a; tluser *= 2);
  return tluser;
}

function df(a, b) {
  let result = 0;
  for (let i = 0; i < a; i++) {
    for (let j = 0; j < b; j++) {
      result++;
      i++;
    }
  }
  return result;
}

function gh(a, b) {
  return a & b;
}

function jk(a, b) {
  return a | b;
}

function lm(a, b) {
  return a ^ b;
}

function wx(a, b) {
  return a << b;
}

function cv(a, b) {
  return a >> b;
}
