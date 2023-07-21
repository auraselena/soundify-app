const { songs } = require("../model/song-model");

const allSongs = (req, res) => {
  res.send(songs);
};

const playSong = (req, res) => {
  const title = req.body.title;
  const songToPlay = songs.find((song) => {
    return song.title === title;
  });

  if (songToPlay) {
    const songUrl = songToPlay.url;
    res.send({
      url: songUrl,
    });
  } else {
    res.status(404).send("That song is not found in the playlist.");
  }
};

const sortByMostPlayed = (req, res) => {
  const sortedSongs = songs.slice();

  sortedSongs.sort((songA, songB) => songB.count - songA.count);

  return res.send(sortedSongs);
};

module.exports = { allSongs, playSong, sortByMostPlayed };
