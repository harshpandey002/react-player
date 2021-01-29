import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({
  isPlaying,
  audioRef,
  songs,
  setSongs,
  setCurrentSong,
  setIsPlaying,
  libraryStatus,
  darkMode,
}) => {
  return (
    <div className={`library ${libraryStatus ? "active-library" : ""}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            audioRef={audioRef}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            songs={songs}
            setSongs={setSongs}
            setCurrentSong={setCurrentSong}
            song={song}
            id={song.id}
            key={song.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
