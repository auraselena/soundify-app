const playlists = require("../model/playlist-model");

const songPlayCount = (playlist_id) => {
  const playlist = playlists.find((playlist) => playlist.playlistId === playlist_id);
  if (playlist) {
    playlist.songs.map((value) => {
      value.count = Math.random() * 1000;
      console.log(value.count);
    });
  }
};

const getMostPlayedSong = (playlist_id) => {
  const arrCounter = [];
  const playlist = playlists.find((playlist) => playlist.playlistId === playlist_id);
  if (playlist) {
    playlist.songs.map((value) => {
      arrCounter.push(value.count);
    });
  }

  const mostPlayed = arrCounter.sort((a, b) => a - b);

  const mostPlayedSong = playlist.songs.find((song) => {
    song.count === mostPlayed;
  });

  return mostPlayedSong;
};

const addSongToPlaylist = (playlistId, title, count) => {
  const choosePlaylist = playlists.findIndex(playlistId);

  if(choosePlaylist){
    playlists[choosePlaylist].songs.push({title, count});
    return true;
  } else {
    return false
  }
}

module.exports = { songPlayCount, getMostPlayedSong, addSongToPlaylist };
