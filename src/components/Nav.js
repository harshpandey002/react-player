import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ libraryStatus, setLibraryStatus, darkMode, setDarkMode }) => {
  return (
    <nav>
      <h1 onClick={() => setDarkMode(!darkMode)}>Waves</h1>
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
