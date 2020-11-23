import React, { Component } from 'react'
import TrailsContainer from '../TrailsContainer';
import Search from '../Search';
import Trail from '../Trail';
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
				<TrailsContainer trails={this.state.trails} setCurrentTrail={this.props.setCurrentTrail} />

			</>
		)
	}

}

export default Home

