var playlist={
  rihanna: "needed me",
  beyonce: "sorry",
  kehlani: "gangsta",
  Kanye: "Gold Digger"
}
function updatePlaylist(playlist,artistName,songTitle){
  playlist[artistName]=songTitle;
  return playlist;
}
function removeFromPlaylist(playlist,artistName){
  delete playlist.Kanye;
  return playlist;
}
