import React, { Component } from 'react'
import TrailsContainer from './TrailsContainer';
import Header from './Header'

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
				<Header setTrails={this.setTrails} username={this.props.username} loggedIn={this.props.loggedIn} />
				<TrailsContainer faveTrails={this.props.faveTrails} loggedIn={this.props.loggedIn} trails={this.state.trails} setCurrentTrail={this.props.setCurrentTrail} setFavTrails={this.props.setFavTrails}/>
			</>
		)
	}

}

export default Home

