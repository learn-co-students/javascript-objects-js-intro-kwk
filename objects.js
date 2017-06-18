var playlist = {
  'Disturbed': 'Down With The Sickness',
  'Sixx A.M.': 'Stars'
};

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {[artistName]: songTitle});
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}
