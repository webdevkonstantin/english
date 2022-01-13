const daysOfTheWeek = [["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресение"], ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]];
const months = [["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"], ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]];
const planets = [["Солнце", "Меркурий", "Венера", "Земля", "Луна", "Марс", "Юпитер", "Сатурн", "Уран", "Нептун", "Плутон"], ["Sun", "Mercury", "Venus", "Earth", "Moon", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto"]];


var inputMassive ;
var outputMassive;

var numberOfMistakes = 0;
var wordNumber = 0;

function selectTheme (theme){
    console.log("selectTheme");
    console.log(theme);


inputMassive = daysOfTheWeek[0];
outputMassive = daysOfTheWeek[1];
document.getElementById("translate").placeholder = "Write your translation";
numberOfMistakes = 0
wordNumber = 0;
showWord();
}

selectTheme()
showWord();

function showWord() {
    document.getElementById('word').innerHTML 
    = inputMassive[wordNumber];
}

function checkWord() {
    var translate = document.getElementById('translate').value;
    
    if (translate == outputMassive[wordNumber]) {
        document.getElementById("translate").value = "";
        document.getElementById("translate").placeholder = "Write your translation";
        numberOfMistakes = 0;
        wordNumber++;
    } else {
      document.getElementById("translate").value = "";
      numberOfMistakes++;
    } 

    if (numberOfMistakes == 3) {
        document.getElementById("translate").placeholder = outputMassive[wordNumber];
        numberOfMistakes = 0;
    } 

    if (wordNumber == outputMassive.length){
      wordNumber = 0;
    }
    showWord();
}

var input = document.getElementById("translate");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        checkWord();
    }
});