import React from 'react';
import { Link , hashHistory} from 'react-router';
import {mapOptions} from '../bar/map_options'

class RouteDetail extends React.Component {
  constructor(props) {
		super(props);
    this.directionsDisplay = new google.maps.DirectionsRenderer({
      polylineOptions: {
        strokeColor: "#168480",
        strokeOpacity: 0.7,
        strokeWeight: 7,
        zIndex: 6},
      suppressMarkers: false
    });
    this.myMap = null
    this.legs = []
    this.update = this.update.bind(this)
    this.createMap = this.createMap.bind(this)
    this.calculateAndDisplayRoute = this.calculateAndDisplayRoute.bind(this)
	}

  update(field, value) {
		this.setState({
			[field]: value
		});
	}


  componentDidUpdate() {
    this.createMap()
  }

  componentDidMount() {
    this.createMap()
  }

  createMap() {
    const update = this.update
    const currentRoute = this.props.currentRoute
    const directionsDisplay = this.directionsDisplay
    const calculateAndDisplayRoute =  this.calculateAndDisplayRoute
    let thisMap = this.myMap
    window.requestAnimationFrame(function() {
      const map = document.getElementById("route-detail-map");
      if (map !== null) {
        const bar = currentRoute.bars[0]
        const coords = new google.maps.LatLng(bar.lat, bar.lng);
        const _mapOptions = mapOptions(coords.lat(), coords.lng(), 15)
        thisMap = new google.maps.Map(map, _mapOptions);
        calculateAndDisplayRoute(thisMap, currentRoute.bars, directionsDisplay )
      }
    });
  }

  calculateAndDisplayRoute(map, route, directionsDisplay) {
    const update = this.update
    const currentLegs = this.legs
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
      origin: {
        lat: origin_coords.lat(),
        lng: origin_coords.lng()
      },
      destination: {
        lat: des_coords.lat(),
        lng: des_coords.lng()
      },
      waypoints: waypoints,
      // optimizeWaypoints: true,
      // provideRouteAlternatives: true,
      travelMode: 'WALKING'
      }, function(response, status) {
        if (status === 'OK') {
          directionsDisplay.setDirections(response);
          let total_time = 0
          directionsDisplay.directions.routes[0].legs.forEach( leg => {
            const duration = leg.duration.text
            const distance = leg.distance.text
            total_time += leg.duration.value
            currentLegs.push({distance: distance, duration:duration})
            // makeMarker(leg.start_location, map);
          })
          currentLegs.push({total_time: Math.round(total_time/60)})
          // update(legs, legs)

        } else {
          window.alert('Directions request failed due to ' + status);
        }
      })
  };


  render() {
    this.createMap()
    const route = this.props.currentRoute
    return (
      <div className="route-detail">
        <div id="route-detail-map" ref="map">Map</div>
        <div className="route-shell">
          <Link>
            <div className="route-label" >
                <div className="route-label-view"><p>Your Route</p> </div>
            </div>
          </Link>
          <div className="trip-view">
            <div className="trip-scroll-view">
            <div className="trip-header-view">
              <div className="trip-header">
                <div className="trip-collab">
                  <div className="user-icon">
                    <img src={window.beercup_url}></img>
                  </div>
                </div>
                <h2>{route.route_name}</h2>
              </div>
            </div>
            <div className="trip-review-view">
              {this.legs.length > 0 &&
                <div className="trip-review">
                  <p>Total Walking Time: {this.legs[this.legs.length-1].total_time} mins</p>
                </div>
              }
            </div>
            <div className="trip-route-view">
              <div className="trip-route">
              {route.bars.length>0 &&
                route.bars.map((route, idx) => (
                <div className="waypoint-view" key={idx}>

                  <div className="waypoint-card">
                    <div className="waypoint-info">
                      <div className="waypoint-img"><img src={route.bar_img}></img></div>
                      <div className="waypoint-detail">
                        <p>{route.bar_name}</p>
                      </div>
                    </div>
                  </div>

                  <div className="waypoint-leg">
                    <div className="waypoint-break"></div>
                    {idx < this.legs.length &&
                      <div className="leg-stats">
                        <span>{this.legs[idx].distance} {this.legs[idx].duration}</span>
                      </div>}
                  </div>

                </div>
                ))}
                </div>
            </div>
            </div>
            <div className="trip-actions-view">
              <div className="trip-action">
                <div className="action">
                  <div className="action-text">
                    <Link onClick={() => hashHistory.push('/')} >New Search</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}


export default RouteDetail
