import react, {Component} from 'react'
import Search from './Search'
import Navbar from './components/Navbar'



class Details extends Component {
  
	render() {
		return (
            <>
            <header className="main-header">
                <Navbar />
            </header>
            <h1>Details</h1>
            <h2>{this.props.currentTrail.name}</h2>
            </>
		)
	}
}

export default Details