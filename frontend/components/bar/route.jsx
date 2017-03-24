import React from 'react';
import { Link, hashHistory } from 'react-router';
import ModalStyle from '../session_form/modal_style';
import Modal from 'react-modal';


class Route extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      routeName: "",
			modalOpen: false
    };
		this.handleSubmit = this.handleSubmit.bind(this);
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    if (!this.props.user) {
      window.alert("no user")
    } else {
  		this.setState({
  			modalOpen: true,
  		});
    }
	}

	closeModal() {
		this.setState({modalOpen: false});
	}

  update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

  handleSubmit(e) {
		e.preventDefault();
    this.props.saveRoute(
    {route: {
      name: this.state.routeName,
      bars: this.props.route,
      user_id: this.props.user.id}
    })
    hashHistory.push('/users')
	}


  render() {
    const {route} = this.props
    const {deleteBar} = this.props
    const {legs} = this.props
    return (
      <div className="route-shell">
        <Link onClick={() => this.props.changeView("close-route")}>
          <div className="route-label" >
              <div className="route-label-view"><p>Your Route</p> </div>
          </div>
        </Link>
        <div className="trip-view">
          <div className="trip-scroll-view">
          <div className="trip-header-view">
            <div className="trip-header">
              <div className="trip-collab">
                <div className="user-icon">
                  <img src={window.beercup_url}></img>
                </div>
              </div>
              <h2>Your trip</h2>
            </div>
          </div>
          <div className="trip-review-view">
            {legs.length > 0 &&
              <div className="trip-review">
                <p>Total Walking Time: {legs[legs.length-1].total_time} mins</p>
              </div>
            }
          </div>
          <div className="trip-route-view">
            <div className="trip-route">
            {route.length>0 &&
              route.map((route, idx) => (
              <div className="waypoint-view">

                <div className="waypoint-card">
                  <div className="waypoint-info">
                    <div className="waypoint-img"><img src={route.img}></img></div>
                    <div className="waypoint-detail">
                      <p><Link>{route.name}</Link></p>
                    </div>
                    <div className="waypoint-del">
                      <Link onClick={() => deleteBar(route.name)} className="del-button">
                        Remove
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="waypoint-leg">
                  <div className="waypoint-break"></div>
                  {idx < legs.length &&
                    <div className="leg-stats">
                      <span>{legs[idx].distance} {legs[idx].duration}</span>
                    </div>}
                </div>

              </div>
              ))}
              </div>
          </div>
          </div>
          <div className="trip-actions-view">
            <div className="trip-action">
              <div className="action">
                <div className="action-text">
                  <Link onClick={this.openModal} >Save Your Route</Link>
                  {this.state.modalOpen &&
            				<Modal
            					contentLabel="Modal"
            					isOpen={this.state.modalOpen}
            					onRequestClose={this.closeModal}
            					style={ModalStyle}>

                      <form className="route-name-form" onSubmit={this.handleSubmit}>
                        <p>Name Your Route!</p>
                        <fieldset className="new-route-name">
        									<label>
        										<input type="text"
        											value={this.state.routeName}
        											onChange={this.update("routeName")}
        											className="route-name" />
        									</label>
        								</fieldset>
                        <button className="route-name-button" type="submit">
                          SAVE
        								</button>
                      </form>
            				</Modal>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Route;
