import styles from "./CheckoutPage.module.scss"
import { useNavigate, useParams } from "react-router-dom"
import { AnimatedFadeInPage } from "../../utils"
import { events } from "../../data/events"
import { edit } from "../../assets/images"

const CheckoutPage = () => {
    const navigate = useNavigate()
    const { eventId } = useParams()
    const selectedEventId = eventId
    const selectedEvent = events.find((event) => event.eventId === selectedEventId)
    console.log(selectedEvent)

    return (
        <>
            <AnimatedFadeInPage>
                <main className={styles.CheckoutPage}>
                    <header>
                        <h4>Checkout</h4>
                        <h2>{selectedEvent?.eventTheme}</h2>
                        <p>General Information</p>
                    </header>
                    <section>
                        <article className={styles.contact_info}>
                            <span><h5>Contact Information</h5></span>
                            <span style={{ cursor: 'pointer'}}><p>Edit <img src={edit} alt="edit" /></p></span>
                        </article>
                        <article>
                            <span><h5>First Name</h5></span>
                            <span><p>Tribe</p></span>
                        </article>
                        <article>
                            <span><h5>Last Name</h5></span>
                            <span><p>Square</p></span>
                        </article>
                        <article>
                            <span><h5>Email</h5></span>
                            <span><p>Tribesquare@gmail.com</p></span>
                        </article>
                        <article>
                            <span><h5>Delivery Method</h5></span>
                            <span><p>E-Ticket</p></span>
                        </article>
                        <article>
                            <span><h5>Ticket Number</h5></span>
                            <span><p>2234867961</p></span>
                        </article>
                        <article>
                            <span><h5>Event Information</h5></span>
                            <span>
                                <p>{selectedEvent?.eventDate}</p>
                                <p style={{ marginTop: '5px'}}>{selectedEvent?.eventCategory}</p>
                            </span>
                        </article>
                        <div>
                            <button className={styles.print_ticket} onClick={() => navigate(`/event/${eventId}/ticket_printout`)}>Print Ticket</button>
                            <button className={styles.cancel_order} onClick={() => navigate(-1)}>Cancel Order</button>
                            <button className={styles.contact_org} onClick={() => {}}>Contact Organizer</button>
                        </div>
                    </section>
                </main>
            </AnimatedFadeInPage>
        </>
    )
}
export default CheckoutPage