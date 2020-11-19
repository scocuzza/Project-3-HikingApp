import React, { Component } from 'react';
import TrailsContainer from './TrailsContainer';
import Search from './Search';

class App extends Component {

  setTrails = (trails) => {
    this.setState({ trails: trails });
  }

  render() {
    return(
      <>
      <h1>Hiking Trail application</h1>
      <Search setTrails={this.setTrails}/>
      <TrailsContainer trails={this.state.trails}/>
      </>
    )
  }
}

export default App;
