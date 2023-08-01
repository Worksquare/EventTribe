import styles from "../Styles/SearchCategories.module.scss";
import { filter_icon } from '../../../assets/images'

const SearchCategories = () => {
  return (
    <section className={styles.SearchCategories}>
      <div className={styles.search__event__input}>
        <label htmlFor="search">
          <input type="text" placeholder="search" />
        </label>
        <span>
          <img src={filter_icon} alt="filter icon" />
        </span>
      </div>
      <div className={styles.trending__categories}>
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
    </section>
  );
};

export default SearchCategories;
