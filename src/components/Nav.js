import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic, faLightbulb } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ libraryStatus, setLibraryStatus, darkMode, setDarkMode }) => {
  return (
    <nav>
      <div className="logo">
        <h1>
          <span className="mode">
            <FontAwesomeIcon
              onClick={() => setDarkMode(!darkMode)}
              icon={faLightbulb}
            />
          </span>
          Waves
        </h1>
      </div>
      <button
        onClick={() => setLibraryStatus(!libraryStatus)}
        className={`${darkMode ? "btn-dark" : ""} `}
      >
        Library
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
};

export default Nav;
