import { useEffect, useState } from "react";
import CountdownTimer from "./CountdownTimer";
import { eventStartDate } from "../data/data";
import { ReactComponent as ScrollDownIcon } from "../media/icons/down.svg";
import HeroVideo from "../media/ism3.mp4";
import HeroImage from "../media/hero-image.png";
import styles from "./Hero.module.scss";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
        style={{
          display: "flex",
          justifyContent: "center", // Increased font size
          fontWeight: "bold",
        }}
      >
        {letters.map((letter, index) => (
  <motion.span
    key={index}
    className="shouldAnimate"
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

  // useEffect(() => {
  //   const navEl = document.getElementById('nav');
  //   const heroEl = document.getElementById('hero');
  //   const heroLogoLetters = document.querySelectorAll('.shouldAnimate');
  //   const coordinatorNames = document.getElementById('coordinatorsList');

  //   const parallaxAnimate = () => {
  //     // animate hero logo letters
  //     const offsetTop = heroLogoLetters[0].offsetTop;
  //     const speed = 0.04;
  //     for (let i = 0; i < heroLogoLetters.length; i++) {
  //       /** @type {HTMLElement} */
  //       let el = heroLogoLetters[i];
  //       const shift = Math.abs(3 - i) * speed * (offsetTop - el.getBoundingClientRect().top);
  //       el.style.transform = 'translate3d(0, ' + shift.toFixed(3) + 'px, 0)';
  //     }

  //     // parallax animate coordinators
  //     let coordNamesTopOffset = coordinatorNames.getBoundingClientRect().top;
  //     coordinatorNames.style.transform = 'translate3d(0, ' + speed * coordNamesTopOffset.toFixed(3) + 'px, 0)';
  //   }

  //   const observer = new IntersectionObserver(entries => {
  //     entries.forEach(entry => {
  //       if (entry.isIntersecting) {
  //         navEl.style.position = 'absolute';
  //         navEl.style.top = '100vh';
  //       } else {
  //         navEl.style.position = 'fixed';
  //         navEl.style.top = '0';
  //       }
  //     })
  //   })

  //   if (heroEl) observer.observe(heroEl);
  //   if (heroLogoLetters.length > 0) {
  //     window.addEventListener('scroll', parallaxAnimate);
  //   }

  //   return () => {
  //     window.removeEventListener('scroll', parallaxAnimate);
  //     observer.disconnect()
  //     navEl.style.position = 'fixed';
  //     navEl.style.top = '0';
  //   }
  // }, [])

  return (
    <div className={styles.hero} id="hero">
      {/* <img className={styles["hero-bg"]} src={HeroImage} alt="" /> */}
      <div className={styles.grain}></div>
      <video
        className={styles["hero-bg"]}
        autoPlay={true}
        muted={true}
        loop={true}
      >
        <source
          src="https://basant-bucket.s3.ap-southeast-2.amazonaws.com/Homevideo.mp4"
          type="video/mp4"
        />
      </video>
      {/* <img src="./media/HomeVideo.gif" className={styles["hero-bg"]} /> */}
      <div className={styles.content}>
        <h1 className={styles.logo}>
          {/* <span className="shouldAnimate">B</span>
          <span className="shouldAnimate">a</span>
          <span className="shouldAnimate">s</span>
          <span className="shouldAnimate">a</span>
          <span className="shouldAnimate">n</span>
          <span className="shouldAnimate">t</span>
          <span className="shouldAnimate">&</span>
          <span className="shouldAnimate">I</span>
          <span className="shouldAnimate">I</span>
          <span className="shouldAnimate">I</span> */}
          {AnimatedText()}
          
        </h1>

        {/* <div>
          <h1>Fifty years of memories, cherished and bright,</h1>
          <h1>We reunite once more under the festive light.</h1>
          <h1>Basant-2025, where old friends meet,</h1>
          <h1>To relive the moments that time can't beat.</h1>
        </div> */}

        <div className={styles.timeline}>
        
          {!isLive && (
            <>
              <p>The countdown begins!</p>
              <CountdownTimer
                countdownDate={eventStartDate}
                handleTimerComplete={setIsLive}
              />
            </>
          )}
        </div>
      </div>
      <div className={styles.scrollDown} aria-hidden="true">
        <ScrollDownIcon />
      </div>
    </div>
  );
};

export default Hero;
