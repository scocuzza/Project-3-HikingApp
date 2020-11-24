import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import Navbar from './Navbar'
import Header from '../Header'

class FavHikes extends Component {
	constructor() {
		super()
		this.state = {
			allFav: [],
			redirectTo: null
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)

	}

	//	axios.get('http://localhost:5000/allfav/${username}`)
	//
	//			.then(res => {
	//	this.setState({ allfav: res.data.allfav });
	//})
	//
	//	.catch(error => {
	//		console.log('login error: ')
	//		console.log(error);
	//
	//	})





	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleFav(event) {
		event.preventDefault()
		console.log('handleSubmit')
		let username = this.props.username;
		axios.get(`http://localhost:5000/allfav/${username}`)
			//
			.then(response => {
				console.log(response.status)
				console.log('====added fav response: ======')
				console.log(response.data)
				if (response.status === 200) {
					// update App.js state
					console.log('reponse data', response.data)
					console.log('reponse config===username>', response.config.data)
					var data = JSON.parse(response.config.data);
					console.log('reponse config===username>', data.username)
					this.props.setUsername(data.username)
					this.props.loggedIn(true)
					this.setState({
						redirectTo: '/'
					})
				}
			}).catch(error => {
				console.log('login error: ')
				console.log(error);

			})
	}
	handleSubmit(event) {
		event.preventDefault()
		console.log('handleFavSubmit')

		axios
			.post('http://localhost:5000/fav/', {
				username: this.state.username,
				fav: this.state.fav
			})
			.then(response => {
				console.log(response.status)
				console.log('====added fav response: ======')
				console.log(response.data)
				if (response.status === 200) {
					// update App.js state
					console.log('reponse data', response.data)
					console.log('reponse config===username>', response.config.data)
					var data = JSON.parse(response.config.data);
					console.log('reponse config===username>', data.username)
					this.props.setUsername(data.username)
					this.props.loggedIn(true)
					this.setState({
						redirectTo: '/'
					})
				}
			}).catch(error => {
				console.log('login error: ')
				console.log(error);

			})
	}



	render() {
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		} else {
			return (
				<div>
					<Header setTrails={this.setTrails} username={this.props.username} loggedIn={this.props.loggedIn} />
					<h4>FavHikes</h4>

					<form className="form-horizontal">
						<div className="form-group">
							<div className="form-group ">
								<div className="col-7"></div>
								<button
									className="btn btn-primary col-1 col-mr-auto"

									onClick={this.handleSubmit}
									type="submit">Add Fav</button>
							</div>
							<div className="col-1 col-ml-auto">
								<label className="form-label" htmlFor="fav">User Name</label>
							</div>
							<div className="col-3 col-mr-auto">
								<input className="form-input"
									type="text"
									id="username"
									name="username"
									placeholder="Username"
									value={this.props.username} disabled
									onChange={this.handleChange}
								/>
							</div>
						</div>
						<div className="form-group">
							<div className="col-1 col-ml-auto">
								<label className="form-label" htmlFor="fav">FavHike: </label>
							</div>
							<div className="col-3 col-mr-auto">
								<input className="form-input"
									placeholder="favHike"
									type="text"
									name="fav"
									value={this.state.fav}
									onChange={this.handleChange}
								/>
							</div>
						</div>
						<div className="form-group ">
							<div className="col-7"></div>
							<button
								className="btn btn-primary col-1 col-mr-auto"

								onClick={this.handleSubmit}
								type="submit">Add Fav</button>
						</div>

						<div className="form-group ">
							<div className="col-7"></div>
							<button
								className="btn btn-primary col-1 col-mr-auto"

								onClick={this.handleFav}
								type="submit">Show My Fav</button>
						</div>
					</form>
				</div>
			)
		}
	}
}

export default FavHikes
