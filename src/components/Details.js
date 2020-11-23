import React, { Component } from 'react';

class Details extends Component {
	render() {
        console.log(this.props.trail)
        return (
            <>
            
              <h4>Trail details </h4>
              <ul>
                <li>Detail</li>
                <li>Detail</li>

              </ul>
            </>
          );
		
	}


}
export default Details;