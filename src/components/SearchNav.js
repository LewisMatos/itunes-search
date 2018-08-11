import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GithubCorner from 'react-github-corner';

import '../css/SearchNav.css';

class SearchNav extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="search fixed-top">
        <nav className="shadow-lg navbar navbar-light bg-light position-sticky d-flex justify-content-center">
          <form className="form-inline w-100 d-flex flex-column flex-md-row" onSubmit={this.props.handleSubmit}>
            <Link to="/" className="search-homelink">
              <div className="navbar-brand w-30 m-0">
                <span className="fa fa-apple mr-1" />
                {'iArtist'}
              </div>
            </Link>
            <div className="m-auto">
              <input
                className="form-control search-input"
                value={this.props.search}
                onChange={this.props.handleChange}
                onKeyPress={this.props.handleKeyPress}
                type="search"
                required={true}
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn search-btn m-0 text-black" type="submit">
                <i className="fa fa-search text-black" />
              </button>
            </div>
          </form>
          <GithubCorner size={60} bannerColor={'#000'} href="https://github.com/LewisMatos" />
        </nav>
      </div>
    );
  }
}

export default SearchNav;
