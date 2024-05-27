/*List of countries part of the quiz*/
let countries = ['austria', 'belgium', 'bulgaria', 'cyprus', 'denmark', 'france', 'germany', 'greece', 'greenland', 'hungary'];




/*Function to diplay question*/
function displayQuestion (event) {
    /*Randomly selects a country (random selector taken from https://www.geeksforgeeks.org/how-to-select-a-random-element-from-array-in-javascript/)*/
    let  currentCountry = countries[Math.floor(Math.random()*countries.length)];
    /*Displays the Map Silhouette*/
    let showMap = document.getElementById('quiz-area');
    showMap.innerHTML = `<p>It worked!</p><img src = "assets/images/${currentCountry}.png" alt = "Silhouette of country.">`;
}


/*Event Listener which triggers display question*/
let askMeAQuestion = document.getElementById('show-me-a-country!');
askMeAQuestion.addEventListener('click', displayQuestion);