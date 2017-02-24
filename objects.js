var playlist = {artist:"songTitle"};
//var updatePlaylist = ({playlist: 'a'},{artistName:'b'},{songTitle;'c'})
//var updatePlaylist =({[playlist]:{artistName;'whoever'},{songTitle:'nothing'});
//object.assign({updatePlaylist:'playlist'},{artistName:'b'},{songTitle;'c'});
function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName]=songTitle;
  return playlist
}
function removeFromPlaylist (playlist,artistName){
  delete playlist[artistName];
  return playlist
}
