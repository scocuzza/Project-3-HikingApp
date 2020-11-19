
import React, { Component } from 'react';

import axios from 'axios';

class TrailContainer extends Component {
	constructor(props) {
		super(props)

	}


	render() {
		return (
			<div>


				<button type="submit" onClick={this.handleSubmit}>Get Gif</button>

			</div>

		)
	}

	handleSubmit = () => {


		let response = axios.get(`https://www.hikingproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&key=200976709-cb847f0e90666bed6a24043234ddce9a`,


			{
				headers: {
					'Content-Type': 'application/json'
				}
			})
			.then((response) => {
				console.log('the response i got===>', response);
				console.log(response.data.data[0].images.downsized.url);
				this.setState({
					url: response.data.data[0].images.downsized.url
				})
			})
			.catch((error) => {
				console.log('API ERROR:===>', error);
			});
		console.log(response);
	}
}

export default TrailContainer;