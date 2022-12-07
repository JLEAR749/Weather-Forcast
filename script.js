
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
var temp = document.querySelector('#temperature')
var fiveDaySection = document.querySelector(".five-day-forcast")

function getcityweather(city) {
    console.log(`${Weather_API_URL}/data/2.5/weather?q=${city}&units=imperial&appid=${API_Key}`)
    fetch(`${Weather_API_URL}/data/2.5/weather?q=${city}&units=imperial&appid=${API_Key}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            temp.innerText = "Temperature: " + data.main.temp + "F";
            humidity.innerText = "Humidity: " + data.main.humidity + "%";
            wind.innerText = "Wind Speed: " + data.wind.speed + "MPH";

            console.log(dayjs(new Date()).format('MM/DD/YYYY'))
            forcastTitle.innerHTML = `City: ${data.name}`
            date.innerHTML = new Date().toLocaleDateString()
            description.innerHTML = `Description: ${data.weather[0].description}`
            temperature.innerHTML = `temperature: ${data.main.temp}`
            wind.innerHTML = `wind: ${data.wind.speed}`
            humidity.innerHTML = `humidity: ${data.main.humidity}`
        })
}

function get5day(city) {
    console.log(`${Weather_API_URL}/data/2.5/forecast?q=${city}&units=imperial&limit=5&appid=${API_Key}`)
    fetch(`${Weather_API_URL}/data/2.5/forecast?q=${city}&units=imperial&limit=5&appid=${API_Key}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            var results = data.list
            var section = document.createElement("div")
            var day = 1
            for (let i = 0; i < results.length; i += 8) {
                console.log(results[i].main.temp)
                var text = `
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                    // console.log(dayjs(new Date()).format('MM/DD/YYYY'))//
                        <h5 class="card-title">Day ${day++}</h5>
                        <p class="Temp">${results[i].main.temp}F</p>
                        <p class="Wind">${results[i].wind.speed}MPH</p>
                        <p class="humidity">${results[i].main.humidity}%</p>
                    </div>
                </div>`
                section.innerHTML += text
            }
            fiveDaySection.append(section)
        })
};

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