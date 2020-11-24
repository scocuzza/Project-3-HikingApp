import react, {Component} from 'react'
import Navbar from './Navbar'
import Map from './Map'


class Details extends Component {
  
	render() {
		return (
            <>
            <header className="main-header">
                <Navbar />
            </header>
            <h1>Details</h1>
            <h2>{this.props.currentTrail.name}</h2>
            <Map lat={this.props.currentTrail.latitude} long={this.props.currentTrail.longitude}/>
            </>
		)
	}
}

export default Details