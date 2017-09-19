var playlist = { artistName: "oatmeal", songTitle: "turkey sandwich"};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}
