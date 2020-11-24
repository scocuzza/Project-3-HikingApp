import React, { Component } from 'react';
import { BrowserRouter as BrowserRouter, Route, Link } from 'react-router-dom'


/*
"id": 7011192,
"name": "Boulder Skyline Traverse",
"type": "Recommended Route",
"summary": "The classic long mountain route in Boulder.",
"difficulty": "black",
"stars": 4.7,
"starVotes": 93,
"location": "Superior, Colorado",
"url": "https://www.hikingproject.com/trail/7011192/boulder-skyline-traverse",
"imgSqSmall": "https://cdn2.apstatic.com/photos/hike/7039883_sqsmall_1555092747.jpg",
"imgSmall": "https://cdn2.apstatic.com/photos/hike/7039883_small_1555092747.jpg",
"imgSmallMed": "https://cdn2.apstatic.com/photos/hike/7039883_smallMed_1555092747.jpg",
"imgMedium": "https://cdn2.apstatic.com/photos/hike/7039883_medium_1555092747.jpg",
"length": 17.3,
"ascent": 5446,
"descent": -5524,
"high": 8446,
"low": 5424,
"longitude": -105.2582,
"latitude": 39.9388,
"conditionStatus": "All Clear",
"conditionDetails": "Dry",
"conditionDate": "2020-09-16 14:37:11"
*/

class Trail extends Component {
	render() {
		return (
				<div className="column" >
					<div className="card">
						<div className="card-title">
							<img className="card-image" src={this.props.trail.imgSqSmall} alt=""></img>
							<div className="difficulty">
								<p><b>Stars</b> {this.props.trail.stars} </p>
								<p><b>Difficulty</b> {this.props.trail.difficulty.toUpperCase()}</p>
							</div>
						</div>
						
						<div className="card-detail">
							<p>{this.props.trail.name}</p>
							<p><b>Length</b> {this.props.trail.length} Miles</p>
						</div>
						<p>{this.props.trail.summary}</p>
						<p>Location: {this.props.trail.location}</p>
						<Link to='/details' onClick={()=> {this.props.setCurrentTrail(this.props.trail)}}>More Details</Link>
					</div>
				</div>
		)
		
	}


}
export default Trail;