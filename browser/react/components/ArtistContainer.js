import React from 'react';

export default function ArtistContainer(props) {
  const neededProps = {
    selectArtist: props.selectArtist,
    artist: props.artist,
    artists: props.artists,
    currentSong: props.currentSong,
    isPlaying: props.isPlaying,
    toggleOne: props.toggleOne,
  };
  return (
            <div>
              {props.children && React.cloneElement(props.children, neededProps)}
            </div>
          );
}
