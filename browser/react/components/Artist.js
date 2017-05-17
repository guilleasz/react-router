import React from 'react';
import { Link } from 'react-router';
import AlbumPreview from './AlbumPreview';
import Songs from './Songs';

export default class Artist extends React.Component {
  componentDidMount() {
    this.props.selectArtist(this.props.params.artistId);
  }

  componentWillReceiveProps(nextProps) {
    const { artistId } = nextProps.params;
    if (artistId !== this.props.params.artistId) {
      nextProps.selectArtist(artistId);
    }
  }
  render() {
    const artist = this.props.artist || {};
    const children = this.props.children;
    const propsToPassToChildren = {
      songs: artist.songs,
      currentSong: this.props.currentSong,
      isPlaying: this.props.isPlaying,
      toggleOne: this.props.toggleOne,
      albums: artist.albums,
    };

    return (
      <div>
        <h3>{artist.name}</h3>
        <ul className="nav nav-tabs">
          <li><Link activeClassName="active" to={`/artists/${artist.id}/albums`}>ALBUMS</Link></li>
          <li><Link activeClassName="active" to={`/artists/${artist.id}/songs`}>SONGS</Link></li>
        </ul>
        { children && React.cloneElement(children, propsToPassToChildren) }
      </div>
    )
  }
}


/*
<h4>ALBUMS</h4>
        {this.props.artist.albums && this.props.artist.albums.map(album => <AlbumPreview key={album.id} album={album} />)}
        <h4>SONGS</h4>
        <Songs
          songs={this.props.artist.songs || []}
          currentSong={this.props.currentSong}
          isPlaying={this.props.isPlaying}
          toggleOne={this.props.toggleOne} />
*/
