import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Route, Link } from 'react-router-dom'

import '../App.css';
import axios from 'axios'

class Navbar extends Component {
	constructor() {
		super()
		this.logout = this.logout.bind(this)
	}

	logout(event) {
		event.preventDefault()
		console.log('logging out')
		axios.post('http://localhost:5000/login/').then(response => {
			console.log(response.data)
			if (response.status === 200) {
				this.props.updateUser({
					loggedIn: false,
					username: null
				})
			}
		}).catch(error => {
			console.log('Logout error')
		})
	}

	render() {
		const loggedIn = this.props.loggedIn;
		const username = this.props.username
		console.log('navbar render, props: ')
		console.log(this.props);
		return (
			<div className="navbar-div">
						{loggedIn ? (
								<ul className="navbar-list">
									<Link to="#" onClick={this.logout} className="Link">
										<li className="navbar-right">logout</li>
									</Link>
										<li className="navbar-left">{username}</li>
								</ul>
						) : (
								<ul className="navbar-list">
									<Link to="/" className="Link">
										<li className="navbar-left">Home</li>
									</Link>
									<Link to="/login" className="Link">
										<li className="navbar-right">Login</li>
									</Link>
									<Link to="/register" className="Link">
										<li className="navbar-right">Sign Up</li>
									</Link>
								</ul>
							)}
			</div>

		);

	}
}

export default Navbar