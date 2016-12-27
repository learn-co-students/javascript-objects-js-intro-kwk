var playlist = {Phil Ochs: "Slowdive"}; 

function updatePlaylist(playlist, artistName, songTitle) {
  playlist.PhilOchs = "My Bloody Valentine"; 
  return playlist  
}

function removeFromPlaylist(playlist, artisName){
  delete playlist.Jackson; 
  return playlist
} 
