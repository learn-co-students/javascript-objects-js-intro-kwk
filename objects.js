var playlist = {
  NSYNC: "It's gonna be me"
};

function updatePlaylist(list, artist, title) {
  list[artist] = title;
  return list;
}

function removeFromPlaylist(list, artist) {
  delete list[artist];
  return list;
}
