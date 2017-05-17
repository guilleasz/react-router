import React from 'react';


export default function AlbumContainer(props) {

  return (
          <div>
            {props.children && React.cloneElement(props.children, props)}
          </div>
          )
}
