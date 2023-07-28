import styles from "./styles/ourvalues.module.scss";
import { value_icon1, value_icon2, value_icon3, value_icon4, value_icon5, value_icon6 } from "../../../assets/images";


const OurValues = () => {
    return (
        <main className={styles.values}>
            <h2>Our Values</h2>
            <div>
                <section>
                    <span>
                        <img src={value_icon1} alt="value icon" />
                    </span>
                    <span>
                        <b>Excellence</b>
                    </span>
                    <span>
                        <p>
                            We strive for excellence in every aspect of event management  from  planning to attendee experience
                        </p>
                    </span>
                </section>
                <section>
                    <span>
                        <img src={value_icon2} alt="value icon" />
                    </span>
                    <span>
                        <b>Collaboration</b>
                    </span>
                    <span>
                        <p>
                            Promoting collaboration and teamwork among event planners
                        </p>
                    </span>
                </section>
                <section>
                    <span>
                        <img src={value_icon3} alt="value icon" />
                    </span>
                    <span>
                        <b>Customer Satisfaction</b>
                    </span>
                    <span>
                        <p>
                            We place a strong emphasis on customer satisfaction and exceeding clients expectations 
                        </p>
                    </span>
                </section>
                <section>
                    <span>
                        <img src={value_icon4} alt="value icon" />
                    </span>
                    <span>
                        <b>Attention To Details</b>
                    </span>
                    <span>
                        <p>
                            We pay attention to every detail of  your event till execution
                        </p>
                    </span>
                </section>
                <section>
                    <span>
                        <img src={value_icon5} alt="value icon" />
                    </span>
                    <span>
                        <b>Adaptability</b>
                    </span>
                    <span>
                        <p>
                            We are adaptable and  flexible  to meet the unique needs and requirements of each event
                        </p>
                    </span>
                </section>
                <section>
                    <span>
                        <img src={value_icon6} alt="value icon" />
                    </span>
                    <span>
                        <b>Continous Improvement</b>
                    </span>
                    <span>
                        <p>
                            We are continously learning and staying up to date with industry trends, technologies and best practices
                        </p>
                    </span>
                </section>
            </div>
        </main>
    )
}
export default OurValues