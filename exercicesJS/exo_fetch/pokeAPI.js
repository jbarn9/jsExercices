// SEARCHBAR
const searchInput = document.querySelector("[data-search]");
searchInput.addEventListener("input", (e) => {
  const value = e.target.value;
  let cards = document.querySelectorAll(".pokemon_card");
  // console.log(value);
  cards.forEach((card) => {
    if (card.id.toLowerCase().includes(value.toLowerCase())) {
      card.parentNode.style.display = "block";
    } else {
      card.parentNode.style.display = "none";
    }
  });
});

// API CALL
const apiDiv = document.querySelector(".apiContact");
const contactApi = async () => {
  await fetch("https://pokeapi.co/api/v2/pokemon/")
    .then((dataJson) => dataJson.json())
    .then((data) => {
      data.results.forEach(async (dataResult, i) => {
        const url = `${dataResult.url}`;
        const response = await fetch(url);
        const pokemon = await response.json();
        apiDiv.innerHTML += `
        <div class="col-sm-6 my-3 mb-sm-0 z-3">
            <div class="card pokemon_card ${dataResult.name} ${dataResult.id}" id="${dataResult.name}" style="width: 18rem">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png" class="card-img-top" alt="pokemon picture" />
                <div class="card-body text-center ">
                    <h5 class="card-title">${dataResult.name}</h5>
                    <p class="${pokemon.stats[0].base_stat}"> HP ${pokemon.stats[0].base_stat}</p>
                    <p> Attack  ${pokemon.stats[4].base_stat} </p>
                    <p> Defense ${pokemon.stats[3].base_stat}</p>
                    <a class="btn btn-primary-perso" onClick="selectPoke('${dataResult.name}', ${pokemon.id}, ${pokemon.stats[0].base_stat}, ${pokemon.stats[4].base_stat}, ${pokemon.stats[3].base_stat})">Sélectionner !</a>
                </div>
            </div>
        </div>`;
      });
    })
    .catch((error) => console.error("Erreur de chargement : " + error));
};

contactApi();

class Pokemon {
  msg = "";
  gameOver = false;
  // pv = hp
  constructor(id, name, health, attack, defense) {
    this.id = id;
    this.name = name;
    this.attack = attack;
    this.defense = defense;
    this.health = health;
  }

  getAttacked(amount, opponent) {
    let newHealth = this.health - amount;
    if (newHealth <= 0) {
      newHealth = 0;
      this.health = newHealth;
      this.gameOver = true;
      return (this.msg = "GAME OVER <br>" + this.name + " a perdu.");
    }
    this.health = newHealth;
    return (this.msg = this.displayInfo(opponent));
  }

  launchAttack(opponent) {
    let amount = this.attack - opponent.defense;
    if (amount < 0) amount = 10;

    opponent.getAttacked(amount, this.name);
  }

  displayInfo(player) {
    return `<h3 class="text-center">Attaque de ${player}</h3> <br> ${this.name} possède encore ${this.health} point(s) de vie.`;
  }
}

//function attack
let index = null;
let msg = document.querySelector(".msg p");
let gameover = null;
function startAttack() {
  gameover = false;
  document.querySelector(".msg").classList.toggle("hidden");
  if (pokemonList.length == 2) {
    let button = document.querySelector(".attack-button");
    let health_poke1 = document.querySelector(".health_" + pokemonList[0].name);
    let health_poke2 = document.querySelector(".health_" + pokemonList[1].name);
    button.classList.add("disabled");
    // first attack from player's pokemon
    pokemonList[0].launchAttack(pokemonList[1], pokemonList[0]);
    msg.innerHTML = `${pokemonList[1].msg}`;
    // Display health of pokemon AI
    health_poke2.innerText = "";
    health_poke2.innerText = "HP : " + pokemonList[1].health;
    pokemonList.forEach((poke) => {
      if (poke.gameOver) {
        gameover = true;
        document.querySelector(`.${poke.name} a`).click();
        return;
      }
    });
    // AI attack after 4000 millisec
    const IAttack = setTimeout(function () {
      if (!gameover) {
        msg.textContent = "";
        pokemonList[1].launchAttack(pokemonList[0]);
        msg.innerHTML = `${pokemonList[0].msg}`;
        // update health info
        health_poke1.innerText = "";
        health_poke1.innerText = "HP : " + pokemonList[0].health;
      }
      pokemonList.forEach((poke) => {
        if (poke.gameOver) {
          gameover = true;
          document.querySelector(`.${poke.name} a`).click();
          clearTimeout(IAttack);
          return;
        }
      });
      setTimeout(function () {
        msg.textContent = "";
        document.querySelector(".msg").classList.toggle("hidden");
        button.classList.toggle("disabled");
      }, 2000);
    }, 4000);
  } else {
    msg.innerText = "Choisis un deuxième pokémon !";
  }
}

// Initialization pokemon array
let pokemonList = [];
let i = 0;
let player = null;

// Pokemon selection
async function selectPoke(pokename, id, hp, attack, defense) {
  let cardbody = document.querySelector(`.${pokename}`);
  let playerPicture = document.getElementById("player_pictures");
  let button = cardbody.querySelector("a");

  // Add or remove selected class from cardbody
  cardbody.classList.toggle("selected");
  // Condition si la balise contient la classe "selected"
  if (cardbody.classList.contains("selected") && pokemonList.length < 2) {
    // Instanciate pokemon in pokemonList array
    pokemonList.push(new Pokemon(id, pokename, hp, attack, defense));
    // put color yellow in the background
    cardbody.style.backgroundColor = "#FFC900";
    player = playerPicture.querySelector(".player" + id);
    // Change inside button text
    button.innerHTML = "Déselectionner";
    i++;
  } else {
    i--;
    player = playerPicture.querySelector(".player" + id);
    button.innerHTML = "Sélectionner !";
    cardbody.style.backgroundColor = "#FFFFFF";
    // remove object from object pokemonList
    pokemonList.forEach((poke) => {
      if (poke.name === pokename) {
        // remove pokemon object from array pokemonList
        pokemonList.splice(pokemonList.indexOf(poke), 1);
      }
    });
  }
  playerPicture.innerHTML = "";
  pokemonList.forEach((poke) => {
    playerPicture.innerHTML += `
          <div class="col-6 player${poke.id} pictures">
            <div class="row ">
              <div class="col-12 img-div">
                <img src="" alt="pokemon picture">
              </div>
              <div class="col-12 info">
                  <h2>${poke.name}</h2>
                  <p class="health_${poke.name}">HP : ${poke.health} </p>
                  <p>Attaque : ${poke.attack} </p>
                  <p>Defense : ${poke.defense}</p>
              </div>
            </div>
          </div>`;
    // First pokemon details
    if (pokemonList.indexOf(poke) == 0) {
      document.querySelector(
        ".info"
      ).innerHTML += `<input class="btn btn-primary-perso attack-button" type="button" value="Attaquer !" onclick="startAttack()" />`;
      document.querySelector(".pictures:nth-child(1) .img-div img").style =
        "width:8rem;";
      document.querySelector(".img-div img").src =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/" +
        poke.id +
        ".gif";
      document
        .querySelector(".player" + poke.id)
        .classList.add("d-flex", "justify-content-center", "mt-5");
    }
    // Second pokemon details
    if (pokemonList.indexOf(poke) == 1) {
      document.querySelector(".pictures:nth-child(2) .img-div img").src =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/" +
        poke.id +
        ".gif";
      document
        .querySelector(".player" + poke.id)
        .classList.add("d-flex", "justify-content-start", "mb-5");
    }
  });

  // Disabled buttons after selection of 2 pokemon
  let cards_button = document.querySelectorAll(
    "div.pokemon_card:not(.selected) div.card-body a.btn"
  );
  if (pokemonList.length == 2) {
    cards_button.forEach((button) => {
      button.classList.add("disabled");
    });
  } else {
    cards_button.forEach((button) => {
      button.classList.remove("disabled");
    });
  }
}
