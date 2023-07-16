import styles from "../Styles/Features.module.scss";
import { event_creation, event_promotion, attendee_management, attendee_registration } from "../../../assets/images";

const Features = () => {
  return (
    <section className={styles.Features}>
      <h2>EventTribe Features</h2>
      <main>
        <div>
          <img src={event_creation} alt="event creation icon"/>
          <h5>Event Creation and Management</h5>
          <p>From conceptualizing event themes and 
            designing engaging experiences to creating 
            unforgettable moments that leave a lasting 
            impression on attendees.</p>
        </div>
        <div>
          <img src={attendee_registration} alt="event creation icon"/>
          <h5>Attendee registration and Ticketing</h5>
          <p>Providing a user friendly platform for attendees 
            to register ,select ticket options and securely 
            purchase tickets allowing accurate tracking of events.</p>
        </div>
        <div>
          <img src={attendee_management} alt="event creation icon"/>
          <h5>Attendee Management</h5>
          <p>Provides you with robust attendee management tools that 
            allow managing of  attendee profiles , registration tracking 
            and facilitation of communication between organizer and  participants </p>
        </div>
        <div>
          <img src={event_promotion} alt="event creation icon"/>
          <h5>Event Promotion and Management</h5>
          <p>Utilizing various marketing channels such as social media ,
            email campaigns, content creation and targeted advertising 
            to reach your target audience ,</p>
        </div>
      </main>
    </section>);
};

export default Features;
