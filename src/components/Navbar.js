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
		axios.post(`${process.env.REACT_BACKEND_BASE_URL}/user/logout`).then(response => {
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
		console.log('navbar render, props: ')
		console.log(this.props);
		return (
			<div className="navbar-div">
				<header className="navbar App-header" id="nav-container">
					<div className="col-4" >
						{loggedIn ? (
							<section className="navbar-section">
								<Link to="#" className="btn btn-link text-secondary" onClick={this.logout}>
									<span className="text-secondary">logout</span></Link>

							</section>
						) : (
								<ul className="navbar-list">
									<Link to="/" className="Link">
										<li>Home</li>
									</Link>
									<Link to="/login" className="Link">
										<li>Login</li>
									</Link>
									<Link to="/register" className="Link">
										<li>Sign Up</li>
									</Link>
								</ul>
							)}
					</div>

				</header>
			</div>

		);

	}
}

export default Navbar