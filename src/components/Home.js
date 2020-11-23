import React, { Component } from 'react'
import TrailsContainer from '../TrailsContainer';
import Header from '../Header'

class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			trails: []
		}
	}



	setTrails = (trails) => {
		this.setState({ trails: trails });
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
