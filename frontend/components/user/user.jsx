import React from 'react';
import { Link , hashHistory} from 'react-router';
import Modal from 'react-modal';
import ModalStyle from './modal_style';
import { changeCurrentRoute } from '../../actions/user_actions';

class User extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
		    modalOpen: true
      };
		this.closeModal = this.closeModal.bind(this);
    this.onClickHandle = this.onClickHandle.bind(this);
	}


  openModal() {
		this.setState({
			modalOpen: true,
		});
	}

	closeModal() {
		this.setState({modalOpen: false});
    hashHistory.push('/bars')
	}

  onClickHandle(routeName, routeObj) {
    this.setState({modalOpen: false});
    this.props.changeCurrentRoute(routeObj)
    const hashRouteName = routeName.replace(/\s+/g, '-').toLowerCase()
    hashHistory.push(`/users/${this.props.currentUser.username}-${hashRouteName}`)
  }

  render() {
    const {currentUser} = this.props
    return (
      <div>
        <Modal
          contentLabel="Modal"
          isOpen= {this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={ModalStyle}
          id="user-detail-modal">
          <div className="person-trip">
            <div className="person-trip-view">
              <div className="person-trip">
                <div className="person-header">
                  <div className="person-background">
                  </div>
                  <div className="header">
                    <div className="avatar">
                      <img src={window.user_logo}></img>
                    </div>
                    <div className="infor">
                      <h1>{currentUser.username}</h1>
                    </div>
                  </div>
                </div>
                <div className="person-actions">
                    <div className="trips-count">
                      <p>You have {currentUser.routes.length} routes</p>
                    </div>
                </div>
                <div className="trip-list-view">
                  <div className="trip-list">
                    {currentUser.routes.map( (route,idx) => (
                    <div className="trip-card-view" key={idx}>
                      <section className="trip-card">
                        <header>
                          <div className="header-group">
                            <img src={window.user_logo}></img>
                          </div>
                          <h3>
                            <Link onClick={() => this.onClickHandle(route.route_name,route)}>
                              {route.route_name}
                            </Link>
                          </h3>
                        </header>
                        <div className="image-feature">
                          <img src={route.bars[0].bar_img}></img>
                        </div>
                        <div className="stats">
                          <ul>
                            <li><p>{route.bars.length} bars in this route</p></li>
                          </ul>
                        </div>
                      </section>
                    </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    )
  }
}


export default User
