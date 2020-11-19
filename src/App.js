import React, { Component } from 'react';
import TrailsContainer from './TrailsContainer';
import Search from './Search';

class App extends Component {

  render() {
  
    return(
      <>
      <h1>Hiking Trail application</h1>
      <Search />
      <TrailsContainer />
      </>
    )
  }
}

export default App;
