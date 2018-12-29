import React from 'react';
import { Link } from 'react-router-dom';
import Error from './Error';
import Header from './Header';
import fakeImg from '../img/fake-img.jpeg';
import '../styles/details.scss';
import '../styles/restaurantslist.scss';

const Details = props => {
  if (props.location.state === undefined) {
    return (
      <Error />
    )
  };

  const { thumb, name, user_rating: { aggregate_rating: rate }, location: { address }, average_cost_for_two: cost, currency, url, menu_url } = props.location.state.restaurant;
  const restaurants = props.location.state.restaurants;

  return (
    <React.Fragment>
      <Header />
      <div className="detail-container">
        <div className="detail-image" style={thumb === '' ? { backgroundImage: `url('${fakeImg}')` } : { backgroundImage: `url('${thumb}')` }}>
          <h1 className="restaurant-name">{name}</h1>
          <h4 className="restaurant-rated">{rate}</h4>
        </div>
        <div className="detail-content">
          <p className="detail-item"><span className="bold">Location: </span>{address}</p>
          <p className="detail-item"><span className="bold">Cost for pair: </span>{cost} {currency}</p>
          <button className="detail-btn"><a className="link" href={url} rel="noopener noreferrer" target="_blank">Go to website</a></button>
          <button className="detail-btn"><a className="link" href={menu_url} rel="noopener noreferrer" target="_blank">Go to menu</a></button>
          <button className="btn-transparent btn-transparent--back">
            <Link className="link" to={{
              pathname: "/restaurantslist",
              state: restaurants
            }}>
              Back to the list.
            </Link>
          </button>
        </div>
      </div>
    </React.Fragment>
  )
};

export default Details;

