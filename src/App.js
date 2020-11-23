import React, { Component } from 'react';
import { BrowserRouter as BrowserRouter, Route, Link } from 'react-router-dom'
// components
import Signup from './components/Signup'
import LoginForm from './components/LoginForm'
import Navbar from './components/Navbar'
import Home from './components/Home'
import TrailsContainer from './TrailsContainer';
import Search from './Search';
import Trail from './Trail';
import Details from './components/Details';
import axios from 'axios'


class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			loggedIn: false,
			username: null,
			trails: [],
			currentTrail: [],
			updateuser: ''
		}
	}
	
	setTrails = (trails) => {
		this.setState({ trails: trails });
	}
	setCurrentTrail = (currentTrail) => {
		console.log('in set current trail' + currentTrail.name)
		this.setState({ currentTrail: currentTrail });
	}
	setUpdateUser = (updateuser) => {
		this.setState({ updateuser: updateuser });
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
				{
					this.state.loggedIn &&
					<p>Hello  {this.state.username}!</p>
				}
				<div>
					<BrowserRouter>
						<Navbar updateUser={this.state.updateUser} loggedIn={this.state.loggedIn} />
						<Route path="/" render={() => <Home setCurrentTrail={this.setCurrentTrail}/>} />

						
						<Route path="/login"
							render={() => <LoginForm updateUser={this.updateUser} />} />
						<Route path="/register"
							render={() => <Signup />}/>
						<Route path="/details" render={() => <Details trail={this.state.currentTrail}/>} />
						{/* <Route path="/details" render={() => <Details currentTrail={this.state.currentTrail}/>}/> */}
					</BrowserRouter>
				</div>

			</>

		)
	}
}

export default App;
