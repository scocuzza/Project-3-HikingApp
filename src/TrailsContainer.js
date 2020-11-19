
import React, { Component } from 'react';
import Trail from './Trail';

import axios from 'axios';

class TrailContainer extends Component {
	constructor(props) {
		super(props)

	}


	render() {

		let allTrails = '';
		if (this.props.trails.length > 0) {
			allTrails = this.props.trails.map((trail, index) => {
				return <Trail name={trail.name}
							  type={trail.type}	
							  summary={trail.summary}
							  stars={trail.stars}
							  starVotes={trail.starVotes}
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