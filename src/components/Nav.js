import { Link } from "react-router-dom"
// import useSound from "use-sound";
// import soundSfx from "snapping-finger.mp3"

import "./Nav.css"

function Nav() {
  return (
    <nav className="nav">
      <Link className="link" to="/">Home</Link>
      <Link className="link" to="/episodes">Episodes</Link>
      <Link className="link" to="/characters">Characters</Link>
    </nav>
  );
}

export default Nav;
