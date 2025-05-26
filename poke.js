function displayRandomImages() {
  var pokemons = [
    "Absol",
    "Aegislash",
    "Armarouge",
    "Azumarill",
    "Blastoise",
    "Blaziken",
    "Blissey",
    "Buzzwole",
    "Ceruledge",
    "Chandelure",
    "Charizard",
    "Cinderace",
    "Clefable",
    "Comfey",
    "Cramorant",
    "Crustle",
    "Darkrai",
    "Decidueye",
    "Delphox",
    "Dodrio",
    "Dragapult",
    "Dragonite",
    "Duraludon",
    "Eldegoss",
    "Espeon",
    "Falinks",
    "Garchomp",
    "Gardevoir",
    "Gengar",
    "Glaceon",
    "Goodra",
    "Greedent",
    "Greninja",
    "Gyarados",
    "Ho-Oh",
    "Hoopa",
    "Inteleon",
    "Lapras",
    "Leafeon",
    "Lucario",
    "Machamp",
    "Mamoswine",
    "Meowscarada",
    "Metagross",
    "Mew",
    "MewtwoX",
    "MewtwoY",
    "Mimikyu",
    "Miraidon",
    "Mr.Mime",
    "Ninetales",
    "Pikachu",
    "Psyduck",
    "Raichu",
    "Rapidash",
    "Sableye",
    "Scizor",
    "Scyther",
    "Slowbro",
    "Snorlax",
    "Suicune",
    "Sylveon",
    "Talonflame",
    "Tinkaton",
    "Trevenant",
    "Tsareena",
    "Tyranitar",
    "Umbreon",
    "Urshifu",
    "Venusaur",
    "Wigglytuff",
    "Zacian",
    "Zeraora",
    "Zoroark",
  ];

  const pokemonImages = pokemons.map(
    (mon) =>
      "https://d275t8dp8rxb42.cloudfront.net/pokemon/portrait/" + mon + ".png",
  );
  const randomPokemon = pokemonImages[Math.floor(Math.random() * pokemonImages.length)];
  document.getElementById("pokemonImg").innerHTML = '<img id="pokemonImg" src="' + randomPokemon + '" />';
}

function path() {
  var message = ["Go top path", "Go Central Path", "Go Bottom path"];
  var a = Math.floor(Math.random() * message.length);

  window.alert(message[a]);
}

function items() {
  var message = [
    "Aeos Cookie",
    "Assault Vest",
    "Attack weight",
    "Buddy barrier",
    "Choice Specs",
    "Drain Crown",
    "Energy Amplifier",
    "Exp. Share",
    "Float Stone",
    "Focus Band",
    "Leftovers",
    "Muscle band",
    "Razor Claw",
    "Rocky Helmet",
    "Scope lens",
    "Score Shield",
    "Shell bell",
    "Sp. Atk Specs",
    "Weakness Policy",
    "Wise Glasses",
    "Slick Spoon",
    "Rescue hood",
    "Rusted Sword",
  ];

  var b = Math.floor(Math.random() * message.length);

  window.alert(message[b]);
}

function battle() {
  var message = [
    "Eject button",
    "Fluffy Tail",
    "Full Heal",
    "Goal Getter",
    "Potion",
    "Slow Smoke",
    "X Attack",
    "X speed",
  ];

  var c = Math.floor(Math.random() * message.length);

  window.alert(message[c]);
}
