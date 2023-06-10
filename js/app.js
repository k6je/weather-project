const url = 'https://api.openweathermap.org/data/2.5/'
const key = '10d816fd2ad802ecc70b04f152c75208' // Burası size özel

const setQuery = (e) => {
    if(e.keyCode == '13') { // 13'ün karşılığı enter
        getResult(searchBar.value)
    }
}

const getResult = (cityName) => {
     console.log(cityName);
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
     console.log(query);
    fetch(query)
    .then(weather => {
        return weather.json()
    })
    .then(displayResult)
}
// akise#1300
const displayResult = (result) => {
     console.log(result);
    let city = document.querySelector('.city')
    city.innerText = `${result.name}, ${result.sys.country}`

    let temperature = document.querySelector('.temperature')
    temperature.innerText = `${Math.round(result.main.temp)} °C`

    let minmax_temp = document.querySelector('.minmax-temp')
    minmax_temp.innerText = `${Math.floor(result.main.temp_min)} °C / ${Math.floor(result.main.temp_max)} °C`

    let description = document.querySelector('.description')
    description.innerText = result.weather[0].description
}

const searchBar = document.querySelector('#searchBar')
searchBar.addEventListener('keypress', setQuery)
