import axios from 'axios';

export function fetchWeather(location){
	return function(dispatch){
		axios.get('http://api.wunderground.com/api/b711a61d20dc3abb/conditions/q/'+location.state+'/'+location.city+'.json')
			.then((response) =>{
				dispatch({type: 'FETCH_WEATHER_FULFILLED', payload: response.data})
			})
			.catch((err) => {
				dispatch({type: 'FETCH_WEATHER_REJECTED', payload: err})
			})
	}
}