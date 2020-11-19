
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
							  stars={this.props.stars}
							  starVotes={this.props.starVotes}
							  key={index} />
			})
		}


		return (
			<div>
				<h3>Trails in your Area</h3>
				{allTrails}
			</div>

		)
	}
}

export default TrailContainer;