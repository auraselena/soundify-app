const express = require("express");
const app = express();
const port = 5005;
const cors = require("cors");
const axios = require("axios");
const api_url = "https://api.spotify.com/v1/playlists/";
const playlist_id = "3cEYpjA9oz9GiPac4AsH4n";
const my_cc = "ef5d4cb9702c42fbaa3d3ca1007768cc";

let songs = [
  {title: "I Want It That Way", artist: "Backstreet Boys", duration: "3:34", pic: "https://open.spotify.com/intl-id/track/62KnDRUq6CBcT7Bqb9IHKV"},{title: "Rover", artist: "KAI", duration: "3:34", pic: "https://i.scdn.co/image/ab67616d0000b273ca0bf7a337ed7a8bcc34948e"}
]

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(cors());
app.use(express.json());

app.get("/songs", (req, res) => {
  res.send(songs)
})

// add songs to my playlist
app.post("/add-song", (req, res) => {
  const {title, artist, url} = req.body;
  console.log("req.body", req.body);
  songs.push({title, artist, url});
  res.send(songs);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
