import './App.css';
import { Component } from 'react';

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
                <input name="lat" placeholder="Enter Latitude"></input>
                <label htmlFor="long">Longitude</label>
                <input name="long" placeholder="Enter Longitude"></input>
                <button onClick={this.setInputs}>Submit</button>
            </form>
            </>
          );
    }
    setInputs = (e) => {
        console.log('Setting Inputs');
    }
    
}

export default Search;