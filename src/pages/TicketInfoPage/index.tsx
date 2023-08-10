import { events } from "../../data/events";
import { AnimatedFadeInPage, routePaths } from "../../utils";
import styles from "./TicketInfoPage.module.scss";
import { Link,useParams } from "react-router-dom";

const TicketInfoPage = () => {
   const { eventId } = useParams()
   console.log(eventId)
    const selectedEventId = eventId
  //   // const [quantity, setQuantity] = useState(0)

   const selectedEvent = events.find((event) => event.eventId === selectedEventId)
console.log(selectedEvent)
  //   if (!selectedEvent) {
  //       return <div>Event not found</div>
  //   }
  return (
    <>
      <AnimatedFadeInPage>
        <main>
        
          <div className={styles.TicketInfoPage}>
            <form>
              <h4>Your Information</h4>
              {/* <h6>TedX 2023 (Explore The Future Of Tech)</h6> */}
              <h6>{selectedEvent?.eventTheme}</h6>
              <div className={styles.attendees_name}>
                <p>
                  Attendee Name <span>*</span>
                </p>
                <input type="text" placeholder="first name" />
                <input type="text" placeholder="last name" />
              </div>
              <div className={styles.email_container}>
                <p>
                  Email <span>*</span>
                </p>
                <input type="email" placeholder="Email address" />
              </div>
              <div className={styles.username_container}>
                <p>
                  Username <span>*</span>
                </p>
                <input type="email" placeholder="Username" />
              </div>
              <div className={styles.checkbox_container}>
                <input type="checkbox" name="" id="" />
                <span>Let me know about more events from CodeAmbassadors</span>
              </div>
              <div className={styles.table_container}>
                <table>
                  <thead>
                    <td>Ticket Info</td>
                  </thead>
                  <tbody>
                    <tr>
                      <td>price:</td>
                      <td className={styles.span_thick}>
                        <span>Free</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Qty:</td>
                      <td className={styles.span_thick}>1</td>
                    </tr>
                    <hr />
                    <tr className={styles.table_total}>
                      <td>Total:</td>
                      <td className={styles.span_thick}>0.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h6 className={styles.terms_condition}>
                By continiung , you agree to{" "}
                <span> our Terms & Conditions Of Service</span>
              </h6>
              <div className={styles.info_ticket_btn}>
                <button type="submit" className={styles.continue_btn}>
                  continue
                </button>
                <Link to={`${routePaths.CREATE_EVENT}`}>
                  <button className={styles.back_btn}>Back</button>
                </Link>
              </div>
            </form>
          </div>
        </main>
      </AnimatedFadeInPage>
    </>
  );
};

export default TicketInfoPage;
