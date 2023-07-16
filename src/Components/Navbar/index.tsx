import styles from "./Navbar.module.scss";
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
// import { selectCurrentUserName } from "../../redux/features/auth/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const mobileNavbarOpen = useSelector(currentMobileNavState);
  const navElements = [
    { link: routePaths.HOMEPAGE, name: "Home" },
    { link: routePaths.ABOUT_US, name: "About Us" },
    { link: routePaths.GET_A_TICKET, name: "Get a Ticket" },
    { link: routePaths.EVENT_LISTINGS, name: "Event Listings" },
  ];

  return (
    <>
      <nav className={styles.Navbar}>
        <div className={styles.desktop_nav_container}>
          <Link className={styles.tribe_logo} to={`${routePaths.SPLASHPAGE}`}>
            <img src={tribe_event_icon} alt="tribe event logo" />
          </Link>

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
          <div className={styles.right_side}>
            <Link to={`${routePaths.LOGIN}`} className={styles.login_button}>
              Log In
            </Link>
            <Link to={`${routePaths.SIGNUP}`} className={styles.signup_button}>
              Sign Up
            </Link>
          </div>

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

export default Navbar;
