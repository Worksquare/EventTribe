import styles from "./styles/whatpeoplesay.module.scss";
import { coma } from "../../../assets/images";

const WhatPeopleSay = () => {
    return (
        <main className={styles.say}>
            <span>
                <h2>What People Are Saying</h2>
            </span>
            <div>
                <section>
                    <article>
                        <span>
                            <img src={coma} alt="inverted coma" />
                        </span>
                        <span className={styles.span}>
                            <p>
                                "I can't say enough positive things about Event Tribe!!! 
                                It made planning my event a breeze! It is user-friendly,
                                has comprehensive features, and excellent customer support . 
                                I was able to create a professional event website, manage 
                                registrations seamlessly, and easily communicate with attendees. 
                                The website truly enhanced the overall event experience for both me and my attendees."
                            </p>
                        </span>
                    </article>
                    <aside>
                        <span 
                            style={{fontFamily: 'Montserrat', fontWeight: 500, fontSize: '20px', lineHeight: '24.38px', color: '#253DA1'}}
                        >
                            Jane
                        </span>
                        <span 
                            style={{fontFamily: 'Montserrat', fontWeight: 400, fontSize: '18px', lineHeight: '29.14px', color: '#253DA1'}}
                        >
                            Apple Inc.
                        </span>
                    </aside>
                </section>
                <section>
                    <article>
                        <span>
                            <img src={coma} alt="inverted coma" />
                        </span>
                        <span className={styles.span}>
                            <p>
                                "I highly recommend [Event Management Website] for anyone looking 
                                to host a successful event. From start to finish, their platform 
                                provided me with the tools I needed to plan and execute my event flawlessly.
                            </p>
                        </span>
                    </article>
                    <aside>
                        <span 
                            style={{fontFamily: 'Montserrat', fontWeight: 500, fontSize: '20px', lineHeight: '24.38px', color: '#253DA1'}}
                        >
                            Daniel
                        </span>
                        <span 
                            style={{fontFamily: 'Montserrat', fontWeight: 400, fontSize: '18px', lineHeight: '29.14px', color: '#253DA1'}}
                        >
                            Toyota.
                        </span>
                    </aside>
                </section>
            </div>
        </main>
    )
}
export default WhatPeopleSay