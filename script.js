
var API_Key = 'fbbe0c136c487282f0fa3fb956cf088c'

var Weather_API_URL = 'https://api.openweathermap.org'

var cityFormEl = document.querySelector('#cityform')
var cityInputEl = document.querySelector('#cityinput')
var weathercontainer = document.querySelector('#wrapper')
var forcastTitle = document.querySelector('#cityname')
var date = document.querySelector('#date')
var description = document.querySelector('#description')
var temperature = document.querySelector('#temperature')
var wind = document.querySelector('#wind')
var humidity = document.querySelector('#humidity')

function getcityweather(city) {
    console.log(`${Weather_API_URL}/data/2.5/weather?q=${city}&units=imperial&appid=${API_Key}`)
    fetch(`${Weather_API_URL}/data/2.5/weather?q=${city}&units=imperial&appid=${API_Key}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)

            temp.text("Temperature: " + data.current.temp + "F");
            humidity.text("Humidity: " + data.current.humidity + "%");
            wind.text("Wind Speed: " + data.current.wind_speed + "MPH");

            forcastTitle.innerHTML = `City: ${data.name}`
            date.innerHTML = new Date().toLocaleDateString()
            description.innerHTML = `Description: ${data.weather[0].description}`
            temperature.innerHTML = `temperature: ${data.list.main.temp}`
            wind.innerHTML = `wind: ${data.list.wind.speed}`
            humidity.innerHTML = `humidity: ${data.list.main.humidity}`
        })
}

function get5day(city) {
    console.log(`${Weather_API_URL}/data/2.5/forecast?q=${city}&units=imperial&limit=5&appid=${API_Key}`)
    fetch(`${Weather_API_URL}/data/2.5/forecast?q=${city}&units=imperial&limit=5&appid=${API_Key}`)
        .then(res => res.json())
        .then(data => {
            console.log(data.list)

            var results = data.list

            for (let i = 0; i < results.length; i += 8)
                console.log(data)

        }
        )
};
date.innerHTML = new Date().toLocaleDateString()
description.innerHTML = `Description: ${data.weather[0].id.main.description}`
temperature.innerHTML = `temperature: ${data.main.temp}`
wind.innerHTML = `wind: ${data.wind.speed}`
humidity.innerHTML = `humidity: ${data.main.humidity}`
console.log(data)
forcastTitle.innerHTML = `City: ${list.arrray[40]}`

cityFormEl.addEventListener('submit', event => {
    event.preventDefault();

    var city = cityInputEl.value.trim();
    if (city) {
        getcityweather(city);
    }

})

cityFormEl.addEventListener('submit', event => {
    event.preventDefault();

    var city = cityInputEl.value.trim();
    if (city) {
        get5day(city);
    }
})

localStorage.setItem("city", JSON.stringify(cityInputEl));
renderMessage();


function renderMessage() {
    var city = JSON.parse(localStorage.getItem("cityInputEl"));
    if (city !== null) {
        document.querySelector(".city").textContent = ".results".cityInputEl
    }
}


// document.getElementById("seachBtn").addEventListener("click", addResult);
// document.getElementById("searchBtn").addEventListener('click', getResult);