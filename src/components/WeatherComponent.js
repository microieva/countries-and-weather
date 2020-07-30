import React, {Component} from 'react';

class WeatherComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            weather: {}
        }
    }

    componentDidMount() {    
        let city = this.props.countries[0].capital    
        let urlWeather= `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=465aec3114095a5da71608a731eea492`
        
        fetch(urlWeather)
            .then(response => response.json())
            .then(data => {
                console.log('WEATHER data from fetch', data)
                console.log(data.main)
                let {name} = data;
                let {description, icon} = data.weather[0]
                let {speed} = data.wind;
                let {temp, temp_min, temp_max} = data.main;

                this.setState({
                    weather: {
                        name, 
                        description, 
                        icon, 
                        speed, 
                        temp, 
                        temp_min, 
                        temp_max
                    }
                })    
            })
    }

    render() {
        const {
            name, 
            description, 
            speed, 
            temp, 
            temp_min, 
            temp_max
        } = this.state.weather
       
        return (
            <div className='weather'>
                <div className='title'>WEATHER NOW</div>
                <div className='info-container'>
                    <p className='current-temp'>{Math.floor(temp/10)} °C</p>
                    <div className='info-text'>
                        <p>Location: <span>{name}</span></p>
                        <p>Description: <span>{description}</span></p>
                        <p>Wind speed: <span>{speed} m/s</span></p>
                        <p>Min/Max: <span>{Math.floor(temp_min/10)}/{Math.floor(temp_max/10)} °C</span></p>
                    </div>    
                </div>
            </div>
        )
    }
}

export default WeatherComponent;