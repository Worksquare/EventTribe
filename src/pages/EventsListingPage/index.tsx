import styles from "./EventsListingPage.module.scss"
import { AnimatedFadeInPage } from "../../utils"
import { Events, TrendingCategories } from "./Components"

const EventsListing = () => {
    return (
        <>
            <AnimatedFadeInPage>
                <main className={styles.EventsListingPage}>
                    <TrendingCategories />
                    <Events />
                </main>
            </AnimatedFadeInPage>
        </>
    )
}
export default EventsListing