import React, { Component } from 'react';
import { getAllTrails, getLocationInfo  } from '../api';
import Heading from './Heading'

class Search extends Component {

	constructor(props) {
		super(props)
		this.state = {
			lat: 0,
            long: 0,
            location: 'Yosemite,CA'
		}
	}
	render() {
		return (
			<>
				<div className="search-container">
					<div className="child">
						<form>
							<label htmlFor="location">Location</label>
							<input onChange={this.setLocation} name="location" placeholder="Enter Location" value={this.state.location}></input>
							<button type="button" onClick={this.getTrailData}>Submit</button>
						</form>
					</div>
				</div>
			</>
		);
    }
    componentDidMount() {
        this.getTrailData()
    }
	setLatitude = (e) => {
		this.setState({
			lat: e.target.value,
		})
	}
	setLongitude = (e) => {
		this.setState({
			long: e.target.value,
		})
    }
    setLocation = (e) => {
        this.setState({
            location: e.target.value
        })
    }
    getTrailData = () => {
        console.log('Getting Location..');
        getLocationInfo(this.state.location).then((response)=> {
            console.log('Getting Trails..');
            console.log(response.data.results[0].locations[0].latLng);
            const LatLong = response.data.results[0].locations[0].latLng
            getAllTrails(LatLong.lat, LatLong.lng).then((response) => {
            	console.log(response.data);
            	this.props.setTrails(response.data.trails)
            }).catch((error) => {
            	console.log('API Error' + error);
            })
        }).catch((error)=>{
            console.log('API error', + error);
        })
		
	}
}

export default Search;