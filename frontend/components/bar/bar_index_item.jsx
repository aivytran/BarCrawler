import React from 'react';
import { Link } from 'react-router';

class BarIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.onHover = this.onHover.bind(this)
    this.offHover = this.offHover.bind(this)
  }

  onHover() {
    this.props.changeHoverBar(this.props.bar.name)
  }

  offHover() {
    this.props.deleteHoverBar(this.props.bar.name)
  }

  render() {
    const {bar} = this.props
    return (
      <div className="bar-index-card">
        <Link to={`/bars/${bar.name_id.replace(/\s+/g, '-').toLowerCase()}`} onMouseEnter={ this.onHover } onMouseLeave={this.offHover} >

          <img src={`${bar.image_url}`} ></img>
          <div className="bar-info">
            <div className="label">
              <span>{bar.name}</span></div>
            <div className="rating">
              <img src={`${bar.rating}`}></img>
              <span>{bar.review_count} reviews</span>
            </div>
            <div className="neighborhoods">
              {
                bar.neighborhoods &&
                <span>{bar.neighborhoods.join(", ")}</span>
              }
            </div>
          </div>

        </Link>
      </div>
    )
  }
}


export default BarIndexItem;
