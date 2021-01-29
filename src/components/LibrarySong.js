const LibrarySong = ({
  audioRef,
  song,
  id,
  songs,
  setSongs,
  setCurrentSong,
  isPlaying,
  setIsPlaying,
  darkMode,
}) => {
  const songSelect = async () => {
    await setCurrentSong(song);
    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);
    if (isPlaying) audioRef.current.play();
  };
  return (
    <div
      onClick={songSelect}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img src={song.cover} alt="" />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
