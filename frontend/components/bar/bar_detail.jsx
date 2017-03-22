import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';
import ModalStyle from './modal_style';
import { hashHistory } from 'react-router';
import {mapOptions} from './map_options'



class BarDetail extends React.Component {

  constructor(props) {
		super(props);
		this.state = {
		    modalOpen: true
      };
		this.closeModal = this.closeModal.bind(this);
    this.fetchBar = this.props.fetchBar.bind(this);
    this.createMap = this.createMap.bind(this)
	}

  componentWillMount() {
    this.fetchBar(this.props.params.barName)
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

  componentDidUpdate() {
    this.createMap(this.props.bar)
  }

  componentDidMount() {
    this.createMap(this.props.bar)
  }

  createMap(bar) {
    window.requestAnimationFrame(function() {
      const map = document.getElementById("bar-detail-map");
      if (map !== null) {
        const _mapOptions = mapOptions(bar.lat, bar.lng, 15)
        const newMap = new google.maps.Map(map, _mapOptions);

        const pos = new google.maps.LatLng(bar.lat, bar.lng);
        const marker = new google.maps.Marker({
          position: pos,
          map: newMap,
          icon: window.beer
        });
      }
    });
  }


  render() {
    const {bar} = this.props
    this.createMap(this.props.bar)
    return (
      <div className="bar-detail-modal">
        {bar.address &&
        <Modal
					contentLabel="Modal"
					isOpen= {this.state.modalOpen}
					onRequestClose={this.closeModal}
					style={ModalStyle}
					id="bar-detail-modal">
          <div className="bar">
            <div className="bar-header">
              <div className="bar-header-main">
                <div className="header-detail">
                  <div className="header-detail-bar">
                    <div className="rating-view">
                      <div className="rating">{bar.rating}</div>
                      <div className="votes">{bar.review_count} votes</div>
                    </div>
                    <header>
                      <h1>{bar.name}</h1>
                      <p className="address">{bar.address[0]}, {bar.address[1]}</p>
                    </header>
                  </div>
                </div>
                <div className="header-image">
                  <img src={`${bar.image_url}`}></img>
                  <img src={`${bar.photo2}`}></img>
                  <img src={`${bar.photo3}`}></img>
                </div>
              </div>
            </div>
            <div className="bar-nav">
              <div className="bar-nav-bar">
                <div className="action-view">
                  <div className="add-to-route-button" role="button">
                    <span> Add to Route </span>
                  </div>
                </div>
                <div className="details">
                  <ul>
                    <li>{bar.price}</li>
                    {bar.is_open &&
                       <li>Open Now</li>
                    }
                    {!bar.is_open &&
                       <li>Open Soon</li>
                    }
                  </ul>
                </div>
              </div>
            </div>
            <div className="bar-main-view">
              <div className="bar-contain">
                <div className="reviews-list">

                  <div className="review-title">Reviews: </div>

                  <div className="reviews-view">
                    <div className="review-author">
                      <div className="author-img">
                        <img src={`${bar.review1_user_img}`}></img>
                      </div>
                      <div className="author-name">
                        <p>
                          Reivewed by
                          <span> {bar.review1_user_name}</span>
                            <li className="author-rating">Rated {bar.review1_rating}</li>
                        </p>
                      </div>
                    </div>
                    <div className="review-content">
                      <div className="review-date"> Create on {bar.review1_date} </div>
                      <div className="review-text"><p>{bar.review1}</p></div>
                    </div>
                  </div>


                  <div className="reviews-view">
                    <div className="review-author">
                      <div className="author-img">
                        <img src={`${bar.review2_user_img}`}></img>
                      </div>
                      <div className="author-name">
                        <p>
                          Reivewed by
                          <span> {bar.review2_user_name}</span>
                          <li className="author-rating">Rated {bar.review2_rating}</li>
                        </p>
                      </div>
                    </div>
                    <div className="review-content">
                      <div className="review-date"> Create on {bar.review2_date}</div>
                      <div className="review-text"><p>{bar.review2}</p></div>
                    </div>
                  </div>


                  <div className="reviews-view">
                    <div className="review-author">
                      <div className="author-img">
                        <img src={`${bar.review3_user_img}`}></img>
                      </div>
                      <div className="author-name">
                        <p>
                          Reivewed by
                          <span> {bar.review3_user_name}</span>
                          <li className="author-rating">Rated {bar.review3_rating}</li>
                        </p>
                      </div>
                    </div>
                    <div className="review-content">
                      <div className="review-date"> Create on {bar.review3_date}</div>
                      <div className="review-text"><p>{bar.review3}</p></div>
                    </div>
                  </div>
                  <div className="more-reviews">
                    <a href={bar.yelp_url} target="_blank"> Click here to view more reviews on Yelp</a>
                  </div>
                </div>
              </div>
              <div className="bar-aside">
                <div className="details-view">
                  <section className="details">
                    <div className="bar-map">
                      <div id="bar-detail-map" ref="bar">Map
                      </div>
                    </div>
                    <h2>{bar.name}</h2>
                    <div className="address">
                      <div>{bar.address[0]}</div>
                      <div>{bar.address[1]}</div>
                    </div>
                    <div className="phone">{bar.phone}</div>
                  </section>
                </div>

                <div className="hours-view">
                  <section className="hours">
                    <h2>Hours</h2>
                    <div className="open-now">
                      {bar.is_open &&
                         <li>Open Now</li>
                      }
                      {!bar.is_open &&
                         <li>Open Soon</li>
                      }
                    </div>
                    <ul>
                      <li><b>Monday:</b> {bar.mon_hour} </li>
                      <li><b>Tuesday:</b> {bar.tues_hour} </li>
                      <li><b>Wednesday:</b> {bar.wed_hour} </li>
                      <li><b>Thursday:</b> {bar.thurs_hour} </li>
                      <li><b>Friday:</b> {bar.fri_hour} </li>
                      <li><b>Saturday:</b> {bar.sat_hour} </li>
                      <li><b>Sunday:</b> {bar.sun_hour} </li>
                    </ul>
                  </section>
                </div>

              </div>
            </div>
          </div>
        </Modal>
      }
      </div>
    )
  }

}

export default BarDetail;
