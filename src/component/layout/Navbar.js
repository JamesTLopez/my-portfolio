import React from "react";
import { Link} from "react-router-dom";
import "../../styles/navbar.css"

function Navbar() {
  return (
    <div className="navbar-container">
      <header>
        <div className="Name">
          <p><span id="first">James</span><span id="last">Lopez</span></p>
        </div>
        <div className="navigation">
          <nav>
            <ul>
              <li>
                <Link id="Link" to="/my-portfolio">
                  Home
                </Link>
              </li>
              <li>
                <Link id="Link" to={`/my-portfolio/about`}>
                  About
                </Link>
              </li>
              <li>
                <Link id="Link" to="/my-portfolio/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
