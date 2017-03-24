import React from 'react';
import { Link, hashHistory} from 'react-router';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      destination: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.autoComplete = this.autoComplete.bind(this)
    this.update = this.update.bind(this)
    this.updateInput = this.updateInput.bind(this)
  }

  componentDidMount() {
    const input = document.getElementById('autocomplete');
    this.autoComplete(input)
  }

  autoComplete(input) {
    const autocomplete = new google.maps.places.Autocomplete(input);
    const update = this.update
    const searchBars = this.props.searchBars
    google.maps.event.addListener(autocomplete, 'place_changed', function() {
        const place = autocomplete.getPlace()
        const destination = place.name
        update("destination", destination)
        searchBars(destination)
        hashHistory.push('/bars')
    });
  }

  update(field, place) {
		return this.setState({
      [field] : place
    });
	}

  updateInput(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

  handleSubmit(e) {
    e.preventDefault();
    this.props.searchBars(this.state.destination);
    hashHistory.push('/bars')
  }


  render() {
    return (
      <div className="search-view">
        <div className="search-welcome">
          <div className="nav-logo">
            <div className="logo">
              <img src={window.compass_logo}></img>
              <div className="logo-text">discover&plan</div>
            </div>
            <div className="logo">
              <img src={window.map_logo}></img>
              <div className="logo-text">map&share</div>
            </div>
            <div className="logo">
              <img src={window.go_logo}></img>
              <div className="logo-text">go</div>
            </div>
          </div>
          <h2> Your Bar Crawl, Your Night Out, Your Weekend</h2>
          <p> Let's Start Planning</p>
        </div>
        <div className="search-form">
          <form onSubmit={this.handleSubmit}>
            <fieldset className="search-form">
              <label>
                <img src={window.destination}></img>
                <input type="text"
                  placeholder="Destination, neighborhoods, or city"
                  className="search-input"
                  id="autocomplete"
                  onChange={this.updateInput("destination")}/>
              </label>
            </fieldset>

            <button className="search-button" type="submit">
              GO
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default Search;
