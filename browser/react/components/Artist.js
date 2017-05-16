import React from 'react';
import AlbumPreview from './AlbumPreview'
import Songs from './Songs'

export default class Artist extends React.Component {

  componentWillReceiveProps(nextProps) {
    let {artistId} = nextProps.params;
    nextProps.selectArtist(artistId);
  }
  render() {
    return (
      <div>
        <h3>{this.props.artist.name}</h3>
        <h4>ALBUMS</h4>
        {this.props.artist.albums && this.props.artist.albums.map(album => <AlbumPreview key={album.id} album={album} />)}
        <h4>SONGS</h4>
        <Songs
          songs={this.props.artist.songs || []}
          currentSong={this.props.currentSong}
          isPlaying={this.props.isPlaying}
          toggleOne={this.props.toggleOne} />
      </div>
    )
  }
}
