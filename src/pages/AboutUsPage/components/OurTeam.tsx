import styles from "./styles/ourteam.module.scss";
import { team1, team2, team3, team4 } from "../../../assets/images";

const OurTeam = () => {
    return (
        <main className={styles.team}>
            <span>
                <h2>Meet Our Team</h2>
            </span>
            <div className={styles.team1}>
                <span>
                    <img src={team1} alt="victor oladokun" />
                </span>
                <span>
                    <p>Patricia Olaleye</p>
                </span>
                <span>
                    <b>C.E.O</b>
                </span>
            </div>
            <div className={styles.team2}>
                <span>
                    <img src={team2} alt="victor oladokun" />
                </span>
                <span>
                    <p>Victor Oladokun</p>
                </span>
                <span>
                    <b>C.F.O</b>
                </span>
            </div>
            <div className={styles.team3}>
                <span>
                    <img src={team3} alt="victor oladokun" />
                </span>
                <span>
                    <p>Yvonne Jegede</p>
                </span>
                <span>
                    <b>Sales Manager</b>
                </span>
            </div>
            <div className={styles.team4}>
                <span>
                    <img src={team4} alt="victor oladokun" />
                </span>
                <span>
                    <p>John James</p>
                </span>
                <span>
                    <b>Marketing</b>
                </span>
            </div>
        </main>
    )
}
export default OurTeam