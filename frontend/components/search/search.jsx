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
  }

  componentDidMount() {
    const input = document.getElementById('autocomplete');
    const autocomplete = new google.maps.places.Autocomplete(input);
  }

  update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

  handleSubmit(e) {
    e.preventDefault();
    this.props.searchBars(this.state.destination);
    hashHistory.push('/bars')
  }

  autoComplete() {
    const input = document.getElementById('autocomplete');
    return new google.maps.places.Autocomplete(input);
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
                  onChange={this.update("destination")}
                  className="search-input"
                  id="autocomplete"/>
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
