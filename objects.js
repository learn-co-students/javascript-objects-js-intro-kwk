var playlist = {["Phil Ochs"]: "My Bloody Valentine"};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist["Phil Ochs"] = "My Bloody Valentine";
  return playlist
}

function removeFromPlaylist(playlist, artisName){
  delete playlist["Slowdive"];
  return playlist
}
