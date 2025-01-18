import { useEffect, useState } from "react";
import CountdownTimer from "./CountdownTimer";
import { eventStartDate } from "../data/data";
import { ReactComponent as ScrollDownIcon } from "../media/icons/down.svg";
import HeroVideo from "../media/ism3.mp4";
import HeroImage from "../media/hero-image.png";
import styles from "./Hero.module.scss";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ReactPlayer from 'react-player/vimeo';
const Hero = () => {
  const [isLive, setIsLive] = useState(false);

  const AnimatedText = () => {
    const text = "BASANT '25"; // The text to animate
    const letters = text.split(""); // Split the text into individual characters

    // Use the useInView hook to track when the component is in view
    const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });

    // Animation variants for the letters
    const letterVariants = (index) => ({
      hidden: {
        opacity: 0,
        y: -50, // Start position (above the view)
      },
      visible: {
        opacity: 1,
        y: 0, // End position (original position)
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 20,
          delay: index * 0.1, // Delay increases with the index
        },
      },
    });

    return (
      <div
        ref={ref}
        className={styles["animated-text"]}
      >
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            className={styles.letter}
            variants={letterVariants(index)} // Pass index to the function
            initial="hidden"
            animate={inView ? "visible" : "hidden"} // Trigger animation when in view
            style={{ display: "inline-block", margin: "0 5px" }} // Adjust spacing
          >
            {letter}
          </motion.span>
        ))}
      </div>
    );
  };

  return (
    <div className={styles.hero} id="hero">
      <div className={styles.grain}></div>
      <div className={styles["hero-bg"]}>
        <ReactPlayer
          url="https://vimeo.com/1047880625/44fc4c7289"
          className={styles["hero-video"]}
          controls={true} // Set to false for a cleaner hero experience
          playing
          muted
          loop // Loop the video for continuous playback
        />
      </div>
      <div className={styles.content}>
        <h1 className={styles.logo}>
          {AnimatedText()}

        </h1>
      </div>
      <div className={styles.countdown}>

{!isLive && (
  <div className={styles.timer}>
    <p>The countdown begins!</p>
    <CountdownTimer
      countdownDate={eventStartDate}
      handleTimerComplete={setIsLive}
    />
  </div>
)}
</div>
      <div className={styles.scrollDown} aria-hidden="true">
        <ScrollDownIcon />
      </div>
    </div>
  );
};

export default Hero;