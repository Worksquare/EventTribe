import styles from "./styles/mission.module.scss";
import { mission_image1, mission_image2, mission_image3, mission_image4, mission_image5, mission_image6 } from "../../../assets/images";

const Mission = () => {
    return (
        <main className={styles.mission}>
            <div className={styles.mission_gallery}>
                <div className={styles.row1}>
                    <span>
                        <img src={mission_image1} alt="woman speaking at an event" style={{width: '302px', height: '409px'}} />
                    </span>
                    <span>
                        <img src={mission_image2} alt="people raising a glass of drink at an event" style={{width: '282px', height: '216px'}} />
                    </span>
                    <span>
                        <img src={mission_image3} alt="a flower vase at an event" style={{width: '209px', height: '303px'}} />
                    </span>
                </div>
                <div className={styles.row2}>
                    <span>
                        <img src={mission_image4} alt="people at an event" style={{width: '302px', height: '174px'}} />
                    </span>
                    <span>
                        <img src={mission_image5} alt="aerial view of people going to an event" style={{width: '302px', height: '373px'}} />
                    </span>
                    <span>
                        <img src={mission_image6} alt="a woman wearing a graduation gown at an event" style={{width: '209px', height: '278px'}} />
                    </span>
                </div>
            </div>
            <div className={styles.mission_statement}>
                <article>Our Mission</article>
                <article>
                    <p>Our mission is to provide exceptional event management 
                        services and empower individuals, organizations, and 
                        businesses to create memorable and successful events.
                    </p>
                </article>
            </div>
        </main>
    )
}
export default Mission