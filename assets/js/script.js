/*List of countries part of the quiz*/
let countries = ['austria', 'belgium', 'bulgaria', 'cyprus', 'denmark', 'france', 'germany', 'greece', 'greenland', 'hungary'];


/*Function to diplay question*/
function displayQuestion (event) {
    let showMap = document.getElementById('quiz-area');
    showMap.innerHTML = `<p>It worked!</p><img src = "assets/images/${countries[0]}.png">`;
}


/*Event Listener which triggers display question*/
let askMeAQuestion = document.getElementById('show-me-a-country!');
askMeAQuestion.addEventListener('click', displayQuestion);