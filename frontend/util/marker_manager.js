export default class MarkerManager {
  constructor(map, handleClick){
    this.map = map;
    this.handleClick = handleClick;
    this.markers = [];
    // console.log(this.markers);
    this._createMarkerFromBar = this._createMarkerFromBar.bind(this);
    this._removeMarker = this._removeMarker.bind(this);
    this._markersToRemove = this._markersToRemove.bind(this);
    this.bounceMarker = this.bounceMarker.bind(this);
  }

  updateMarkers(bars){
    this.bars = bars;
    this._barsToAdd().forEach(this._createMarkerFromBar);
    // console.log(this._markersToRemove());
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

  _createMarkerFromBar(bar) {
    // console.log(bar);
    const pos = new google.maps.LatLng(bar.lat, bar.lng);
    const marker = new google.maps.Marker({
      position: pos,
      map: this.map,
      barName: bar.name,
      icon: window.beer
    });
    marker.addListener('click', () => this.handleClick(bar));
    this.markers.push(marker);
  }

  _removeMarker(marker) {
    const idx = this.markers.indexOf( marker );
    this.markers[idx].setMap(null);
    this.markers.splice(idx, 1);
  }

  bounceMarker(hoverBar) {
    if (hoverBar.name && !hoverBar.delete) {
      const currretMarker = this.markers.filter(marker => marker.barName === hoverBar.name)
      currretMarker[0].setAnimation(google.maps.Animation.BOUNCE);
    } else if (hoverBar.name && hoverBar.delete) {
      const currretMarker = this.markers.filter(marker => marker.barName === hoverBar.name)
      currretMarker[0].setAnimation(null);
    }
  }

}
