import React, { Component } from 'react';
import { BrowserRouter as BrowserRouter, Route, Link } from 'react-router-dom'
// components
import Signup from './components/Signup'
import LoginForm from './components/LoginForm'
import FavHikes from './components/FavHikes'
import Home from './components/Home'
import Details from './components/Details'
import axios from 'axios'
import MyFavorites from './components/MyFavorites'


class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			loggedIn: false,
			username: null,
			trails: [],
			allfav: [],
			currentTrail: [],
			favTrails: []
		}
	}
	setAllfav = (allfav) => {
		this.setState({ allfav: allfav });
	}

	setFavTrails = (trail) => {
		if(this.state.loggedIn) {
			let favArray = this.state.favTrails
			if(favArray.includes(trail)) {
				const index = favArray.indexOf(trail)
				favArray.splice(index, 1)
			} else {
				favArray.push(trail)
			}
			this.setState({
				favTrails: favArray
			})
		}
	}
	setTrails = (trails) => {
		this.setState({ trails: trails });
	}
	setCurrentTrail = (trail) => {
		console.log('setting current trail' + trail.name);
		this.setState({
			currentTrail: trail
		})
	}
	setUsername = (username) => {
		this.setState({ username: username });
	}
	isLoggedIn = (loggedIn) => {
		this.setState({ loggedIn: loggedIn })
	}
	componentDidMount() {
		this.getUser()
	}
	getUser() {
		axios.get('http://localhost:5000/user/').then(response => {
			console.log('----Get user response----: ')
			console.log(response.data)
			if (response.data.user) {
				console.log('Get User: There is a user saved in the server session: ')

				this.setState({
					loggedIn: true,
					username: response.data.user.username
				})
			} else {
				console.log('Get user: no user');
				this.setState({
					loggedIn: false,
					username: null
				})
			}
		})
	}

	render() {
		return (
			<>
				<div>
				<BrowserRouter>
				<Route exact path="/" render={(props)=> {
                    return <Home 
                    trails={this.state.trails} 
                    username={this.state.username} 
                    loggedIn={this.state.loggedIn}
					setCurrentTrail={this.setCurrentTrail}
					setFavTrails={this.setFavTrails} />}}/>
                  <Route path="/login" render={() => <LoginForm setUsername={this.setUsername} loggedIn={this.isLoggedIn}/>} />
            	  <Route path="/register" render={() => <Signup />}/>
                  <Route path="/details" render={() => <Details 
                    username={this.state.username} 
                    loggedIn={this.state.loggedIn}
                    currentTrail={this.state.currentTrail}/>}/>
				<Route path="/fav" render={() => <FavHikes
					username={this.state.username}
					loggedIn={this.state.loggedIn}
					currentTrail={this.state.currentTrail} />} />
				<Route path="/myfavorites" render={() => <MyFavorites
					trails={this.state.favTrails}
					username={this.state.username}
					loggedIn={this.state.loggedIn}
					currentTrail={this.state.currentTrail}
					setFavTrails={this.setFavTrails} />} />
			    </BrowserRouter>
				</div>

			</>

		)
	}
}

export default App;