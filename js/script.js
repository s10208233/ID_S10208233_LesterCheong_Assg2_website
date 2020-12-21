// Consts
const pokemonURL = "https://pokeapi.co/api/v2/pokemon/"
const pokemonList = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=649"

// Variables
let nationalDex = [];
dexPage = 0;


//  Execute
//  1.  Get whole dex
fetch(pokemonList)
.then(response=>response.json())
.then(data=>{
    nationalDex=data['results'];
});

//  2.  Wait for Dex to load before calling looping log
setTimeout(logList,1000);



// Functions
function logList(){
    for (i=0;i<nationalDex.length;i++){
        pokemon(nationalDex[i]['name']);
        console.log(nationalDex[i]['name'],i);
    }
}

async function pokemon(input){
    let pokemonName="";
    await fetch(pokemonURL+input)
    .then(response=>response.json())
    .then(data=>{
        pokemonAniSprite = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
        pokemonID = data['id'];
        pokemonName = data['forms'][0]['name'];
        pokemonName = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
        pokemonHeight = data["height"];
        console.log('Loaded: '+ pokemonName);
    });
    setTimeout(
        createCard(pokemonAniSprite,pokemonID,pokemonName,pokemonHeight)
    ,500);
}

function createCard(imgSrc,id,name,height){
    let card = document.createElement('div');
    card.classList.add("pokemon-card");
    let cardContent = "\
    <img src='"+imgSrc+"'>\
    <h1>"+name+"</h1>\
    <p>#"+id+"</p>\
    <p>Height: "+height+"</p>";
    card.innerHTML = cardContent;
    document.getElementById('pokemon-container').appendChild(card)
}

//  Events
document.getElementById('searchSubmit').addEventListener('click', function searchByInputpkmID(){
    let pkmID = document.getElementById('searchInput').value;
    console.log(pkmID);
    fetch(pokemonURL + pkmID)
    .then(response=>response.json())
    .then(data=>{
        console.log(data.name);
        let name = data.name;
        alert("Searched Pokemon:\n\n"+name.charAt(0).toUpperCase() + name.slice(1))
    });
});