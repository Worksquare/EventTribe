import styles from "./TicketPrintoutPage.module.scss"
import { AnimatedFadeInPage } from "../../utils"
import { qr, tribe_event_icon } from "../../assets/images"
import { useParams } from "react-router-dom"
import { events } from "../../data/events"

const TicketPrintOutPage = () => {
    // const navigate = useNavigate()
    const { eventId } = useParams()
    const selectedEventId = eventId
    const selectedEvent = events.find((event) => event.eventId === selectedEventId)
    console.log(selectedEvent)

    return (
        <AnimatedFadeInPage>
            <main className={styles.TicketPrintOutPage}>
                <header>
                    <h2>Checkout</h2>
                </header>
                <section>
                    <div className={styles.ticket_no}>
                        <span>
                            <img src={tribe_event_icon} alt="tribe event logo" />
                        </span>
                        <span style={{whiteSpace: 'nowrap'}}>
                            <h6>Ticket Number:</h6> <p>2234867961</p>
                        </span>
                    </div>
                    <div className={styles.print_box}>
                        <div className={styles.print_title}>
                            <aside>
                                <span><h4>{selectedEvent?.eventTheme}</h4></span>
                            </aside>
                            <aside>
                                <img src={selectedEvent?.eventPoster} alt={selectedEvent?.eventTheme} />
                            </aside>
                        </div>
                        <article>
                            <span><h5>Admission</h5></span>
                            <span><p>Online</p></span>
                        </article>
                        <article>
                            <span><h5>Date</h5></span>
                            <span><p>{selectedEvent?.eventDate}</p></span>
                        </article>
                        <article>
                            <span><h5>Price</h5></span>
                            <span><p>{selectedEvent?.eventCategory}</p></span>
                        </article>
                        <article>
                            <span><h5>Event Information</h5></span>
                            <span>
                                <p>{selectedEvent?.eventDate}</p>
                                <p>Online</p>
                            </span>
                        </article>
                    </div>
                    <div className={styles.print_footer}>
                        <div>
                            <img src={qr} alt="qr code" />
                        </div>
                        <div className={styles.organizing_event}>
                            <span>
                                <h1>Are you organizing an event?</h1>
                            </span>
                            <span style={{maxWidth: '286px'}}>
                                <b>Organize and sell your tickets on EventTribe </b>
                            </span>
                            <span>
                                <strong>www.eventribe.com</strong>
                            </span>
                        </div>
                    </div>
                </section>
                <footer>
                    <button>Send to mail</button>
                </footer>
            </main>
        </AnimatedFadeInPage>
    )
}
export default TicketPrintOutPage