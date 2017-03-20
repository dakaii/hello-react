import React from 'react';
import LocationForm from './LocationForm';
import { fetchWeather } from '../actions/weatherActions';
import { connect } from 'react-redux';

@connect((store) => {
	return {
		weather: store.weather.weather,
	};
})

class Weather extends React.Component{
	render(){
		if(Object.getOwnPropertyNames(this.props.weather).length === 0){
			return(<div></div>)
		}
		return(
			<div>
				<h3>{this.props.weather.current_observation.display_location.full}</h3>
				<h3>{this.props.weather.current_observation.weather}</h3>
				<img src={this.props.weather.current_observation.icon_url} />
				<h3>{this.props.weather.current_observation.temperature_string}</h3>
				<ul class="list-group">
					<li class="list-group-item"><strong>Relative Humidity: </strong>{this.props.weather.current_observation.relative_humidity}</li>
					<li class="list-group-item"><strong>Wind: </strong>{this.props.weather.current_observation.wind_string}</li>
					<li class="list-group-item"><strong>Dewpoint: </strong>{this.props.weather.current_observation.dewpoint_string}</li>
				</ul>
				<LocationForm onLocationChange = {this.onLocationChange.bind(this)} />
			</div>
		)
	}
	onLocationChange(location){
		this.props.dispatch(fetchWeather({city: location.city, state: location.state}));
	}
}

export default Weather;