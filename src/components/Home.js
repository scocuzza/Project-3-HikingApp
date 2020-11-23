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

				<Header setTrails={this.setTrails} />
				<TrailsContainer trails={this.state.trails} />

			</>
		)
	}

}

export default Home

