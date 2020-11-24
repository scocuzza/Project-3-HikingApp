import react, {Component} from 'react'
import Search from './Search'
import Navbar from './Navbar'
import Heading from './Heading'



class Header extends Component {
  
	render() {
		return (
            <header className="main-header">
				<Navbar username={this.props.username} loggedIn={this.props.loggedIn}/>
                <Search setTrails={this.props.setTrails}/>
            </header>	
		)
	}
}

export default Header