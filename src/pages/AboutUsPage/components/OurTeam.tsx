import styles from "./styles/ourteam.module.scss";
import { haleemah, oyindamola, emitech, samuel } from "../../../assets/images";

const OurTeam = () => {
    return (
        <main className={styles.team}>
            <span>
                <h2>Meet Our Team</h2>
            </span>
            <div className={styles.team1}>
                <span>
                    <img src={haleemah} alt="Halimat Jubril" />
                </span>
                <span>
                    <p>Halimat Jubril</p>
                </span>
                <span>
                    <b>Product</b>
                </span>
            </div>
            <div className={styles.team2}>
                <span>
                    <img src={oyindamola} alt="Christianah Oladimeji" />
                </span>
                <span>
                    <p>Christianah Oladimeji</p>
                </span>
                <span>
                    <b>Product</b>
                </span>
            </div>
            <div className={styles.team3}>
                <span>
                    <img src={emitech} alt="Odezulu Augustine" />
                </span>
                <span>
                    <p>Odezulu Augustine</p>
                </span>
                <span>
                    <b>Engineering</b>
                </span>
            </div>
            <div className={styles.team4}>
                <span>
                    <img src={samuel} alt="Olaoluwa Samuel" />
                </span>
                <span>
                    <p>Olaoluwa Samuel</p>
                </span>
                <span>
                    <b>Engineering</b>
                </span>
            </div>
        </main>
    )
}
export default OurTeam