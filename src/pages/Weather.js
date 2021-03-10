import React, {useState} from 'react';
import TextField from "@material-ui/core/TextField";

const Weather = () => {
    const [query, setQuery] = useState("");
    const [weather, setWeather] = useState("");
    const search = e => {
        if (e.key === "Enter") {
            fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
                .then (res => res.json())
                .then (result =>{
                    setWeather(result)
                    setQuery("");
                console.log(result)});
        }
    }
    const api = {
        key: "00755f188b4d4059c58cf4095f4a146d",
        base: "https://api.openweathermap.org/data/2.5/"
    }
    const dateBuilder = (e) =>{
      let months= ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień",
      "Październik", "Listopad", "Grudzień"];
     let date = e.getDate();
     let month =months[e.getMonth()];
     let year = e.getFullYear()
        return `${date} ${month} ${year}`
    }
    return (
        <div className="weather">
            <div className="Weather__input">
                <TextField className="weather__textField"
                           id="outlined-basic"
                           label="Wpisz nazwę miejscowości"
                           variant="outlined"
                onChange={e => setQuery(e.target.value)}
                           value ={query}
                           onKeyPress={search}
                    />
            </div>
            {(typeof weather.main != "undefined") ? (
                <div className="weather__box">
                    <div className="weather__location">{weather.name}, {weather.sys.country}</div>
                    <div className="weather__date">{dateBuilder(new Date())}</div>
                    <div className="weather__temp">{Math.round(weather.main.temp)}°C</div>
                    <div className="weather__image">{weather.weather[0].main}</div>
                </div>
            ): ("")}
        </div>
    );
};
export default Weather;