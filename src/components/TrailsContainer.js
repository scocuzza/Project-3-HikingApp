import React, { Component } from 'react';
import Trail from './Trail';


class TrailContainer extends Component {

	constructor(props) {
		super(props)

	}



	render() {
		let allTrails = '';
		let trailimage = '';
		if (this.props.trails.length > 0) {
			allTrails = this.props.trails.map((trail, index) => {
				return <Trail 
					loggedIn={this.props.loggedIn} 
					trail={trail} setCurrentTrail={this.props.setCurrentTrail} 
					setFavTrails={this.props.setFavTrails}
					faveTrails={this.props.faveTrails} />
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