import styles from "./Styles/TrendingCategories.module.scss"
const TrendingCategories = () => {
    return (
        <div className={styles.TrendingCategories}>
            <><h3>Trending Categories Of Events</h3></>
            <main>
            <input type="checkbox" id="all-checkbox" />
            <label htmlFor="all-checkbox">All</label>

            <input type="checkbox" id="music-checkbox" />
            <label htmlFor="music-checkbox">Music</label>

            <input type="checkbox" id="conferences-checkbox" />
            <label htmlFor="conferences-checkbox">Conferences</label>

            <input type="checkbox" id="gospel-checkbox" />
            <label htmlFor="gospel-checkbox">Gospel</label>

            <input type="checkbox" id="holiday-checkbox" />
            <label htmlFor="holiday-checkbox">Holiday</label>

            <input type="checkbox" id="business-checkbox" />
            <label htmlFor="business-checkbox">Business</label>
            
            <input type="checkbox" id="health-checkbox" />
            <label htmlFor="health-checkbox">Health</label>
            </main>
        </div>
    )
}
export default TrendingCategories