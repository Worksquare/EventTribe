import styles from "./AuthorizedNavbar.module.scss";
import { Link, NavLink } from "react-router-dom";
import { routePaths } from "../../utils";
import {
  tribe_event_icon,
  hamburger_close_icon,
  hamburger_open_icon,
} from "../../assets/images";
import { useSelector, useDispatch } from "react-redux";
import {
  currentMobileNavState,
  closeNavbar,
  openNavbar,
} from "../../redux/features/mobileNav/mobileNavSlice";
import { search } from "../../assets/images";
// import { selectCurrentUserName } from "../../redux/features/auth/authSlice";

const AuthorizedNavbar = () => {
  const dispatch = useDispatch();
  const mobileNavbarOpen = useSelector(currentMobileNavState);
  const navElements = [
    { link: routePaths.HOMEPAGE, name: "Add An Organizer" },
    { link: routePaths.ABOUT_US, name: "My Events" },
    { link: routePaths.GET_A_TICKET, name: "My Tickets" },
    { link: routePaths.EVENT_LISTINGS, name: "Jonathan" },
  ];

  return (
    <>
      <nav className={styles.AuthorizedNavbar}>
        <div className={styles.desktop_nav_container}>
          <Link className={styles.tribe_logo} to={`${routePaths.SPLASHPAGE}`}>
            <img src={tribe_event_icon} alt="tribe event logo" />
          </Link>

          <div className={styles.search__event__input}>
            <label htmlFor="search">
              <input type="text" placeholder="search for events" />
            </label>
            <span>
              <img src={search} alt="filter icon" />
            </span>
          </div>

          {/* desktop center */}
          <div className={styles.navLinks_Desktop}>
            {navElements.map((elem) => {
              return (
                <NavLink
                  to={elem.link}
                  key={elem.name}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? styles.single_NavLink
                      : isActive
                      ? styles.single_NavLinkActive
                      : styles.single_NavLink
                  }
                >
                  {elem.name}
                </NavLink>
              );
            })}
          </div>

          {/* desktop right side */}
          {/* <div className={styles.right_side}>
            <Link to={`${routePaths.LOGIN}`} className={styles.login_button}>
              Log In
            </Link>
            <Link to={`${routePaths.SIGNUP}`} className={styles.signup_button}>
              Sign Up
            </Link>
          </div> */}

          {/* mobile hamburger controller */}
          <button
            onClick={() =>
              mobileNavbarOpen
                ? dispatch(closeNavbar())
                : dispatch(openNavbar())
            }
            className={styles.hamburger}
          >
            <img
              src={
                mobileNavbarOpen ? hamburger_close_icon : hamburger_open_icon
              }
              alt="Hamburger Menu Button"
            />
          </button>
        </div>

        {/* add the mobile navbar that slides in here */}
        <div
          className={
            mobileNavbarOpen
              ? styles.sidebar_Mobile_Opened
              : styles.sidebar_Mobile_Closed
          }
        >
          <section className={styles.Navlinks_Mobile}>
            {navElements.map((elem) => {
              return (
                <NavLink
                  to={elem.link}
                  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                  key={`${elem.link}_mobile`}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? styles.mobile_NavLink
                      : isActive
                      ? styles.mobile_NavLinkActive
                      : styles.mobile_NavLink
                  }
                >
                  {elem.name}
                </NavLink>
              );
            })}
          </section>
        </div>
      </nav>
    </>
  );
};

export default AuthorizedNavbar;
