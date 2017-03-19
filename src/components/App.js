import React from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from  'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Weather from './Weather';
import LocationForm from './LocationForm';
import Header from './Header';

import { fetchWeather } from '../actions/weatherActions';

@connect((store) => {
	return {
		weather: store.weather.weather,
	};
})

class App extends React.Component{
	componentWillMount(){
		this.props.dispatch(fetchWeather({city: 'Vancouver', state: 'British Columbia'}));
	}

	render(){
		const {weather} = this.props;

		return (
			<div>
				<Header/>
				<Grid>
					<Row>
						<Col xs={6} md={6}>
							<h1>WeatherCheck</h1>
							<Weather weather={weather} />
							<LocationForm onLocationChange = {this.onLocationChange.bind(this)} />
						</Col>
					</Row>
				</Grid>
			</div>
			/*
			<div className="container">
				<div className="row">
					<div className="text-center col-md-6 col-md-offset-3">
						<h1>WeatherCheck</h1>
						<Weather weather={weather} />
						<LocationForm onLocationChange = {this.onLocationChange.bind(this)} />
					</div>
				</div>
			</div>
			*/
		)
	}

	onLocationChange(location){
		this.props.dispatch(fetchWeather({city: location.city, state: location.state}));
	}
}

export default App;
