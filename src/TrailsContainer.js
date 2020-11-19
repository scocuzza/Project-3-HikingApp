
import React, { Component } from 'react';
import Trail from './Trail';
import TrailImage from './TrailImage';


class TrailContainer extends Component {
	//	constructor(props) {
	//		super(props)
	//
	//	}


	render() {

		let allTrails = '';
		let trailimage = '';
		if (this.props.trails.length > 0) {
			allTrails = this.props.trails.map((trail, index) => {
				return <Trail name={trail.name}
					type={trail.type}
					summary={trail.summary}
					stars={trail.stars}
					starVotes={trail.starVotes}
					key={index} />
			})
			trailimage = this.props.trails.map((trail, index) => {
				return <TrailImage imgMedium={trail.imgMedium}

				/>
			})
		}

		return (


			<div className="main">
				<div className="left">{allTrails}</div>
				<div className="right"><img src={trailimage} /></div>
			</div>
		)

	}
}

export default TrailContainer;