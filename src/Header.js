import react, {Component} from 'react'
import Search from './Search'
import Navbar from './components/Navbar'



class Header extends Component {
  
	render() {
		return (
            <header className="main-header">
				<Navbar updateUser={this.props.updateUser} loggedIn={this.props.loggedIn}/>
                <Search setTrails={this.props.setTrails}/>
            </header>	
		)
	}
}

export default Header