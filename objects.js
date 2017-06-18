var playlist = {
  kisnou: 'Same Destiny'
};
function updatePlaylist(playlist, artistName, songTitle) {
  playlist["My Bloody Valentine"] = "Sometimes";
  playlist["Slowdive"] = "Alison";
  playlist["Phil Ochs"] = "Here's to the State of Mississippi";
  playlist["In This Moment"] = "Whore";
  playlist["Cher"] = "Believe";
  playlist["Twenty-one Pilots"] = "Ride";
  return playlist;
}
function removeFromPlaylist(playlist, artistName) {
  delete playlist["Slowdive"];
  return playlist;
}