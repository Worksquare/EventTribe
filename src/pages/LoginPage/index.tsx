import styles from "./LoginPage.module.scss";
import { AnimatedFadeInPage } from "../../utils";
import { signin_icon,
  // signin_bottom, signin_top 
} from "../../assets/images";
import { useLoginMutation } from "../../redux/app/api/loginApiSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate()
  const [login, { isLoading : isLoginLoading }] = useLoginMutation()
  const [userData, setUserData] = useState({
    email: "",
    password: ""
  })

  const handleLogin = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    try {
      const response = await login(userData);
      console.log(response)
      setTimeout(() => {
        navigate('/event-listings')
      }, 2000)
    } catch (error) {
      console.log(error)
    }
  }


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
                <input 
                  type="email"
                  onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                />
                <p>Password</p>
                <input 
                  type="password"
                  onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                />
                <p>Forgot password</p>
                <div className={styles.btn_container}>
                  <button 
                    type="submit"
                    onClick={handleLogin}
                    disabled={isLoginLoading}
                  >
                    {isLoginLoading ? 'Logging in...' : 'SIGN IN'}
                  </button>
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
