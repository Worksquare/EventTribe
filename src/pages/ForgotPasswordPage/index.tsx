import styles from "./ForgotPasswordPage.module.scss";
import { AnimatedFadeInPage } from "../../utils";
import { forgotPassword_icon} from "../../assets/images";

const ForgotPasswordPage = () => {
  return (
    <>
      <AnimatedFadeInPage>
        <main className={styles.ForgotPasswordPage}>
        <div className= {styles.ForgotPassword_wrapper}>
          
          <div className={styles.form_container}>
            <div className={styles.left_side}>
              <img src={forgotPassword_icon} alt="sign in icon" />
            </div>
            <div className={styles.right_side}>
              <h3>Reset Password</h3>
              <form action="">
                <p>E-mail</p>
                <input type="email" />
                <p>Password</p>
                <input type="password" />
                <p>Confirm password</p>
                <input type="password" />
                <div className={styles.btn_container}>
                  <button type="submit">RESET</button>
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

export default ForgotPasswordPage;
