//DYNAMIC NAV-BAR
const toggle = document.getElementById('toggle');
var items = document.querySelector(".subjects");
console.log(items)
toggle.addEventListener('click', () =>
    items.className === "subjects" ? items.classList.add("show") : items.className = "subjects")



// WEATHER
function weather() {
    fetch(
            `https://openweathermap.org/data/2.5/weather?q=Manchester,uk&appid=b6907d289e10d714a6e88b30761fae22`
        )
        .then(weather => weather.json())
        .then(result => display(result));
}

function display(data) {
    let city = document.querySelector(`.city_name`);
    city.innerText = `${data.name}`;
    let temp = document.querySelector(`.temp`);
    temp.innerText = Math.round(data.main.temp) + "‎°C";
}

weather();

//TIME

const time = document.getElementById("time"),
    date = document.getElementById("date");


function renderTime() {
    let moment = new Date();

    let day = moment.getDate(),
        month = moment.getMonth(),
        year = moment.getFullYear(),
        hour = moment.getHours(),
        min = moment.getMinutes(),
        seconds = moment.getSeconds();

    const AmPm = hour >= 12 ? "PM" : "AM";
    hour % 12 || 12;

    date.innerHTML = `${addZero(day)}-${addZero(month+1)}-${year}`

    time.innerHTML = `${addZero(hour)}:${addZero(min)}:${addZero(seconds)}`;

    setTimeout(renderTime, 1000);
}

function addZero(number) {
    return (parseInt(number, 10) < 10 ? "0" : "") + number;
}

renderTime();

//EXCHANGE

function exchange() {
    fetch(`https://api.exchangerate-api.com/v5/latest`)
        .then(response => {
            return response.text();
        })
        .then(data => {
            return JSON.parse(data);
        })
        .then(result => displayResult(result));
}

function displayResult(dataAll) {
    let USD = document.querySelector(`.USD`);
    USD.innerText = (1 / dataAll.rates.GBP).toFixed(2) + ` USD`;
    let EURO = document.querySelector(`.EURO`);
    EURO.innerText = ((dataAll.rates.EUR / dataAll.rates.GBP)).toFixed(2) + `EURO`;
    let JPY = document.querySelector(`.JPY`);
    JPY.innerText = ((dataAll.rates.JPY / dataAll.rates.GBP)).toFixed(2) + `JPY`;
    let RUB = document.querySelector(`.RUB`);
    RUB.innerText = ((dataAll.rates.RUB / dataAll.rates.GBP)).toFixed(2) + `RUB`;
    let NZD = document.querySelector(`.NZD`);
    NZD.innerText = ((dataAll.rates.NZD / dataAll.rates.GBP)).toFixed(2) + `NZD`;
}

exchange();