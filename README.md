# ID-Assignment02 - PokeDex
![alt text](https://static.wikia.nocookie.net/leonhartimvu/images/8/8b/Unova_Pok%C3%A9dex_anime.png/revision/latest/scale-to-width-down/1000?cb=20180721124908)
<br>
The Pokedex webpage is a web application of a PokeDex or Pokemon encyclopedia consisting of Pokemons in the Japanese role play game franchaise from the first generation up to the fifth generation. Goal being to allow users to search up and view detailed information of a specific Pokemon.

## Design Process
While the franchaise of the Pokemon games on the Nintendo handhelds have their own Pokedex in the game the information given is often not enough for players to leverage towards a more competitive gameplay. Hence the PokeDex webpage/web application was designed to give in depth details of a single pokemon giving the users; *this is mainly targeted towards competitive players.* The look and feel of the design are aligned with the theme of the game itself.


**Exaple Scenario**
>  1. Player is in a mutliplayer battle and mutliplayer battles tend to be very competitive.
>  2. Oponent sends out a pokemon the player has not ecounter before.
>  3. Player can refer to the site to get information he needs.
>  4. Player wins :)

View the wireframe: https://xd.adobe.com/view/f8186379-17a1-43f0-ae85-0127fc8ae43c-ad4b/?fullscreen<br>
XD File can be found in the repository named **'ID_S10208233_LesterCheong_Assg2_website'**

## Features
### Pages
#### [Homepage - index.html](https://s10208233.github.io/ID_S10208233_LesterCheong_Assg2_website/)
Landing page consisting of the following sections mentioned below...
##### Banner
A simple banner to give an idea of what this page is about.
##### Pokemons
All pokemon from the game throughout five generations are shown in the main body of the page. Each of these pokemons are in individual div or 'cards' have their own button to display the each Pokemon's information.
##### About
Nothing much to be honest.

### Existing Features
- Mobile navigation: Upon going below 850px screen size the desktop navigation bar gets hidden and only shown when the hamburger icon is active.

### Features Left to Implement
- Pagination instead of all in one to cut down loading time.
- "Details" button to open up modal on mobile.
- Addition of newer generation of Pokemons.<br>
## Technologies Used & Additional Features Created
### APIs
PokeAPI was used to retrieve using fetch to display the most relevant information needed for the Pokemons.
### Header
Due to the length of the page users may find themselves scrolling often, a fixed header will allow easy navigation at all times regardless of where the
user is on the page.
### Modal Box
"Details" button opens up the details of a particular Pokemon to display the stats. Using a modal box allows this this application to run on a single page.
This feature was creating using JavaScript and CSS. 
<br>
Refered from - https://www.w3schools.com/w3css/w3css_modal.asp

### Javascript - Back to top button
Due to the length of the page users may find themselves scrolling often, this button was added to help with the user's navigation through the page. This button works similarly to the "Home" link/button in the header.<br>
Refered from - https://stackoverflow.com/questions/14249998/jquery-back-to-top
### Javascript - Autocomplete/Suggestions Search Box
Users may not remember or get a Pokemon name spelling correct on the first try, this feature is implemented to assist the user in searching for a Pokemon better improving the experience. Along with the suggestions, "Enter" or return key has been binded to the "Search" button of the search bar which helps give an intuitive user experience.
<br>
Refered from - https://www.w3schools.com/howto/howto_js_autocomplete.asp

## Credits
This page heavily relies on the PokeAPI api.
- Source:
  https://pokeapi.co/

### Media
*The photos used in this site were obtained from ...*<br><br>
- dark-pokemon-wallpaper
  https://wallpapercave.com/w/wp7808611

- pokedex-sprite 
  https://leonhartopedia.fandom.com/wiki/Pok%C3%A9dex

- escape-rope-sprite
  https://pokemon.fandom.com/wiki/Escape_Rope

- emerald-wallpaper 
  https://www.reddit.com/r/wallpapers/comments/10batf/pokemon_emerald_intro_wallpaper/

- about
  https://media.giphy.com/media/X2FueLPUhGhIk/giphy.gif


### Acknowledgements
- I got the idea for this project while playing the game PokeMMO - https://pokemmo.eu/ discovering the information i most needed as a player.

