const { playlists } = require("../model/playlist-model");

const addSongToPlaylist = (req, res) => {
  const { playlistId, title, artist, url } = req.body;
  let findPlaylist = playlists.find((playlists) => playlists.playlistId === playlistId);
  findPlaylist.songs.push({ title, artist, url });
  res.send(findPlaylist);
};

const myPlaylist = (req, res) => {
  if (playlists.length !== 0) {
    res.send(playlists);
  } else {
    res.send("You haven't made any playlist yet. Try adding a song to your playlist!");
  }
};

const createPlaylist = (req, res) => {
  const playlistId = playlists.length + 1;
  const { playlistName } = req.body;
  const newPlaylist = {
    playlistId,
    playlistName,
    playlistDesc: "",
    songs: [],
  };
  playlists.push(newPlaylist);
  return res.send(newPlaylist);
};

const trackPlayCount = (req, res) => {
  const { playlistId, songId } = req.body;
  let findPlaylist = playlists.find((playlists) => playlists.playlistId === playlistId);
  const songsFromPlaylist = findPlaylist.songs;
  const trackedSong = songsFromPlaylist.find((song) => song.id === songId);
  const result = trackedSong.count;
  if (result !== 0) {
    message = `Play count: ${result}`;
  } else if (result === 0) {
    message = "The song hasn't been played anywhere yet. Be the first listener!";
  } else {
    message = "Something is wrong";
  }

  return res.send(message);
};

module.exports = { addSongToPlaylist, myPlaylist, createPlaylist, trackPlayCount };
