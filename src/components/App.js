import React, { Component } from 'react';
import SearchNav from './SearchNav';
import ArtistLists from './ArtistLists';
import fetchJsonp from 'fetch-jsonp';

import '../css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.state = {
      search: '',
      artist: {},
      loading: false,
    };
  }

  async getArtist(artist) {
    this.setState({ loading: true });
    try {
      let resp = await fetchJsonp(`https://itunes.apple.com/search?term=${artist}`);
      let json = await resp.json();
      this.setState({ artist: json, loading: false });
    } catch (e) {
      console.log(e);
    }
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.getArtist(this.state.search);
  }

  handleKeyPress(evt) {
    if (evt.key === 'Enter') {
      this.getArtist(this.state.search);
    }
  }

  handleChange(evt) {
    this.setState({ search: evt.target.value });
  }

  render() {
    return (
      <div className="app">
        <SearchNav
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          handleKeyPress={this.handleKeyPress}
          search={this.state.search}
        />
        <ArtistLists artist={this.state.artist} loading={this.state.loading} />
      </div>
    );
  }
}

export default App;
