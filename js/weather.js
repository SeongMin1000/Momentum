import { API_KEY } from "./api_key.js"

function onGeoOk(position){
    const lat = position.coords.latitude 
    const lng = position.coords.longitude
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = document.querySelector("#weather-text span:first-child")
            const city = document.querySelector("#weather-text span:last-child")
            const weatherIcon = data.weather[0].icon;
            const weatherIconAdrs = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;

            city.innerText = data.name
            weather.innerText = `${data.main.temp}°`
            const addIcon = document.createElement('img')
            addIcon.src = weatherIconAdrs
            addIcon.id = "weather-icon"
            document.querySelector("#weather").prepend(addIcon)
    })
}

function onGeoError(){
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)
