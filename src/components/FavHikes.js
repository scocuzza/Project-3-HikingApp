import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import Navbar from './Navbar'
import Header from './Header'
import Trail from './Trail';

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

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleFav(event) {
		event.preventDefault()
		console.log('clicked fav button ')
		const username = event.target.value;
		console.log('the username-----', username)
		//axios.get(`http://localhost:5000/allfav/${username}`)
		//axios.delete(`${process.env.REACT_APP_BASE_URL}/api/articles/${id}`)
		axios.get(`http://localhost:5000/allfav/${username}`)
			.then(response => {
				console.log(response.status)
				console.log('====added fav response: ======')
				console.log(response.data)
				this.props.setAllfav(response.data.fav)
				if (response.status === 200) {
					this.setState({
						redirectTo: '/'
					})
				}
			}).catch(error => {
				console.log(' get  error: ')
				console.log(error);

			})
	}
	handleSubmit(event) {
		event.preventDefault()
		console.log('saving the fav handleFavSubmit')
		const username = event.target.value;
		console.log('username', username);
		console.log('fav', this.props.favTrails);
		axios
			.post('http://localhost:5000/fav/', {
				username: username,
				fav: this.props.favTrails
			})
			.then(response => {
				console.log(response.status)
				console.log('====added fav response: ======')
				console.log(response.data)
				if (response.status === 200) {
					// update App.js state

					this.setState({
						redirectTo: '/'
					})
				}
			}).catch(error => {
				console.log('there is error error: ')
				console.log(error);

			})
	}

	componentDidMount() {
		console.log('username---->', this.props.username);
		let username = this.props.username;
		axios.get(`http://localhost:5000/allfav/${username}`)
			.then(response => {
				console.log(response.status)
				console.log('===The result i got from the fav======')
				console.log('fav trails===>', response.data.fav)
				console.log('fav trails===>', response.data.fav[0].favHikingPlace)
				this.props.setFavTrails(response.data.fav[0].favHikingPlace)
				if (response.status === 200) {
					this.setState({
						redirectTo: '/'
					})
				}
			}).catch(error => {
				console.log(' get  error: ')
				console.log(error);

			})
	}
	render() {


		let allTrails = '';
		if (this.props.favTrails.length > 0) {
			allTrails = this.props.favTrails.map((trail, index) => {
				console.log('getting trail data===>', trail);
				return <Trail loggedIn={this.props.loggedIn} trail={trail}
					setCurrentTrail={this.props.setCurrentTrail}
					setFavTrails={this.props.setFavTrails} />
			})
		}
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		} else {
			return (
				<div>
					<Header setTrails={this.setTrails} username={this.props.username} loggedIn={this.props.loggedIn} />
					<h4>FavHikes</h4>
					{allTrails}
					<form className="form-horizontal">
						<div className="form-group">

							<div className="col-1 col-ml-auto">
								<label className="form-label" htmlFor="fav">User Name</label>
							</div>

						</div>
						<div className="form-group">
							<div className="col-1 col-ml-auto">
								<label className="form-label" htmlFor="fav">FavHike: </label>
							</div>

						</div>
						<div className="form-group ">
							<div className="col-7"></div> <br /> <br />

							<button
								className="btn btn-primary col-1 col-mr-auto"
								value={this.props.username}

								onClick={this.handleSubmit}
								type="submit">SAVE My Fav</button>
						</div>


					</form>
				</div>
			)
		}
	}
}

export default FavHikes
