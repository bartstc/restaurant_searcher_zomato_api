import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Error from './Error';
import '../styles/restaurantslist.scss';

const RestaurantsList = props => {
  const restaurants = props.location.state;

  if (restaurants === undefined) {
    return (
      <Error />
    )
  };

  return (
    <React.Fragment>
      <Header />
      <div className="restaurant-list-container">
        <button className="btn-transparent btn-transparent--back">
          <Link className="link" to="/">
            Back to home.
          </Link>
        </button>
        <ul className="resturant-list">
          {
            restaurants.map(item => {
              const { id, thumb, name, location: { address }, user_rating: { aggregate_rating: rate } } = item;

              return (
                <li key={id} className="restaurant-item">
                  <div className="restaurant-item__image" style={{ backgroundImage: `url('${thumb}')` }}></div>
                  <div className="restaurant-item__content">
                    <div className="basic-info">
                      <h2 className="restaurant-name">{name}</h2>
                      <h4 className="restaurant-location">{address}</h4>
                    </div>
                    <div className="restaurant-details">
                      <button className="btn-transparent">
                        <Link className="link" to={{
                          pathname: `/details/${id}`,
                          state: { restaurant: item, restaurants }
                        }}>Details
                        </Link>
                      </button>
                      <p className="rating-value">{rate}</p>
                    </div>
                  </div>
                </li>
              )
            })
          };
        </ul>
      </div>
    </React.Fragment>
  );
};

export default RestaurantsList;