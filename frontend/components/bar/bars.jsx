import React from 'react';
import { hashHistory } from 'react-router';

import SideCol from './side_col';
import BarMap from './bar_map';
import MarkerManager from '../../util/marker_manager';


class Bars extends React.Component {
  render() {
    return (
      <div>
      {this.props.bars.length>0  &&
        <div className="main-view">
          <div className="map-view">
            <BarMap bars={this.props.bars}
              updateFilter={this.props.updateFilter}
              hoverBar={this.props.hoverBar}
              route={this.props.route}
              addLegsToRoute={this.props.addLegsToRoute}/>
          </div>
          <div className="side-col-view">
            <SideCol
              bars={this.props.bars}
              changeHoverBar={this.props.changeHoverBar}
              deleteHoverBar={this.props.deleteHoverBar}
              changeView={this.props.changeView}
              view={this.props.view}
              route={this.props.route}
              deleteBar={this.props.deleteBar}
              legs={this.props.legs}
              saveRoute={this.props.saveRoute}
              user={this.props.user}/>
          </div>
          {this.props.children}
        </div>
      }
      </div>
    )
  }
}

export default Bars;
