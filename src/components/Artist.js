import React, { Component } from 'react';
import '../css/Artist.css';

class Artist extends Component {
  replaceImageSize(url) {
    return (url = url.replace(/\/[^\/]*$/, '/800x800bb.jpg'));
  }

  render() {
    let album = this.props.album;
    return (
      <div className="artist col-lg-3 col-xl-2 col-md-3 col-sm-6 col-xs-12 mb-5 d-flex">
        <div className="card w-10 ">
          <a className="tracklink" target={'_blank'} href={album.trackViewUrl}>
            <img className="card-img-top " src={this.replaceImageSize(album.artworkUrl100)} alt="Card cap" />
            <div className="card-body">
              <h4 className="card-title cardtext">{album.trackName}</h4>
              <p className="card-text cardtext">{album.artistName}</p>
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default Artist;
