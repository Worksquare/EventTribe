import styles from "./HomePage.module.scss";
import { AnimatedFadeInPage } from "../../utils";
import { Hero, Features, SearchCategories, UpcomingEvents } from "./Components";

const HomePage = () => {
  return (
    <AnimatedFadeInPage>
      <main className={styles.HomePage}>
        <div>
          <Hero />
          <SearchCategories />
          <UpcomingEvents />
          <Features />
        </div>
      </main>
    </AnimatedFadeInPage>
  );
};

export default HomePage;
