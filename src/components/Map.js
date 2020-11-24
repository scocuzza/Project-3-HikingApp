import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

class Map extends Component {
   render() {
   const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: this.props.lat, lng: this.props.long } }
        defaultZoom = { 10 }
      >
      <Marker position={{ lat: this.props.lat, lng: this.props.long }} draggable={true} ref={props.onMarkerMounted} onPositionChanged={props.onPositionChanged} />    
      </GoogleMap>
   ));
   return(
      <div>
        <GoogleMapExample
          containerElement={ <div style={{ height: `600px`, width: '600px' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </div>
   );
   }
};
export default Map;