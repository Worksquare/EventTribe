import { useParams, Link } from "react-router-dom"
import styles from "./EventPage.module.scss"
import { events } from "../../data/events"
import { share, like, organizers } from "../../assets/images"
import { TrendingCategories } from "../EventsListingPage/Components"
import { useState } from "react"
import { AnimatedFadeInPage } from "../../utils"
// import { routePaths } from "../../utils"


const Event = () => {
    const { eventId } = useParams()
    const selectedEventId = eventId
    const [quantity, setQuantity] = useState(0)

    const selectedEvent = events.find((event) => event.eventId === selectedEventId)

    if (!selectedEvent) {
        return <div>Event not found</div>
    }

    const handleIncrement = () => {
        setQuantity(quantity + 1)
    }

    const handleDecrement = () => {
        if(quantity > 0) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <AnimatedFadeInPage>
            <div className={styles.EventPage}>
                <header>
                    <span>
                        <img src={selectedEvent.eventPoster} alt={selectedEvent.eventTheme} className={styles.event__backdrop} />
                    </span>
                    <span className={styles.share_like}>
                        <img src={like} alt="like icon" />
                        <img src={share} alt="share icon" />
                    </span>
                </header>
                <section>
                    <TrendingCategories />
                </section>
                <section className={styles.selected_event_details}>
                    <span>
                        <h3>{selectedEvent.eventTheme}</h3>
                    </span>
                    <span className={styles.event_small_date}>
                        <p>{selectedEvent.eventDate}</p>
                    </span>
                    <span className={styles.selected_event_description}>{selectedEvent.eventDescription}</span>
                    <div className={styles.organizers_profile}>
                        <aside className={styles.organizers_bio}>
                            <span className={styles.organizers_photo}>
                                <img src={organizers} alt="organizers photo" />
                            </span>
                            <span>
                                <article className={styles.organizers_name}>{selectedEvent.eventOrganizers}</article>
                                <article className={styles.organizers_followers}>200 Followers</article>
                            </span>
                        </aside>
                        <aside className={styles.organizers_contact}>
                            <button className={styles.organizers_follow_button}>Follow</button>
                            <button className={styles.organizers_contact_button}>Contact</button>
                        </aside>
                    </div>
                    <div className={styles.participant_details}>
                        <span className={styles.registered_attendees}>50 registered attendees</span>
                        <span className={styles.participant_container}>
                            {selectedEvent.registeredParticipants.map((participant, index) => (
                                <div key={`participant-${index}`} className={styles.participant_name_pic}>
                                    <aside>
                                        <img src={participant.profile_picture} alt={participant.name} />
                                    </aside>
                                    <aside className={styles.participant_name}>{participant.name}</aside>
                                </div>
                            ))}
                        </span>
                    </div>
                    <div className={styles.event_timestamp}>
                        <span className={styles.timestamp_container}>
                            <article className={styles.event_date_title}>Event Date And Time</article>
                            <article className={styles.event_date}>{selectedEvent.eventDate}</article>
                            <article className={styles.event_date}>10am-12pm WAT</article>
                        </span>
                        <span className={styles.timestamp_container}>
                            <article className={styles.event_venue}>Event Location</article>
                            <article className={styles.event_address}>20, Adesanya street, Lekki, Victoria Island , Lagos.</article>
                        </span>
                    </div>
                    <div className={styles.ticket_quantity}>
                        <div className={styles.quantity_container}>
                            <span className={styles.general_admission}>General Admission: <b>{selectedEvent.eventCategory}</b></span>
                            <aside style={{display: 'flex', justifyContent: 'space-between', gap: '29px'}}>
                                <button className={styles.decrease_btn} onClick={handleDecrement}>-</button>
                                <span style={{color: 'black', fontFamily: 'Montserrat', fontSize: '32px', fontWeight: '700'}}>{quantity}</span>
                                <button className={styles.increase_btn} onClick={handleIncrement}>+</button>
                            </aside>
                        </div>
                    </div>
                    <div className={styles.get_ticket}>
                        {/* <button>
                            
                        </button> */}
                        <Link to={`/ticket-info/${eventId }`}>
                            <button>Get Ticket</button> 
                        </Link>
                    </div>
                </section>
            </div>
        </AnimatedFadeInPage>
    )
}
export default Event