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
  const trackedSong = findPlaylist.find((playlist) => playlist.song.id === songId);
  if (trackedSong !== 0) {
    return res.send(trackedSong.count);
  } else if (trackedSong === 0) {
    return res.send("The song hasn't been played anywhere yet. Be the first listener!");
  } else {
    return res.status(500).send("Something is wrong");
  }
};

module.exports = { addSongToPlaylist, myPlaylist, createPlaylist, trackPlayCount };
