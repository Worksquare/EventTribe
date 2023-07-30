import styles from "./Footer.module.scss";
import {
  event_tribe_location,
  instagram_icon,
  twitter_icon,
  facebook_icon,
} from "../../assets/images";
import { Link } from "react-router-dom";
import { routePaths } from "../../utils";

const Footer = () => {
  const getYear = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    return `© ${currentYear} Event Tribe`;
  };

  const plan_Events_links = [
    "Event Planning",
    "Sell Tickets Online",
    "Community Engagement",
    "QR Code For Event Check-In",
    "Post Your Event Online",
  ];

  const find_Events_links = [
    "Online Events",
    "Physical Events",
    "Events In Lagos Today",
    "Events in Abuja Today",
    "Upcoming Events",
  ];

  const quick_links = [
    "About Us",
    "Blog",
    "Careers",
    "FAQ’s",
    "Terms And Conditions",
  ];

  return (
    <>
      <footer className={styles.Footer}>
        <div className={styles.main_footer_content}>
          <div className={styles.tribe_location_details}>
            <img
              src={event_tribe_location}
              alt="event tribe location details"
              className={styles.tribe_location_details_image}
            />
            <Link
              className={styles.get_started_button}
              to={`${routePaths.SIGNUP}`}
            >
              Help/Support
            </Link>
          </div>

          <div className={styles.other_links}>
            <div className={styles.other_links_container_one}>
              <div className={styles.plan_events_container}>
                <h5>Plan Events</h5>
                {plan_Events_links.map((text) => {
                  return (
                    <p key={text} className={styles.text_link}>
                      {text}
                    </p>
                  );
                })}
              </div>
              <div className={styles.find_events_container}>
                <h5>Find Events</h5>
                {find_Events_links.map((text) => {
                  return (
                    <p key={text} className={styles.text_link}>
                      {text}
                    </p>
                  );
                })}
              </div>
            </div>
            <div className={styles.other_links_container_two}>
              <div className={styles.connect_with_us_container}>
                <h5>Connect With Us</h5>
                <div className={styles.link_container}>
                  <img
                    src={twitter_icon}
                    alt="Twitter Icon"
                    className={styles.text_link}
                  />
                  <p className={styles.text_link}>Twitter</p>
                </div>
                <div className={styles.link_container}>
                  <img
                    src={facebook_icon}
                    alt="Facebook Icon"
                    className={styles.text_link}
                  />
                  <p className={styles.text_link}>Facebook</p>
                </div>
                <div className={styles.link_container}>
                  <img
                    src={instagram_icon}
                    alt="Instagram Icon"
                    className={styles.text_link}
                  />
                  <p className={styles.text_link}>Instagram</p>
                </div>
              </div>
              <div className={styles.quick_links_container}>
                <h5>Quick Links</h5>
                {quick_links.map((text) => {
                  return (
                    <p key={text} className={styles.text_link}>
                      {text}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <p className={styles.footer_bottom_text}>{getYear()}</p>
      </footer>
    </>
  );
};

export default Footer;
