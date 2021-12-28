// External imports
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header header">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-3">
              <div className="logo">
                <Link to="/">React App</Link>
              </div>
            </div>
            <div className="col-lg-9 me-auto">
              <div className="menu-wrap">
                <ul className="menu  justify-content-end">
                  <li className="menu__item">
                    <NavLink
                      to="/"
                      className={(navInfo) =>
                        navInfo.isActive
                          ? "menu__link menu__link--active"
                          : "menu__link"
                      }
                    >
                      Home
                    </NavLink>
                  </li>

                  <li className="menu__item">
                    <NavLink
                      to="/auth"
                      className={(navInfo) =>
                        navInfo.isActive
                          ? "menu__link menu__link--active"
                          : "menu__link"
                      }
                    >
                      Auth
                    </NavLink>
                  </li>

                  <li className="menu__item">
                    <NavLink
                      to="/profile"
                      className={(navInfo) =>
                        navInfo.isActive
                          ? "menu__link menu__link--active"
                          : "menu__link"
                      }
                    >
                      Profile
                    </NavLink>
                  </li>
                  <li className="menu__item">
                    <NavLink
                      to="/dashboard"
                      className={(navInfo) =>
                        navInfo.isActive
                          ? "menu__link menu__link--active"
                          : "menu__link"
                      }
                    >
                      Dashboard
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
