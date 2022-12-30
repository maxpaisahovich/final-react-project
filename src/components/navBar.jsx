import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/auth.context";

const NavBar = () => {
  const { user } = useAuth();

  return (
    <>
      <nav
        className="navbar navbar-expand-sm navbar-dark bg-dark shadow-sm"
        aria-label="Third navbar example"
      >
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Business World App <i className="bi bi-signpost-2-fill"></i>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample03"
            aria-controls="navbarsExample03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample03">
            <ul className="navbar-nav me-auto mb-2 mb-sm-0">
              <li className="nav-item">
                <NavLink to="about" className="nav-link">
                  About
                </NavLink>
              </li>
              {user?.biz && (
                <li className="nav-item">
                  <NavLink to="my-business-cards" className="nav-link">
                    My Business Cards
                  </NavLink>
                </li>
              )}
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-sm-0">
              {user ? (
                <>
                  <li className="nav-item">
                    <NavLink to="sign-out" className="nav-link">
                      Sign Out
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink to="sign-in" className="nav-link">
                      Sign In
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="sign-up" className="nav-link">
                      Sign Up
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="sign-up-business" className="nav-link">
                      Sign Up Business
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default NavBar;
