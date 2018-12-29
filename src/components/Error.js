import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/error.scss';

const Error = () => (
  <div className="error">
    <h1 className="error__title">404</h1>
    <h4 className="error__subtitle">Page not found.</h4>
    <button className="error__redirect">
      <Link className="home-link" to="/">
        Back to Home Page
      </Link>
    </button>
  </div>
);

export default Error;