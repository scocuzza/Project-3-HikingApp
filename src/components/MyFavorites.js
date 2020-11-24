import React, { Component } from 'react'
import TrailsContainer from './TrailsContainer';
import Header from './Header'
import Navbar from './Navbar'

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
                <header className="main-header">
						<Navbar loggedIn={this.props.loggedIn} username={this.props.username}/>
				</header>
				<TrailsContainer faveTrails={this.props.faveTrails} loggedIn={this.props.loggedIn} trails={this.props.trails} setCurrentTrail={this.props.setCurrentTrail} setFavTrails={this.props.setFavTrails}/>
			</>
		)
	}

}

export default Home

