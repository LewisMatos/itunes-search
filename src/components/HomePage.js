import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/HomePage.css';

class HomePage extends Component {
  render() {
    return (
      <div className="homepage">
        <div className="container d-flex h-100 align-items-center">
          <header className="mx-auto text-center">
            <div className="mx-auto text-white my-0 display-1">
              <span className="fa fa-apple text-white mr-1" />
              {'iArtist'}
            </div>
            <h3 className="text-white mx-auto mt-2 mb-2">Search artists on iTunes</h3>
            <Link to="/search">
              <button type="button" className="btn btn-lg homepage-btn">
                Get Started
              </button>
            </Link>
          </header>
        </div>
      </div>
    );
  }
}

export default HomePage;
