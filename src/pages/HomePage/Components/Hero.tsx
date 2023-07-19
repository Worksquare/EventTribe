import React, { useState, useEffect } from 'react';
import styles from '../Styles/Hero.module.scss';
import { hero_right_panel, hero_slide1, hero_slide2, hero_slide3, hero_slide4 } from '../../../assets/images';

const Hero = () => {
  const [content, setContent] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  const contentItems = [
    {
      text: ['Create', 'Unforgettable', 'Event Memories'],
      image: hero_right_panel,
    },
    {
      text: ['Unleash the power', 'Of Extraordinary', 'Events'],
      image: hero_slide1,
    },
    {
      text: ['Control Your Events', 'Schedule And', 'Marketing'],
      image: hero_slide2,
    },
    {
      text: ['Experience The', 'Magic Of', 'Memorable Events'],
      image: hero_slide3,
    },
    {
      text: ['Revolutionize Your', 'Events Experience'],
      image: hero_slide4,
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false); // Start the fade-out animation

      setTimeout(() => {
        setContent((prevContent) => (prevContent + 1) % contentItems.length)
        setFadeIn(true) // Start the fade-in animation
      }, 500) // Wait for 500ms before updating the content and starting the fade-in animation
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className={styles.Hero}>
      <div className={`${styles.hero__left__panel} ${fadeIn ? styles.fadeIn : styles.fadeOut}`}>
        <span>
          {contentItems[content].text.map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index !== contentItems[content].text.length - 1 && <br />}
            </React.Fragment>
          ))}
          <button>Create Event</button>
        </span>
      </div>
      <div className={`${styles.hero__right__panel} ${fadeIn ? styles.fadeIn : styles.fadeOut}`}>
        <img src={contentItems[content].image} alt="Hero" />
      </div>
    </section>
  )
}
export default Hero;