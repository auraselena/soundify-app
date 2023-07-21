let playlists = [
  {
    playlistId: 1,
    playlistName: "Playlist 1",
    playlistDesc: "Deskripsi 1",
    songs: [
      { id: 1, title: "Song A", count: 1 },
      { id: 2, title: "Song B", count: 2 },
      { id: 3, title: "Song C", count: 3 },
    ],
  },
  {
    playlistId: 2,
    playlistName: "Playlist 2",
    playlistDesc: "Deskripsi 2",
    songs: [
      { id: 1, title: "Song D", count: 1 },
      { id: 2, title: "Song E", count: 2 },
      { id: 3, title: "Song F", count: 3 },
    ],
  },
  {
    playlistId: 3,
    playlistName: "Playlist 3",
    playlistDesc: "Deskripsi 3",
    songs: [{ id: 1, title: "Psycho", artist: "Red Velvet", url: "https://open.spotify.com/track/3CYH422oy1cZNoo0GTG1TK?si=0bc4bef0935f4313", count: 7 }],
  },
];

module.exports = { playlists };
