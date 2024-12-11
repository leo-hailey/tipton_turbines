/*    JavaScript 7th Edition
     Chapter 3
     Chapter case

     Tipton Turbines
     Program to display games results in a web table
     Author: Leo Hailey 
     Date:   2024-12-10

     Filename: js03.js
 */

//Days of the week
let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

window.addEventListener("load", addWeekDays);

//function to write weekday names into the calendar
function addWeekDays() {
    let i = 0; //initial counter value

    //reference the collection of heading cells
    let headingCells = document.getElementsByTagName("th");

    //write each of the seven days into a holding cell
    while (i < 7) {
        headingCells[i].innerHTML = weekDays[i];

        //increase counter by 1
        i++
    }
};

window.addEventListener("load", showGames);

//function to write game info into the calendar
function showGames(){
    for (let i = 0; i< gameDates.length; i++) {
        let gameInfo = "";

        //open the paragraph
        switch (gameResults[i]) {
            case "W" :
                gameInfo += "<p class='win'>";
                break;
            case "L" :
                gameInfo += "<p class='lose'>";
                break;
            case "S" :
                gameInfo += "<p class='suspended'>";
                break;
            case "P" :
                gameInfo += "<p class='postponed'>";
                break;
        }

        //display game location
        if(gameLocations[i] === "h") {
            gameInfo += "vs. ";
        } else if (gameLocations[i] === "a"){
            gameInfo += "@ ";
        }

        //include the opponent
        gameInfo += gameOpponents[i] + "<br>";

        //include the result and score
        gameInfo += gameResults[i] + ": (" + runsScored[i] +" - " + runsAllowed[i] +")";

        //display innings played for suspended, shortened, or extrainning games
        if(gameInnings[i] < 5){
            gameInfo += " [" + gameInnings[i]+"]***";
        } else if (gameInnings[i] < 9) {
            gameInfo += " [" + gameInnings[i]+"]***";
        } else if (gameInnings[i] > 9) {
            gameInfo += " [" + gameInnings[i]+"]***";
        }

        //close the paragraph
        gameInfo += "</p>";

        //write the info into a tble cell
        let tableCell = document.getElementById(gameDates[i]);
        tableCell.insertAdjacentHTML("beforeEnd", gameInfo)
    }
}