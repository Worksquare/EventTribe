import styles from "./styles/stats.module.scss";
import { stats_icon1, stats_icon2 } from "../../../assets/images";

const Stats = () => {
    return (
        <main className={styles.stats}>
            <div>
                <span>
                    <img src={stats_icon2} alt="stats icon" />
                </span>
                <span>
                    <b>2</b>
                </span>
                <span>
                    <p>Attendee Registrations</p>
                </span>
            </div>
            <div>
                <span>
                    <img src={stats_icon1} alt="stats icon" />
                </span>
                <span>
                    <b>24</b>
                </span>
                <span>
                    <p>Event Registrations</p>
                </span>
            </div>
        </main>
    )
}
export default Stats