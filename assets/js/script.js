/*List of countries part of the quiz*/
let countries = ['austria', 'belgium', 'bulgaria', 'cyprus', 'denmark', 'france', 'germany', 'greece', 'greenland', 'hungary'];


/*Function to diplay question*/
function displayQuestion (event) {
    /*Randomly selects a country (random selector taken from https://www.geeksforgeeks.org/how-to-select-a-random-element-from-array-in-javascript/)*/
    let  currentCountry = countries[Math.floor(Math.random()*countries.length)];
    /*Displays the Map Silhouette*/
    let showMap = document.getElementById('quiz-area');
    showMap.innerHTML = `<img src = "assets/images/${currentCountry}.png" alt = "Silhouette of country.">`;

    /*To generate the buttons*/ 
    let countryButtons = [];
    /*adds the current Country to the button array*/
    countryButtons.push(currentCountry);
    console.log(countryButtons);
    /*Generate three random countries, checks to see if it is the array, and if not adds it to the array*/
    while (countryButtons.length <= 3) {
        newCountry = countries[Math.floor(Math.random()*countries.length)];
        countryButtons.push(newCountry);
        
    }
    console.log(countryButtons);
    /*Adds the selected country to the array at a random location.*/ 

}


/*Event Listener which triggers display question*/
let askMeAQuestion = document.getElementById('show-me-a-country!');
askMeAQuestion.addEventListener('click', displayQuestion);