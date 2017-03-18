import React from 'react';

class BarsIndex extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="bars-index">
        {this.props.bars.map((bar, idx) => (
          <ul key={idx}>
            <li> {bar.name} </li>
            <li> {bar.city} </li>
            <li> {bar.rating} </li>
          </ul>
        ))}
      </div>
    )
  }
}

export default BarsIndex
