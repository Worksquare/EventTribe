import styles from "./SplashPage.module.scss";
import { AnimatedFadeInPage } from "../../utils";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { tribe_event_icon } from "../../assets/images";
import { routePaths } from "../../utils";

const SplashPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      console.log("fired");
      navigate(`${routePaths.HOMEPAGE}`);
    }, 3000);
  }, [navigate]);

  return (
    <>
      <AnimatedFadeInPage>
        <main className={styles.SplashPage}>
          <img src={tribe_event_icon} alt="oghenetega logo icon" />
        </main>
      </AnimatedFadeInPage>
    </>
  );
};

export default SplashPage;
