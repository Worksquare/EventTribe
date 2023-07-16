import styles from "./CredentialsNavbar.module.scss";
import { Link } from "react-router-dom";
import { routePaths } from "../../utils";
import { tribe_event_icon } from "../../assets/images";

const CredentialsNavbar = () => {
  return (
    <>
      <nav className={styles.CredentialsNavbar}>
        <Link className={styles.tribe_logo} to={`${routePaths.SPLASHPAGE}`}>
          <img src={tribe_event_icon} alt="tribe event logo" />
        </Link>

        <p>Take Control Of Your Events With Ease</p>

        <Link className={styles.signIn_button} to={`${routePaths.LOGIN}`}>
          Sign in
        </Link>
      </nav>
    </>
  );
};

export default CredentialsNavbar;
