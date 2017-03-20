import React from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, Jumbotron, Button } from  'react-bootstrap';
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
						<Col xs={6} sm={6} md={6} lg={6}>
							<Jumbotron>
								<h1>Hello, world!</h1>
								<p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
								<p><Button bsStyle="primary">Learn more</Button></p>
							</Jumbotron>
						</Col>
						<Col xs={3} sm={3} md={3} lg={3}>
							<Weather weather={weather} />
						</Col>
					</Row>
				</Grid>
			</div>
		)
	}
}

export default App;
