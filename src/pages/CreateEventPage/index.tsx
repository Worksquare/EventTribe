import styles from './CreateEvent.module.scss'
import { AnimatedFadeInPage } from "../../utils"
import { add_event_img, search } from '../../assets/images'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useState } from 'react'

const CreateEvent = () => {
    const [startDate, setStartDate] = useState<Date | null>(null)
    const [startTime, setStartTime] = useState('')
    const [endDate, setEndDate] = useState<Date | null>(null)
    const [endTime, setEndTime] = useState('')

    return (
        <>
            <AnimatedFadeInPage>
                <main className={styles.CreateEventPage}>
                    <header>
                        <h2>What's your event like?</h2>
                    </header>
                    <form>
                        <div className={styles.event_image_container}>
                            <div className={styles.input_container}>
                                <input type="file" className={styles.file_input} />
                            </div>
                            <img
                                src={add_event_img}
                                alt="add image"
                                className={styles.image_placeholder}
                            />
                        </div>
                        <div className={styles.input_div}>
                            <label htmlFor='event-title'>
                                <span>Event Title</span>
                                <input type='text' className={styles.event_title} />
                            </label>
                            <label htmlFor='event-description'>
                                <span>Event Description</span>
                                <textarea rows={10} cols={50} className={styles.event_description} />
                            </label>
                            <label htmlFor='category'>
                                <span>Choose a Category</span>
                                <select 
                                    placeholder='Select Category'
                                    className={styles.event_category}
                                >
                                    <option value="music">Music</option>
                                    <option value="conference">Conference</option>
                                    <option value="gospel">Gospel</option>
                                    <option value="holiday">Holiday</option>
                                    <option value="business">Business</option>
                                    <option value="health">Health</option>
                                </select>
                            </label>
                            <label>
                                <span>Location <b style={{color: "#F24E1E", height: "8px", width: "6.67px"}}>*</b></span>
                                <aside>
                                    <input type="radio" id="all-radio" name="radio-group" />
                                    <label htmlFor="all-radio" className={styles.label}>All</label>

                                    <input type="radio" id="music-radio" name="radio-group" />
                                    <label htmlFor="music-radio" className={styles.label}>Music</label>

                                    <input type="radio" id="conferences-radio" name="radio-group" />
                                    <label htmlFor="conferences-radio" className={styles.label}>Conferences</label>
                                </aside>
                            </label>
                            <label htmlFor='event-location' className={styles.event_location}>
                                <span>Event Location</span>
                                <img src={search} alt='search icon' />
                                <input type='search' placeholder='Search for a venue or address' className={styles.event_location_input} />
                            </label>
                            <label>
                                <span>Date & Time</span>
                                <div>
                                    <section style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '40px'}}>
                                        <DatePicker
                                            selected={startDate}
                                            onChange={(date) => setStartDate(date)}
                                            selectsStart
                                            startDate={startDate}
                                            endDate={endDate}
                                            placeholderText='Event start date'
                                            className={styles.date_picker}
                                        />
                                        <div>
                                            <input
                                                type="time"
                                                value={startTime}
                                                onChange={(e) => setStartTime(e.target.value)}
                                                // placeholder='Start time'
                                                className={styles.time_picker}
                                            />
                                        </div>
                                    </section>
                                    <section style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '40px'}}>
                                        <DatePicker
                                            selected={endDate}
                                            onChange={(date) => setEndDate(date)}
                                            selectsEnd
                                            startDate={startDate}
                                            endDate={endDate}
                                            minDate={startDate}
                                            placeholderText='Event End Date'
                                            className={styles.date_picker}
                                        />
                                        <div>
                                            <input
                                                type="time"
                                                value={endTime}
                                                onChange={(e) => setEndTime(e.target.value)}
                                                placeholder='End Date'
                                                className={styles.time_picker}
                                            />
                                        </div>
                                    </section>
                                </div>
                                <div className={styles.display_time_container}>
                                    <section>
                                        <input type='checkbox' className={styles.display_time} />
                                    </section>
                                    <section>
                                        <h6>Display TIme</h6>
                                        <p>The start time of your event will be displayed to attendees.</p>
                                    </section>
                                </div>
                            </label>
                            <label htmlFor='event-instructions'>
                                <span>Add Instructions For Attendees</span>
                                <textarea rows={10} cols={50} className={styles.event_description} />
                            </label>
                            <main className={styles.submit_button}>
                                <button>Submit</button>
                            </main>
                        </div>
                    </form>
                    <footer>
                        <p>This site is protected by  reCAPTCHA . Terms Of Service  and Privacy Policy apply</p>
                    </footer>
                </main>
            </AnimatedFadeInPage>
        </>
    )
}
export default CreateEvent