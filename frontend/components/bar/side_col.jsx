import React from 'react';
import { Link } from 'react-router';
import BarIndex from './bar_index';
import Route from './route';


class SideCol extends React.Component {

  render() {
    if (this.props.view === "bars-index") {
      return (
        <div>
          <div className="unselected-view">
            <Link onClick={() => this.props.changeView("route")}>
              <div className="unselected-label">
                <div className="unselected-label-view"><p>Your Route</p> </div>
              </div>
            </Link>
          </div>
          <div className="bars-index">
            <BarIndex bars={this.props.bars}
              changeHoverBar={this.props.changeHoverBar}
              deleteHoverBar={this.props.deleteHoverBar}
              changeView={this.props.changeView}
              route={this.props.route}/>
          </div>
        </div>
      )
    } else if (this.props.view === "route") {
        return (
          <div>
            <div className="unselected-view">
              <Link onClick={() => this.props.changeView("bars-index")}>
                <div className="unselected-label">
                  <div className="unselected-label-view"><p>Nearby Bar</p> </div>
                </div>
              </Link>
            </div>
            <div className="route">
              <Route changeView={this.props.changeView}
                route={this.props.route}
                deleteBar={this.props.deleteBar}
                legs={this.props.legs}
                saveRoute={this.props.saveRoute}
                user={this.props.user}/>
            </div>
          </div>
        )
    } else if (this.props.view === "close-bar-index") {
      return (
        <div>
          <div className="unselected-view">
            <Link onClick={() => this.props.changeView("route")}>
              <div className="unselected-label">
                <div className="unselected-label-view"><p>Your Route</p> </div>
              </div>
            </Link>
          </div>
          <div className="unselected-view-second">
            <Link onClick={() => this.props.changeView("bars-index")}>
              <div className="unselected-label">
                <div className="unselected-label-view"><p>Nearby Bar</p> </div>
              </div>
            </Link>
          </div>
        </div>
      )
    } else if (this.props.view === "close-route"){
      return (
        <div>
          <div className="unselected-view">
            <Link onClick={() => this.props.changeView("bars-index")}>
              <div className="unselected-label">
                <div className="unselected-label-view"><p>Nearby Bar</p> </div>
              </div>
            </Link>
          </div>
          <div className="unselected-view-second">
            <Link onClick={() => this.props.changeView("route")}>
              <div className="unselected-label">
                <div className="unselected-label-view"><p>Your Route</p> </div>
              </div>
            </Link>
          </div>
        </div>
      )
    }
  }

}

export default SideCol;
