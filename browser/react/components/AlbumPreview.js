import React from 'react';
import {Link} from 'react-router';

export default function AlbumPreview (props) {
  const album = props.album;
  return (
          <div className="col-xs-4" key={ album.id }>
              <Link to={`/albums/${album.id}`} className="thumbnail" >
                <img src={ album.imageUrl } />
                <div className="caption">
                  <h5>
                    <span>{ album.name }</span>
                  </h5>
                  <small>{ album.songs.length } songs</small>
                </div>
              </Link>
            </div>
  )
}
