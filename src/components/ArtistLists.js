import React, { Component } from 'react';
import Artist from './Artist';
import '../css/ArtistLists.css';

class ArtistLists extends Component {
  renderArtists() {
    let artist = this.props.artist;
    let artists = [];
    if (this.props.loading) {
      return <i className="fa fa-spinner fa-spin display-1 loading" />;
    } else if (Object.keys(artist).length) {
      artists = artist.results.map((album, idx) => {
        return <Artist album={album} key={idx} />;
      });
    }
    return artists;
  }

  render() {
    return (
      <div className="artistlists container-fluid mt-lg-5 pt-lg-5">
        <div className="d-flex flex-row flex-wrap justify-content-center">{this.renderArtists()}</div>
      </div>
    );
  }
}

export default ArtistLists;
