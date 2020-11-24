import React, { Component } from 'react';
import { BrowserRouter as BrowserRouter, Route, Link } from 'react-router-dom'
// components
import Signup from './components/Signup'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Details from './components/Details'
import axios from 'axios'


class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			loggedIn: false,
			username: null,
      trails: [],
      currentTrail: []
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
    this.setState({loggedIn: loggedIn})
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
			<Route exact path="/" render={(props)=> {
              return <Home 
              trails={this.state.trails} 
              username={this.state.username} 
              loggedIn={this.state.loggedIn}
              setCurrentTrail={this.setCurrentTrail} />}}/>
          	<Route path="/login" render={() => <LoginForm setUsername={this.setUsername} loggedIn={this.isLoggedIn}/>} />
			<Route path="/register" render={() => <Signup />}/>
            <Route path="/details" render={() => <Details 
              username={this.state.username} 
              loggedIn={this.state.loggedIn}
              currentTrail={this.state.currentTrail}/>}/>
			</BrowserRouter>
				</div>

			</>

		)
	}
}

export default App;
