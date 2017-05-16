import React from 'react';
import Songs from '../components/Songs';

class Album extends React.Component {

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.params.albumId, this.props.params.albumId)
    if (nextProps.params.albumId !== this.props.params.albumId) {
      nextProps.selectAlbum(nextProps.params.albumId);
    }
  }
  render() {
    const album = this.props.album;
    const currentSong = this.props.currentSong;
    const isPlaying = this.props.isPlaying;
    const toggleOne = this.props.toggleOne;
    return (
      <div className="album">
        <div>
          <h3>{ album.name }</h3>
          <img src={ album.imageUrl } className="img-thumbnail" />
        </div>
        <Songs
          songs={album.songs}
          currentSong={currentSong}
          isPlaying={isPlaying}
          toggleOne={toggleOne} />
      </div>
    );
  }
}

export default Album;
