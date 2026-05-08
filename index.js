/*****************************************************************************
 * Challenge 2: Review the provided code. The provided code includes:
 * -> Statements that import data from games.js
 * -> A function that deletes all child elements from a parent element in the DOM
*/

// import the JSON data about the crowd funded games from the games.js file
import GAMES_DATA from './games.js';

// create a list of objects to store the data about the games using JSON.parse
const GAMES_JSON = JSON.parse(GAMES_DATA)

// remove all child elements from a parent element in the DOM
function deleteChildElements(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

/*****************************************************************************
 * Challenge 3: Add data about each game as a card to the games-container
 * Skills used: DOM manipulation, for loops, template literals, functions
*/

// grab the element with the id games-container
const gamesContainer = document.getElementById("games-container");

// create a function that adds all data from the games array to the page
function addGamesToPage(games) {

    // loop over each item in the data
    for (let i = 0; i < games.length; i++)
    {
        // create a new div element, which will become the game card
        const card = document.createElement("div");

        // add the class game-card to the list
        card.classList.add("game-card");

        // set the inner HTML using a template literal to display some info 
        // about each game
        // TIP: if your images are not displaying, make sure there is space
        // between the end of the src attribute and the end of the tag ("/>")
        card.innerHTML = `
            <img src="${games[i].img}" class=game-img>
            <h4>${games[i].name}</h4>
                <p>${games[i].description}</p>
            <div class="moreInfo hidden">
                <p>Pledged: $${games[i].pledged}</p>
                <p>Goal: $${games[i].goal}</p>
                <p>Backers: ${games[i].backers}</p>
            </div>
        `;

        // Additional feature: View game description and backers upon clicking, and hide them when clicking again
        card.addEventListener("click", () => {
            const infoDiv = card.querySelector(".moreInfo");
            if (infoDiv.classList.contains("hidden"))
                infoDiv.classList.remove("hidden");
            else
                infoDiv.classList.add("hidden");
        });
        
        // append the game to the games-container
         gamesContainer.appendChild(card);

    }
}

// call the function we just defined using the correct variable
// later, we'll call this function using a different list of games
addGamesToPage(GAMES_JSON);

/*************************************************************************************
 * Challenge 4: Create the summary statistics at the top of the page displaying the
 * total number of contributions, amount donated, and number of games on the site.
 * Skills used: arrow functions, reduce, template literals
*/

// grab the contributions card element
const contributionsCard = document.getElementById("num-contributions");

// use reduce() to count the number of total contributions by summing the backers
const numContributions = GAMES_JSON.reduce( (acc, game) => {
    return acc + game.backers;
}, 0);

// set the inner HTML using a template literal and toLocaleString to get a number with commas
contributionsCard.innerHTML = numContributions.toLocaleString('en-US');

// grab the amount raised card, then use reduce() to find the total amount raised
const raisedCard = document.getElementById("total-raised");

const numRaised = GAMES_JSON.reduce( (acc, game) => {
    return acc + game.pledged;
}, 0)

// set inner HTML using template literal
raisedCard.innerHTML = "$" + numRaised.toLocaleString('en-US');

// grab number of games card and set its inner HTML
const gamesCard = document.getElementById("num-games");

const numGames = GAMES_JSON.length;
gamesCard.innerHTML = numGames.toLocaleString('en-US');

/*************************************************************************************
 * Challenge 5: Add functions to filter the funded and unfunded games
 * total number of contributions, amount donated, and number of games on the site.
 * Skills used: functions, filter
*/

// show only games that do not yet have enough funding
function filterUnfundedOnly() {
    deleteChildElements(gamesContainer);

    // use filter() to get a list of games that have not yet met their goal
    const listOfUnfunded = GAMES_JSON.filter( (game) => {
        return game.pledged < game.goal;
    });

    // use the function we previously created to add the unfunded games to the DOM
    addGamesToPage(listOfUnfunded);
}

// show only games that are fully funded
function filterFundedOnly() {
    deleteChildElements(gamesContainer);

    // use filter() to get a list of games that have met or exceeded their goal
    const listOfFunded = GAMES_JSON.filter( (game) => {
        return game.pledged >= game.goal;
    });

    // use the function we previously created to add unfunded games to the DOM
    addGamesToPage(listOfFunded);
}

// show all games
function showAllGames() {
    deleteChildElements(gamesContainer);

    // add all games from the JSON data to the DOM
    addGamesToPage(GAMES_JSON);
}

// select each button in the "Our Games" section
const unfundedBtn = document.getElementById("unfunded-btn");
const fundedBtn = document.getElementById("funded-btn");
const allBtn = document.getElementById("all-btn");

// add event listeners with the correct functions to each button

document.getElementById("unfunded-btn").addEventListener("click", filterUnfundedOnly);
document.getElementById("funded-btn").addEventListener("click", filterFundedOnly);
document.getElementById("all-btn").addEventListener("click", showAllGames);
/*************************************************************************************
 * Challenge 6: Add more information at the top of the page about the company.
 * Skills used: template literals, ternary operator
*/

// grab the description container
const descriptionContainer = document.getElementById("description-container");

// use filter or reduce to count the number of unfunded games
const numUnfunded = GAMES_JSON.reduce( (acc, game) => {
    game.pledged < game.goal ? acc += 1 : acc;
    return acc;
}, 0)

// create a string that explains the number of unfunded games using the ternary operator
const displayStr = `In total, $${numRaised.toLocaleString('en-US')} has been raised for ${numGames - numUnfunded} ${(numGames - numUnfunded) > 1 ? "games" : "game"}.
                    Currently, <b>${numUnfunded} ${numUnfunded > 1 ? "games remain" : "game remains"} unfunded.</b>`;

// create a new DOM element containing the template string and append it to the description container
const elementDisplayStr = document.createElement("p");
elementDisplayStr.innerHTML = displayStr;
descriptionContainer.appendChild(elementDisplayStr);


/************************************************************************************
 * Challenge 7: Select & display the top 2 games
 * Skills used: spread operator, destructuring, template literals, sort 
 */

const firstGameContainer = document.getElementById("first-game");
const secondGameContainer = document.getElementById("second-game");

const sortedGames =  GAMES_JSON.sort( (item1, item2) => {
    return item2.pledged - item1.pledged;
});

// use destructuring and the spread operator to grab the first and second games
const [firstGame, secondGame, ...others] = sortedGames;

// create a new element to hold the name of the top pledge game, then append it to the correct element
const firstName = firstGame.name;
const displayFirst = document.createElement("p");
displayFirst.innerHTML = firstName;
firstGameContainer.appendChild(displayFirst);

// do the same for the runner up item
const secondName = secondGame.name;
const displaySecond = document.createElement("p");
displaySecond.innerHTML = secondName;
secondGameContainer.appendChild(displaySecond);