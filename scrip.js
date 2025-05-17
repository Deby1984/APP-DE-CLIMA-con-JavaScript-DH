const urlBase = `https://api.openweathermap.org/data/2.5/weather`
const API_KEY = `a8eceb588ce560c52bcad773d8a6c040`
const diffkelvin = 273.15


document.getElementById(`searchButton`).addEventListener(`click`, () => {
    const city = document.getElementById(`cityInput`).value;
    if (city){
       fetchWeather(city)
    }else{
        alert(`Ingrese una ciudad válida`)
    }
})

function fetchWeather(city){
    fetch(`${urlBase}?q=${city}&appid=${API_KEY}&lang=es`)
    .then(data => data.json())
    .then (data => showWeatherData(data))
}

function showWeatherData(data){
    const divResponseData = document.getElementById(`responseData`)
    divResponseData.innerHTML = ``

    const cityName = data.name
    const countryName = data.sys.country 
    const temp = data.main.temp
    const feelsLike = data.main.feels_like
    const humidity = data.main.humidity
    const description = data.weather[0].description
    const icon = data.weather[0].icon

    const cityInfo = document.createElement(`h3`)
    cityInfo.textContent = `${cityName}, ${countryName}`

    const tempInfo = document.createElement(`p`)
    tempInfo.textContent = `La temperatura es: ${Math.floor(temp-diffkelvin)}°C`

    const feelsLikeInfo = document.createElement(`p`)
    feelsLikeInfo.textContent = `La sensación térmica es alrededor de: ${Math.floor(feelsLike-diffkelvin)}°C`

    const humidityInfo = document.createElement(`p`)
    humidityInfo.textContent = `La humedad es del ${humidity}%`

    const icoInfo = document.createElement(`img`)
    icoInfo.src = `https://openweathermap.org/img/wn/${icon}@2x.png`

    const descriptionInfo = document.createElement(`p`)
    descriptionInfo.textContent = `La descripción meteorologica es: ${description}`

    divResponseData.appendChild(cityInfo)
    divResponseData.appendChild(tempInfo)
    divResponseData.appendChild(feelsLikeInfo)
    divResponseData.appendChild(humidityInfo)
    divResponseData.appendChild(icoInfo)
    divResponseData.appendChild(descriptionInfo)

    

}