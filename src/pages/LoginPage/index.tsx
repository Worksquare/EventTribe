import styles from "./LoginPage.module.scss";
import { AnimatedFadeInPage } from "../../utils";
import { signin_icon,
  // signin_bottom, signin_top 
} from "../../assets/images";

const LoginPage = () => {
  return (
    <>
      <AnimatedFadeInPage>
        <main className={styles.LoginPage}>
          <div className= {styles.loginPage_wrapper}>
          {/* <img className={styles.sign_icon_top} src={signin_top} alt="sign top icon" />
          <img className={styles.sign_icon_bottom} src={signin_bottom} alt="sign bottom icon" /> */}
          <div className={styles.form_container}>
            <div className={styles.left_side}>
              <img src={signin_icon} alt="sign in icon" />
            </div>
            <div className={styles.right_side}>
              <h3>Sign In</h3>
              <form action="">
                <p>E-mail</p>
                <input type="email" />
                <p>Password</p>
                <input type="password" />
                <p>Forgot password</p>
                <div className={styles.btn_container}>
                  <button type="submit">SIGN IN</button>
                </div>
              </form>
            </div>
          </div>
          </div>
        </main>
      </AnimatedFadeInPage>
    </>
  );
};

export default LoginPage;
