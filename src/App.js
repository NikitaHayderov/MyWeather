import React, {Component} from 'react';
import './App.css';
import WeatherDisplay from './components/WeatherDisplay/WeatherDisplay';

const PLACES = ["Lviv", "Moscow", "Kiev", "Minsk"];

export default class App extends Component {
    state = {
        activePlace: 'Lviv',
        weatherData: null
    };

    getCityWeather = () => {
        const URL = "https://api.openweathermap.org/data/2.5/weather?q=" +
            this.state.activePlace + "&appid=ec629449a1b0ec0cddc170a28033f245";
        fetch(URL)
            .then(res => res.json())
            .then(json => {
                console.log(json)
                this.setState({weatherData: json});
            });
    }

    componentDidMount() {
        this.getCityWeather()
    }

    render() {
        const {activePlace, weatherData} = this.state;
        return (
            <div className="app">
                <div className="cities">
                    {PLACES.map((place, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                this.setState({
                                    activePlace: place
                                }, () => {
                                    this.getCityWeather()
                                });
                            }}>
                            {place}
                        </button>
                    ))}
                </div>
                {weatherData ?
                    <WeatherDisplay weatherData={weatherData}
                                    key={activePlace}
                                    name={PLACES[activePlace]}/>
                    : <div className="load">Loading</div>}
            </div>
        );
    }
};
