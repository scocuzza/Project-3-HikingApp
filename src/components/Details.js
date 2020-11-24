import react, {Component} from 'react'
import Map from './Map'
import Search from './Search'
import Navbar from './Navbar'

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

class Details extends Component {
  
	render() {
		return (
            <>
            <header className="main-header">
					<Navbar loggedIn={this.props.loggedIn} username={this.props.username}/>
			</header>
            {/* <h2>{this.props.currentTrail.name}</h2> */}
            <div className="detail-container">
                <div className="detail-left-side">
                {/* <h1>Details</h1>
                <h3 className="detail-header">{this.props.currentTrail.name}</h3>  */}
                {/* <img className="detail-image" src={this.props.currentTrail.imgMedium} alt=""></img>
                <img className="detail-image" src={this.props.currentTrail.imgMedium} alt=""></img> */}
                <img className="detail-image" src={this.props.currentTrail.imgMedium} alt=""></img>
                <br/>
                </div> 
                <Map lat={this.props.currentTrail.latitude} long={this.props.currentTrail.longitude}/>
                <div className="detail-right-side">
                <h1>Details</h1>
                <h3 className="detail-header">{this.props.currentTrail.name}</h3>
                    <p><b>Stars</b> {this.props.currentTrail.stars} <b>Votes</b> {this.props.currentTrail.starVotes}</p> 
                    <p><b>Difficulty</b> {this.props.currentTrail.difficulty}</p>
                    <p><b>Length</b> {this.props.currentTrail.length} Miles</p>
                    <p><b>Summary:</b>{this.props.currentTrail.summary}</p>
                    <p><b>Location: </b> {this.props.currentTrail.location}</p>
                    <p><b>Ascent:</b> {this.props.currentTrail.ascent} <b>Descent:</b> {this.props.currentTrail.descent}</p>
                    <p><b>Condition Status: </b> {this.props.currentTrail.conditionStatus}</p>
                    <p><b>Condition Details: </b> {this.props.currentTrail.conditionDetails}</p>
                    <p><b>Condition Date: </b> {this.props.currentTrail.conditionDate}</p>
                </div>
            </div>
            {/* <div className="detail-grid-container">
            <div className="nothing" >
					<div className="detail-card">
						<div className="detail-card-title">
							<img src={this.props.currentTrail.imgSmallMed} alt=""></img>
							<div className="detailsDifficulty">
								<p><b>Stars</b> {this.props.currentTrail.stars}</p>
								<p><b>Difficulty</b> {this.props.currentTrail.difficulty}</p>
							</div>
						</div>
						
						<div className="detail-card-detail">
							<p>{this.props.currentTrail.name}</p>
							<p><b>Length</b> {this.props.currentTrail.length} Miles</p>
						</div>
						<p>{this.props.currentTrail.summary}</p>
						<p>Location: {this.props.currentTrail.location}</p>
						</div>
				</div>
                </div> */}
            </>
		)
	}
}

export default Details
