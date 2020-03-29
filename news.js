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

    EURO.innerText = dataAll.rates.GBP * dataAll.rates.EURO;
    let JPY = document.querySelector(`.JPY`);
    let RUB = document.querySelector(`.RUB`);
    let NZD = document.querySelector(`.NZD`);
}

exchange();