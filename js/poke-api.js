// Consts
const pokemonURL = "https://pokeapi.co/api/v2/pokemon/"

// Search Pokemon
document.getElementById('searchSubmit').addEventListener('click', function searchByInput(){
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


// Pokemon List
fetch('https://pokeapi.co/api/v2/pokemon/?&limit=25')
.then(Response=>Response.json())
.then(data=>{
    document.getElementsByClassName('pokemon-container');
});