var playlist = { "Elton John": 'Yellow Brick Road'};

function updatePlaylist(playlist, artistName, songTitle) {
return Object.assign({}, playlist, { [artistName]: songTitle });
}

function removeFromPlaylist(playlist, artistName){
  delete playlist.artistName;
  return playlist;
}
