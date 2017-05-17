import React from 'react';
import ReactDOM from 'react-dom';
/* globals document */

import AppContainer from './containers/AppContainer';
import { Router, Route, browserHistory, IndexRedirect, IndexRoute} from 'react-router';
import Album from './components/Album';
import Albums from './components/Albums';
import Artists from './components/Artists';
import Artist from './components/Artist';
import Songs from './components/Songs';
import NotFound from './components/NotFound';
import AlbumContainer from './components/AlbumContainer';
import ArtistContainer from './components/ArtistContainer';
ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={AppContainer} >
      <IndexRedirect to="albums" />
      <Route path="albums" component={AlbumContainer} >
        <IndexRoute component={Albums} />
        <Route path=":albumId" component={Album} />
      </Route>
      <Route path="artists" component={ArtistContainer}>
        <IndexRoute component={Artists} />
        <Route path=":artistId" component={Artist} >
          <Route path="albums" component={Albums} />
          <Route path="songs" component={Songs} />
        </Route>
      </Route>
      <Route path="*" component={NotFound} />
    </Route>
  </Router>,
  document.getElementById('app'));
