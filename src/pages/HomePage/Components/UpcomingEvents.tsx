import styles from "../Styles/UpcomingEvents.module.scss";
// import { who, trade_fair, wofbec, halleluyah, charity_gala, techX } from "../../../assets/images";
import { events } from "../../../data/events";

const UpcomingEvents = () => {
  return (
    <section className={styles.UpcomingEvents}>
      <h2>Upcoming Events</h2>
      <main>
        {events?.map((event, index) => (
          <div key={`event-${index}`} className={styles.event__details}>
            <figure>
              <img src={event.eventPoster} alt={event.eventTheme} className={styles.event__poster} />
              <figcaption>{event.eventTheme}</figcaption>
            </figure>
            <aside>
              <span>{event.eventDescription}</span>
              <span>{event.eventDate}</span>
              <span>{event.eventCategory}</span>
              <span>{event.eventOrganizers}</span>
            </aside>
            <div className={styles.see__more}>
              <>
              {event.registeredParticipants.map((participant, index) => (
                  <figure key={`participant-${index}`}>
                    <img 
                      src={participant.profile_picture} 
                      alt={participant.name} 
                      className={styles.avatar} 
                      style={{
                        // top: `${20 * index}px`,
                        left: `${20 * index}px`,
                        zIndex: index,
                        verticalAlign: `middle`,
                      }}
                
                    />
                  </figure>
              ))}
              </>
              <span className={styles.btn}><button>See More</button></span>
            </div>
          </div>
        ))}
      </main>
      <div className={styles.register__btn}>
        <button>Register for an event</button>
      </div>
    </section>
  );
};

export default UpcomingEvents;
