import styles from "./AboutUsPage.module.scss";
import { AnimatedFadeInPage } from "../../utils";
import { Hero } from "../HomePage/Components";
import { Mission, Stats, WhatWeDo, OurValues, WhatPeopleSay, OurTeam } from "./components";

const AboutUsPage = () => {
  return (
    <>
      <AnimatedFadeInPage>
        <main className={styles.AboutUsPage}>
          <Hero />
          <Mission />
          <Stats />
          <WhatWeDo />
          <OurValues />
          <WhatPeopleSay />
          <OurTeam />
        </main>
      </AnimatedFadeInPage>
    </>
  );
};

export default AboutUsPage;
