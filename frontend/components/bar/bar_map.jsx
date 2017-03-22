import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter, hashHistory } from 'react-router';
import MarkerManager from '../../util/marker_manager';
import {mapOptions} from './map_options'

// const _getCoordsObj = latLng => ({
//   lat: latLng.lat(),
//   lng: latLng.lng()
// });



class BarMap extends React.Component {

  componentDidMount() {
    const map = this.refs.map;
    let _mapOptions = mapOptions(this.props.bars[1].lat, this.props.bars[1].lng, 11)
    this.map = new google.maps.Map(map, _mapOptions);
    this.MarkerManager = new MarkerManager(this.map, this._handleMarkerClick.bind(this));
    this._registerListeners();
    this.MarkerManager.updateMarkers(this.props.bars);
  }


  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.bars);
    this.MarkerManager.bounceMarker(this.props.hoverBar)
  }

  _registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        sw_latitude: south,
        sw_longitude: west,
        ne_latitude: north,
        ne_longitude: east
      };
      this.props.updateFilter('bounds', bounds);
    });
    // google.maps.event.addListener(this.map, 'click', event => {
    //   const coords = _getCoordsObj(event.latLng);
    //   this._handleClick(coords);
    // });
  }

  _handleMarkerClick(bar) {
    this.props.router.push(`bars/${bar.name_id.replace(/\s+/g, '-').toLowerCase()}`);
  }
  //
  // _handleClick(coords) {
  //   this.props.router.push({
  //     pathname: "benches/new",
  //     query: coords
  //   });
  // }

  render() {
    return <div className="map" ref="map">Map</div>;
  }
}

export default withRouter(BarMap);
// export default BarMap;
