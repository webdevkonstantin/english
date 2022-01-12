// Настроить подгрузку данных из JSON локального файла

var planetsEn = ["Sun", "Mercury", "Venus", "Earth", "Moon", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto"];
var planetsRu = ["Солнце", "Меркурий", "Венера", "Земля", "Луна", "Марс", "Юпитер", "Сатурн", "Уран", "Нептун", "Плутон"];

var daysOfTheWeekEn = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var daysOfTheWeekRu = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресение"];

var monthsOfTheYearEn = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var monthsOfTheYearRu = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

var sociumEn = ["people", "family", "woman", "man",  "girl", "boy", "child", "friend", "husband", "wife"];
var sociumRu = ["люди", "семья", "женщина", "мужчина", "девочка", "мальчик", "ребёнок", "друг", "муж", "жена"];  
 
var roomNamesEn = ["Kitchen", "Bathroom", "Hall", "Living room", "Toilet", "Garage", "Pantry", "Closet", "Guest room", "Playroom", "Workshop", "Basement", "Attic"];
var roomNamesRu = ["Кухня", "Ванная", "Коридор", "Гостинная", "Туалет", "Гараж", "Кладовка", "Гардеробная", "Гостевая", "Игровая комната", "Мастерская", "Подвал", "Чердак"];


var inputMassive ;
var outputMassive;
var numberTheme;

var numberOfMistakes = 0;
var wordNumber = 0;

function selectTheme (numberTheme){
if (numberTheme == 1) {
inputMassive = daysOfTheWeekRu;
outputMassive = daysOfTheWeekEn;
document.getElementById("translate").placeholder = "Write your translation";
numberOfMistakes = 0
wordNumber = 0;
showWord();

} else if (numberTheme == 2) {
inputMassive = planetsRu;
outputMassive = planetsEn;
document.getElementById("translate").placeholder = "Write your translation";
numberOfMistakes = 0
wordNumber = 0;
showWord();

} else if (numberTheme == 3) {
inputMassive = monthsOfTheYearRu;
outputMassive = monthsOfTheYearEn;
document.getElementById("translate").placeholder = "Write your translation";
numberOfMistakes = 0
wordNumber = 0;
showWord();

} else if (numberTheme == 4) {
inputMassive = sociumRu;
outputMassive = sociumEn;
document.getElementById("translate").placeholder = "Write your translation";
numberOfMistakes = 0
wordNumber = 0;
showWord();

} else if (numberTheme == 5) {
inputMassive = roomNamesRu;
outputMassive = roomNamesEn;
document.getElementById("translate").placeholder = "Write your translation";
numberOfMistakes = 0
wordNumber = 0;
showWord();
} 
}

selectTheme(1)
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