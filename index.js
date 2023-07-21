const express = require("express");
const app = express();
const port = 5005;
const cors = require("cors");
const playlistController = require("./controller/playlist-controller");
const songController = require("./controller/song-controller");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("🎶 This is Soundify API 🎵");
});

// HOMEWORK:
// 1. Make playlist as a model (playlist-model.js)
// 2. Track song play count in the playlist
app.get("/track-play-count", playlistController.trackPlayCount);

// 3. sort songs by most played song
app.get("/sort-by-most-played-song", songController.sortByMostPlayed);

// Previous exercises:
// add a song to my playlist --> success in postman
app.post("/add-song", playlistController.addSongToPlaylist);

// get list of songs from my playlist -> success in postman
app.get("/my-playlist");

// create new playlist based on model that has been made --> success in postman
app.post("/create-playlist", playlistController.createPlaylist);

// get all songs
app.get("/songs", songController.allSongs);

// play song from my playlist
app.post("/play-song", songController.playSong);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
