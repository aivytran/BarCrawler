export default class MarkerManager {
  constructor(map, handleClick){
    this.map = map;
    this.handleClick = handleClick;
    this.markers = [];
    this._createMarkerFromBar = this._createMarkerFromBar.bind(this);
    this._removeMarker = this._removeMarker.bind(this);
    this._markersToRemove = this._markersToRemove.bind(this);
    this.bounceMarker = this.bounceMarker.bind(this);
  }

  updateMarkers(bars){
    this.bars = bars;
    this._barsToAdd().forEach(this._createMarkerFromBar);
    this._markersToRemove().forEach(this._removeMarker);
  }

  _barsToAdd() {
    const currentBars = this.markers.map( marker => marker.barName );
    return this.bars.filter( bar => !currentBars.includes(bar.name) );
  }

  _markersToRemove(){
    const barNames = this.bars.map( bar => bar.name );
    return this.markers.filter( marker => !barNames.includes(marker.barName) );
  }

  bindInfoWindow(marker, map, infowindow, content) {
  	google.maps.event.addListener(marker, 'mouseover', function() {
  		infowindow.setContent(content);
  		infowindow.open(map, marker);
  	});
    google.maps.event.addListener(marker, 'mouseout', function() {
        infowindow.close();
    });
  }

  _createMarkerFromBar(bar) {
    const pos = new google.maps.LatLng(bar.lat, bar.lng);
    const marker = new google.maps.Marker({
      position: pos,
      map: this.map,
      barName: bar.name,
      icon: {
        url: window.beer,
        size: new google.maps.Size(50, 50),
        scaleSize: new google.maps.Size(50, 50)
      }
    });
    marker.addListener('click', () => this.handleClick(bar));

    const infowindow =  new google.maps.InfoWindow({
  		content: ''
  	});
    this.bindInfoWindow(marker, this.map, infowindow, '<div className="iw-container">'+'<div className="iw-content">' + bar.name + "</div>" + "</div>");

    this.markers.push(marker);
  }

  _removeMarker(marker) {
    const idx = this.markers.indexOf( marker );
    this.markers[idx].setMap(null);
    this.markers.splice(idx, 1);
  }

  bounceMarker(hoverBar) {
    if (hoverBar.name && !hoverBar.delete) {
      const currentMarker = this.markers.filter(marker => marker.barName === hoverBar.name)
      currentMarker[0].setAnimation(google.maps.Animation.BOUNCE);
      setTimeout(() => currentMarker[0].setAnimation(null), 4000)
    } else if (hoverBar.name && hoverBar.delete) {
      const currentMarker = this.markers.filter(marker => marker.barName === hoverBar.name)
      if (currentMarker[0]) {
        currentMarker[0].setAnimation(null);
      }
    }
  }
}
