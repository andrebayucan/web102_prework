# WEB102 Prework - Ocean Gem

Submitted by: Andre Bayucan

Ocean Gem is a website for the company Sea Monster Crowdfunding that displays information about the games they have funded.

Time spent: 6 hours spent in total

## Required Features

The following **required** functionality is completed:

* [x] The introduction section explains the background of the company and how many games remain unfunded.
* [x] The Stats section includes information about the total contributions and dollars raised as well as the top two most funded games.
* [x] The Our Games section initially displays all games funded by Sea Monster Crowdfunding
* [x] The Our Games section has three buttons that allow the user to display only unfunded games, only funded games, or all games.

The following **optional** features are implemented:

* [x] Clicking on a game's card reveals additional info about it (pledge amount, goal, and backers). Clicking again hides that info.
* [x] Hovering over the three buttons in the Our Games section changes the user's cursor to a pointer for clarity.
* [x] Adjusted the styling of the website.

## Video Walkthrough

Here's a walkthrough of implemented features:

<img src='https://i.imgur.com/4fNBEOB.mp4' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with Kap 

## Notes
A major challenge I encountered while building the app was figuring out how to make extra information show up on the game cards when clicked, and then hide them when clicked again. This was an extra feature I wanted to add to the website, and I tried to "assign" an arrow function to each card within the addGamesToPage function. I didn't fully grasp how this would work, and trying to link each card to a game in the for loop resulted in the incorrect information showing up. To fix this, I instead added a class named "hidden" to the text I wanted to reveal or hide when clicked. Text with the hidden class would have their display set to none, effectively allowing me to control whether additional information would be seen or not. Using an event listener, a card would either appropriately add or remove the hidden text when clicked. Aside from this challenge, everything else went smoothly, and I spent time fixing syntax errors as I was getting used to the new content.


## License

    Copyright [2026] [Andre Bayucan]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
