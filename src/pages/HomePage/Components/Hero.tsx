import styles from "../Styles/Hero.module.scss";
import { hero_right_panel } from "../../../assets/images";

const Hero = () => {
  return (
    <section className={styles.Hero}>
      <div className={styles.hero__left__panel}>
        <span>Create <br/> Unforgettable <br/> Event Memories <br/>
        <button> Create Event</button>
        </span>
      </div>
      <div className={styles.hero__right__panel}>
        <img src={hero_right_panel} alt="" />
      </div>
    </section>
  );
};

export default Hero;
