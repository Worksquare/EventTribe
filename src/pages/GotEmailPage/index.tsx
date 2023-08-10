import { AnimatedFadeInPage } from "../../utils";
import styles from "./GotEmailPage.module.scss";
import { inbox_email_icon } from "../../assets/images";

const GotEmailpage = () => {
  return ( 
  <>
  <AnimatedFadeInPage>
    <main>
      <div className={styles.GotEmailPage}>
        <img src={inbox_email_icon} alt="email inbox icon" />
        <h3>You’ve Got <br /> Mail!!!</h3>
        <p>We sent a reset password link to <br />  johnmensah@gmail.com</p>

        <button className= {styles.open_email_btn}>Open Email App</button>
        <p className={styles.receive_mail}>Didn’t receive the email? <span className={styles.receive_mail_span}> Click to Resend</span></p>
        <button className= {styles.back_to_login_btn}><span> ⬅</span> Back to LOGIN</button>
      </div>
    </main>
  </AnimatedFadeInPage>
  </> 
  );
}
 
export default GotEmailpage;