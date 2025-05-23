import { Link, useNavigate } from "react-router-dom";
import "../../cssstyle/Navbar/Navbar.css";
function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <div className="navbar">
        <div>Logo</div>
        <ul>
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link to={"/about"}>
            <li>About</li>
          </Link>
          <Link to={"/contact"}>
            <li>Contact</li>
          </Link>
        </ul>
        <div className="auth-buttons">
          <button
            className="auth-button"
            onClick={() => navigate("/login", { replace: true })}
          >
            Login
          </button>
          <button
            className="auth-button"
            onClick={() => navigate("/logout", { replace: true })}
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
