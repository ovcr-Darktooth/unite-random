function displayRandomImages() {
  var pokemons = [
    {name:"Absol", id: "359"},
    {name:"Aegislash", id: "681"},
    {name:"Alcremie", id: "869"},
    {name:"Armarouge", id: "936"},
    {name:"Azumarill", id: "184"},
    {name:"Blastoise", id: "009"},
    {name:"Blaziken", id: "257"},
    {name:"Blissey", id: "242"},
    {name:"Buzzwole", id: "794"},
    {name:"Ceruledge", id: "937"},
    {name:"Chandelure", id: "609"},
    {name:"Charizard", id: "006"},
    {name:"Cinderace", id: "815"},
    {name:"Clefable", id: "036"},
    {name:"Comfey", id: "764"},
    {name:"Cramorant", id: "845"},
    {name:"Crustle", id: "558"},
    {name:"Darkrai", id: "491"},
    {name:"Decidueye", id: "724"},
    {name:"Delphox", id: "655"},
    {name:"Dodrio", id: "085"},
    {name:"Dragapult", id: "887"},
    {name:"Dragonite", id: "149"},
    {name:"Duraludon", id: "884"},
    {name:"Eldegoss", id: "830"},
    {name:"Espeon", id: "196"},
    {name:"Falinks", id: "870"},
    {name:"Garchomp", id: "445"},
    {name:"Gardevoir", id: "282"},
    {name:"Gengar", id: "094"},
    {name:"Glaceon", id: "471"},
    {name:"Goodra", id: "706"},
    {name:"Greedent", id: "820"},
    {name:"Greninja", id: "658"},
    {name:"Gyarados", id: "130"},
    {name:"Ho-Oh", id: "250"},
    {name:"Hoopa", id: "720"},
    {name:"Inteleon", id: "818"},
    {name:"Lapras", id: "131"},
    {name:"Leafeon", id: "470"},
    {name:"Lucario", id: "448"},
    {name:"Machamp", id: "068"},
    {name:"Mamoswine", id: "473"},
    {name:"Meowscarada", id: "908"},
    {name:"Metagross", id: "376"},
    {name:"Mew", id: "151"},
    {name:"MewtwoX", id: "150-Mega-X"},
    {name:"MewtwoY", id: "150-Mega-Y"},
    {name:"Mimikyu", id: "778"},
    {name:"Miraidon", id: "1008"},
    {name:"Mr.Mime", id: "122"},
    {name:"Ninetales", id: "038-Alola"},
    {name:"Pikachu", id: "025"},
    {name:"Psyduck", id: "054"},
    {name:"Raichu", id: "026-Alola"},
    {name:"Rapidash", id: "078-Galar"},
    {name:"Sableye", id: "302"},
    {name:"Scizor", id: "212"},
    {name:"Scyther", id: "123"},
    {name:"Slowbro", id: "080"},
    {name:"Snorlax", id: "143"},
    {name:"Suicune", id: "245"},
    {name:"Sylveon", id: "700"},
    {name:"Talonflame", id: "663"},
    {name:"Tinkaton", id: "959"},
    {name:"Trevenant", id: "709"},
    {name:"Tsareena", id: "763"},
    {name:"Tyranitar", id: "248"},
    {name:"Umbreon", id: "197"},
    {name:"Urshifu", id: "892"},
    {name:"Venusaur", id: "003"},
    {name:"Wigglytuff", id: "040"},
    {name:"Zacian", id: "888"},
    {name:"Zeraora", id: "807"},
    {name:"Zoroark", id: "571"}
  ];

  const randomIndex = Math.floor(Math.random() * pokemons.length);
  const randomPokemon = pokemons[randomIndex]["name"];
  const randomPokemonId = pokemons[randomIndex]["id"];
  const randomPokemonLink = "https://d275t8dp8rxb42.cloudfront.net/pokemon/portrait/" + randomPokemon + ".png";

  document.getElementById("pokemonImgDiv").innerHTML = '<img id="pokemonImg" width="220" height="220" alt=" " src="' + randomPokemonLink + '" onerror="alternativeImage(&quot;' + randomPokemonId + '&quot;)" /><p style="font-size:4em">' + randomPokemon + '</p>';
}

function alternativeImage(id)
{
  let documentImage = document.getElementById('pokemonImg');
  //Repo: https://github.com/HybridShivam/Pokemon/tree/master/assets/images
  let link = 'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/'+ id +'.png';
  if (documentImage && documentImage.src != link)
    documentImage.src = link;
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
