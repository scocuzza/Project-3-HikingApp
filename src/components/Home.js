import React, { Component } from 'react'
import TrailsContainer from '../TrailsContainer';
import Search from '../Search';
import Trail from '../Trail';

class Home extends Component {
	constructor() {
		super()
	}




	render() {
		return (
			<>
				<h1>Hiking Trail</h1>
				<Search setTrails={this.setTrails} />
				{/*<TrailsContainer trails={this.state.trails} />*/}
			</>
		)
	}

}

export default Home

