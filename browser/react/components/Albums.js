import React from 'react';

import AlbumPreview from './AlbumPreview';

const Albums = (props) => {

  const albums = props.albums;

  return (
    <div>
      <h3>Albums</h3>
      <div className="row">
      {
        albums.map(album => <AlbumPreview key={album.id} album={album} />)
      }
      </div>
    </div>
  );
}

export default Albums;
