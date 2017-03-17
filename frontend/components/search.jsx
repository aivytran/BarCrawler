import React from 'react';
import { Link } from 'react-router';
import {searchBars} from './../util/search_api_util'

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      destination: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

  handleSubmit(e) {
    e.preventDefault();
    searchBars(this.state.destination);
  }

  render() {
    return (
      <div className="search-form">
        <h1> Your Bar Crawl, Your Night Out, Your Weekend </h1>
        <h2> Let's Start Planning </h2>
        <form onSubmit={this.handleSubmit}>
          <fieldset className="search-form">
            <label> Where do you want to go?
              <input type="text"
                placeholder="Destination"
                onChange={this.update("destination")}
                className="search-input" />
            </label>
          </fieldset>

          <button className="search-button" type="submit">
            GO
          </button>

        </form>
      </div>
    )
  }
}

export default Search;
