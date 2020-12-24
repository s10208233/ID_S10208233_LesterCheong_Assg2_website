// Consts
const pokemonURL = "https://pokeapi.co/api/v2/pokemon/"
const pokemonList = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=649"

// Variables
var pokemonVariables = [];
let nationalDex = [];


//  Execute
fetch(pokemonList)
.then(response=>response.json())
.then(data=>{
    nationalDex=data['results'];
});
setTimeout(initializeList,750);



// Functions
function initializeList(){
    for (i=0;i<nationalDex.length;i++){
        getPokemon(nationalDex[i]['name']);
        pokemonVariables.push(nationalDex[i]['name']);
        //console.log("Loaded: "+nationalDex[i]['name'],i);
    }
}

async function getPokemon(input){
    await fetch(pokemonURL+input)
    .then(response=>response.json())
    .then(data=>{
        pokemonAniSprite = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
        pokemonID = data['id'];
        pokemonName = data['forms'][0]['name'];
        pokemonName = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
        pokemonHeight = data["height"];
        pokemonWeight = data["weight"];
        type1 = data["types"][0]["type"]["name"];
        if (data["types"].length==2){
          type2 = data["types"][1]["type"]["name"];
        }
        else { type2="null" }
        console.log(type1,type2);
    });
    //  Create pokemon cards after every for loop through list
    setTimeout(createCard(pokemonAniSprite,pokemonID,pokemonName,pokemonHeight,pokemonWeight,type1,type2),500);
}

function createCard(imgSrc,id,name,height,weight,type1,type2){
    let card = document.createElement('div');
    let typeStyle = "margin:10px auto;margin-bottom:last-child:50px;padding:5px 10px;width:75px;border-radius:5px;";
    card.classList.add("pokemon-card");
    let cardContent = "\
    <a class='anchors' id="+id+"></a><a class='anchors' id="+name+"></a>\
    <div class='img-container'><img src='"+imgSrc+"'></div>\
    <h1>"+name+"</h1>\
    <div style='"+typeStyle+"' class='"+type1+"'>"+type1+"</div><div style='"+typeStyle+"' class='"+type2+"'>"+type2+"</div>\
    <p>#"+id+"</p>\
    <p>Height: "+height+"<br>\
    Weight: "+weight+"</p>\
    <button class='details'>Details</button>";
    card.innerHTML = cardContent;
    document.getElementById('pokemon-container').appendChild(card)
}

//  Events
document.getElementById('searchSubmit').addEventListener('click', function searchByInputpkmID(){
    let pkmID = document.getElementById('searchInput').value;
    pkmID = pkmID.charAt(0).toUpperCase() + pkmID.slice(1)
    console.log(pkmID);
    scrollTo(pkmID);
    function scrollTo(hash) {
        location.hash = "#" + hash;
    }
});

// TO MAKE RETURN KEY HIT searchInput FUNCTION
document.getElementById('searchInput').addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("searchSubmit").click();
  }
});

// AUTO COMPLETE FUCNTION FOR SERACH BAR
setTimeout(autocomplete(document.getElementById("searchInput"),pokemonVariables),500);
function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
          /*check if the item starts with the same letters as the text field value:*/
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
          currentFocus++;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 38) { //up
          /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
          currentFocus--;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 13) {
          /*If the ENTER key is pressed, prevent the form from being submitted,*/
          e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
  }
// END OF AUTOCOMPLETE FUNCTION FOR SEARCH BAR