import React from 'react';
import { hashHistory } from 'react-router';

import BarIndex from './bar_index';
import BarMap from './bar_map';
import MarkerManager from '../../util/marker_manager';


class Bars extends React.Component {

  render() {
    return (
      <div>
      {this.props.bars  &&
        <div className="bars-view">
          <div className="map-view">
            <BarMap bars={this.props.bars} updateFilter={this.props.updateFilter} hoverBar={this.props.hoverBar} />
          </div>
          <div className="bars-view">
            <BarIndex bars={this.props.bars} changeHoverBar={this.props.changeHoverBar} deleteHoverBar={this.props.deleteHoverBar}/>
          </div>
          {this.props.children}
        </div>
      }
      </div>
    )
  }
}

export default Bars;
