import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter, hashHistory } from 'react-router';
import MarkerManager from '../../util/marker_manager';
import {mapOptions} from './map_options'


class BarMap extends React.Component {
  constructor(props) {
    super(props)
    this.directionsDisplay = new google.maps.DirectionsRenderer({
      preserveViewport: true,
      polylineOptions: {
        strokeColor: "#168480",
        strokeOpacity: 0.7,
        strokeWeight: 7,
        zIndex: 6},
      suppressMarkers: false
    });
    this.addLegsToRoute = this.props.addLegsToRoute
  }

  componentDidMount() {
    const map = this.refs.map;
    let _mapOptions = mapOptions(this.props.bars[1].lat, this.props.bars[1].lng, 14)
    this.map = new google.maps.Map(map, _mapOptions);
    this.MarkerManager = new MarkerManager(this.map, this._handleMarkerClick.bind(this));
    this._registerListeners();
    this.MarkerManager.updateMarkers(this.props.bars);
  }


  componentDidUpdate(prevProps) {
    this.MarkerManager.updateMarkers(this.props.bars);
    this.MarkerManager.bounceMarker(this.props.hoverBar);
    if (this.props.route.length !== prevProps.route.length && this.props.route.length > 0) {
      this.calculateAndDisplayRoute(this.map, this.props.route, this.directionsDisplay)
    }
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
  }

  _handleMarkerClick(bar) {
    this.props.router.push(`bars/${bar.name_id.replace(/\s+/g, '-').toLowerCase()}`);
  }

  // makeMarker(position, map) {
  //  new google.maps.Marker({
  //   position: position,
  //   map: map,
  //   icon: {
  //     url: window.pin,
  //   }
  //  });
  // }

  calculateAndDisplayRoute(map, route, directionsDisplay) {
    const addLegsToRoute = this.addLegsToRoute
    const makeMarker = this.makeMarker
    const directionsService = new google.maps.DirectionsService;
    const destination = route[route.length-1]
    const origin_coords = new google.maps.LatLng(route[0].lat, route[0].lng);
    const des_coords = new google.maps.LatLng(destination.lat, destination.lng);
    const waypoints = []
    if (route.length > 2) {
      for (let i = 1; i < route.length-1; i++) {
        waypoints.push({
          location: new google.maps.LatLng(route[i].lat, route[i].lng),
          stopover: true
        })
      }
    }

    directionsDisplay.setMap(map);

    directionsService.route({
      origin: origin_coords,
      destination: des_coords,
      waypoints: waypoints,
      // optimizeWaypoints: true,
      // provideRouteAlternatives: true,
      travelMode: 'WALKING'
      }, function(response, status) {
        if (status === 'OK') {
          const legs = []
          directionsDisplay.setDirections(response);
          let total_time = 0
          directionsDisplay.directions.routes[0].legs.forEach( leg => {
            const duration = leg.duration.text
            const distance = leg.distance.text
            total_time += leg.duration.value
            legs.push({distance: distance, duration:duration})
            // makeMarker(leg.start_location, map);
          })
          legs.push({total_time: Math.round(total_time/60)})
          addLegsToRoute(legs)

        } else {
          window.alert('Directions request failed due to ' + status);
        }
      })
  };

  render() {
    return <div className="map" ref="map">Map</div>;
  }
}

export default withRouter(BarMap);
