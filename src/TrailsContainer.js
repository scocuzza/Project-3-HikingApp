import React, { Component } from 'react';
import Trail from './Trail';
import TrailImage from './TrailImage';


class TrailContainer extends Component {
	render() {
		let allTrails = '';
		let trailimage = '';
		if (this.props.trails.length > 0) {
			allTrails = this.props.trails.map((trail, index) => {
				return <Trail trail={trail}/>
			})
			trailimage = this.props.trails.map((trail, index) => {
				return <TrailImage trail={trail}

				/>
			})
		}
		return (
			<>
			<div className="grid-container">
				{allTrails}
			</div>
			</>
		)

	}
}

export default TrailContainer;