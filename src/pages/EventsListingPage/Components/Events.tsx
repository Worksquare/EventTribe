import styles from "./Styles/Events.module.scss"
import { events } from "../../../data/events"
import { Link } from "react-router-dom"

const Events = () => {
    return (
        <section className={styles.Events}>
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
                <span className={styles.btn}>
                    <Link to={`/event/${event.eventId}`}>
                        <button>See More</button>
                    </Link>
                </span>
              </div>
            </div>
          ))}
        </main>
        <div className={styles.register__btn}>
            <button>Load More</button>
        </div>
      </section>
    )
}
export default Events