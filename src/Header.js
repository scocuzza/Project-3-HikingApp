import react, {Component} from 'react'
import Search from './Search'


class Header extends Component {
  
	render() {
		return (
            <header>
                <Search setTrails={this.props.setTrails}/>
            </header>	
		)
	}
}

export default Header