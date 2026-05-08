import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>Rahman <span>Editing</span></h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/konsultasi">Konsultasi</Link>
      </div>
    </nav>
  );
}

export default Navbar;