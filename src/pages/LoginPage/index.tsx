import styles from "./LoginPage.module.scss";
import { AnimatedFadeInPage } from "../../utils";

const LoginPage = () => {
  return (
    <>
      <AnimatedFadeInPage>
        <main className={styles.LoginPage}>LoginPage</main>
      </AnimatedFadeInPage>
    </>
  );
};

export default LoginPage;
