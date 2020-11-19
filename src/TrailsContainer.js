
import React, { Component } from 'react';

import axios from 'axios';

class TrailContainer extends Component {
	constructor(props) {
		super(props)

	}


	render() {

		let allTrails = <h4>No Trails selected.  Select a Trail location!</h4>

		if (this.props.trails.length > 0) {
			allTrails = this.props.trails.map((trail, index) => {
				return <Trail name={this.props.name}
							  type={this.props.type}	
							  summary={this.props.summary}
							  starts={this.props.stars}
							  startVotes={this.props.starVotes}
							  key={index} />
			})
		}


		return (
			<div>
				<h3>Trails in your Area</h3>
				{allTrails}
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