
import React, { Component } from 'react';
import Trail from './Trail';
import TrailImage from './TrailImage';


class TrailContainer extends Component {

	render() {

		let allTrails = '';
		if (this.props.trails.length > 0) {
			allTrails = this.props.trails.map((trail, index) => {
				return <Trail name={trail.name}
					type={trail.type}
					summary={trail.summary}
					stars={trail.stars}
					starVotes={trail.starVotes}
					difficulty={trail.difficulty}
					imgSmall={trail.imgSmall}
					key={index} />
			})

		}

		return (


			<div className="grid-container">
				{allTrails}
			</div>
		)

	}
}

export default TrailContainer;