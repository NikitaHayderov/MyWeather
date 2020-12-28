import React from 'react';

export default class WeatherDisplay extends React.Component {

    render() {
        const {weatherData} = this.props;
        const weather = weatherData.weather[0];
        const iconUrl = "http://openweathermap.org/img/w/" + weather.icon + ".png";
        return (
            <div className="weather">
                <h1>
                    {weather.main} in {weatherData.name}
                    <img src={iconUrl} alt={weatherData.description}/>
                </h1>
                <p>Сейчас: {(weatherData.main.temp - 273.15).toFixed(2)}°С</p>
                <p>Максимальная температура: {(weatherData.main.temp_max - 273.15).toFixed(2)}°С</p>
                <p>Минимальная температура: {(weatherData.main.temp_min - 273.15).toFixed(2)}°С</p>
                <p>Ветер: {weatherData.wind.speed} миль/час</p>
            </div>
        );
    }
}