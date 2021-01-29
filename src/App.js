import { useState, useRef } from "react";
import "./styles/app.scss";
import data from "./data";
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import Nav from "./components/Nav";

function App() {
  //Ref
  const audioRef = useRef(null);

  //State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });
  const [libraryStatus, setLibraryStatus] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  // Handlers
  const timeUpdate = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    //Calculate Percentage
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const animation = Math.round((roundedCurrent / roundedDuration) * 100);
    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration,
      animationPercentage: animation,
    });
  };
  const songEnd = async () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    if (isPlaying) audioRef.current.play();
  };
  return (
    <div className={`app ${darkMode ? "dark" : ""} `}>
      <div className={`App ${libraryStatus ? "library-active" : ""}`}>
        <Nav
          libraryStatus={libraryStatus}
          setLibraryStatus={setLibraryStatus}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        <Song currentSong={currentSong} darkMode={darkMode} />
        <Player
          audioRef={audioRef}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          currentSong={currentSong}
          setSongInfo={setSongInfo}
          songInfo={songInfo}
          songs={songs}
          setSongs={setSongs}
          id={songs.id}
          setCurrentSong={setCurrentSong}
          darkMode={darkMode}
        />
        <Library
          isPlaying={isPlaying}
          audioRef={audioRef}
          setIsPlaying={setIsPlaying}
          songs={songs}
          setSongs={setSongs}
          setCurrentSong={setCurrentSong}
          libraryStatus={libraryStatus}
          darkMode={darkMode}
        />
        <audio
          onTimeUpdate={timeUpdate}
          onLoadedMetadata={timeUpdate}
          ref={audioRef}
          src={currentSong.audio}
          onEnded={songEnd}
        ></audio>
      </div>
    </div>
  );
}

export default App;
