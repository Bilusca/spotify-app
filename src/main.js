import spotify from './Spotify';

import renderAlbums from './AlbumList';
import renderAlbumInfo from './AlbumInfo';
import renderAlbumTracks from './AlbumTracks';

const albums = spotify.search.albums('Kanye West');
const albumList = document.getElementById('album-list');

const album = spotify.album.getAlbum('4xM1pUHZp9HsuKNxyOQDR0');
const albumInfo = document.getElementById('album-info');
const albumTracks = document.getElementById('album-tracks');

albums
  .then( data => renderAlbums(data.albums.items, albumList));

album
  .then( data => renderAlbumInfo(data, albumInfo))
  .then( data => renderAlbumTracks(data.tracks.items, albumTracks));
