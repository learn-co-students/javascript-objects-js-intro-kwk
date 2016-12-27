var playlist = {Jackson: "Earth Song"}; 

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return updatePlaylist(playlist, "Jackson2", "Remember the Time")
}
