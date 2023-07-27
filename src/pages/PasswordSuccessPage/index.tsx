import styles from './PasswordSuccessPage.module.scss';
import { AnimatedFadeInPage } from "../../utils";
import { password_success_icon } from "../../assets/images";

const PasswordSuccessPage = () => {
  return ( 
  <>
  <AnimatedFadeInPage>
    <main>
      <div className={styles.PasswordSucces}>
        <img src={password_success_icon} alt="password successful icon" />
        <h3>Password Reset</h3>
        <p>Your password has been successfully reset. Click below to log in</p>

        <button className= {styles.open_email_btn}>Continue</button>
        {/* <p>Didn’t receive the email? <span> Click to Resend</span></p> */}
        <button className= {styles.back_to_login_btn}><span> ⬅</span> Back to LOGIN</button>
      </div>
    </main>
  </AnimatedFadeInPage>
  </> 
  );
}
 
export default PasswordSuccessPage;