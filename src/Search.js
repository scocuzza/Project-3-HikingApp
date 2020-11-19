import './App.css';
import React, { Component } from 'react';
import { getAllTrails } from './api';

class Search extends Component {
  
    constructor(props) {
        super(props)
        this.state = {
            lat: 0,
            long: 0
        }
    }
    render () {
        return (
            <>
            <form>
                <label htmlFor="lat">Latitude</label>
                <input onChange={this.setLatitude} name="lat" placeholder="Enter Latitude"></input>
                <label htmlFor="long">Longitude</label>
                <input onChange={this.setLongitude} name="long" placeholder="Enter Longitude"></input>
                <button onClick={this.handleFormSubmit}>Submit</button>
            </form>
            </>
          );
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
    handleFormSubmit = (e) => {
        e.preventDefault()
        console.log('Button has been clicked');
        getAllTrails(this.state.lat, this.state.long).then((response) => {
            this.props.setTrails(response.data.trails)
        }).catch((error) => {
            console.log('API Error');
        })
     }
    
export default Search;