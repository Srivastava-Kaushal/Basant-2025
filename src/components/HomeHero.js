import React, { useState, useEffect } from "react";
import styles from "./HomeHero.module.scss";
import basantLogo from "../media/logo/BASANT_LOGO.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";


const HomeHero = () => {
  const controls = useAnimation();
  const [welcomeKey, setWelcomeKey] = useState(0);
  
  const { ref: welcomeTextRef, inView: welcomeTextInView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  const { ref: poemRef, inView: poemInView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  const [displayedText, setDisplayedText] = useState("");
  const text =" As we welcome the esteemed 1975 batch of IIT (ISM), Dhanbad back to their alma mater, we, the students, are honored to be part of this monumental occasion. Fifty years since their journey began, this reunion is more than a celebration—it's a tribute to the friendships, dreams, and unforgettable moments that shaped their lives. Basant-2025 is our way of reliving those golden days through your stories, experiences, and shared memories. It's a time for you to reconnect, reminisce, and inspire the generations that followed in your footsteps. We are thrilled to celebrate this incredible milestone with you, to honor the legacy of your batch, and to witness the timeless spirit of camaraderie that continues to define the IIT (ISM) family. Welcome home, dear alumni, as we create memories together that bridge the past and the present. ";

  const { ref, inView } = useInView({
    threshold: 0.2, 
    triggerOnce: false, 
  });

  useEffect(() => {
    if (inView) {
      let index = 0;
      setDisplayedText(""); 
      console.log(index);
      const interval = setInterval(() => {
        if (index < text.length-1) {
          setDisplayedText((prev) => prev + text[index]);
          index++;
        } else {
          console.log("2nd",index);
          clearInterval(interval);
        }
      }, 10);
      return () => clearInterval(interval);
    }
  }, [inView]);  

  useEffect(() => {
    if (poemInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, poemInView]);

  const animatedLines = [
    "Fifty years of memories, cherished and bright,",
    "We reunite once more under the festive light.",
    "Basant-2025, where old friends meet,",
    "To relive the moments that time can't beat."
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <article className={styles.container}>
      {/* Basant Hero Section */}
      <div className={styles.basantContainer}>
        <div className={styles.textContainer} ref={welcomeTextRef}>
          <h1 className={styles.title}>BASANT 2025</h1>
          <p key={welcomeKey} className={styles.homeHeroDesc} ref={ref}>
            {displayedText}
          </p>
        </div>
        <div className={styles.imageContainer}>
          <img
            className={styles.homeHeroimg}
            src={basantLogo || "/placeholder.svg"}
            alt="Basant Logo"
          />
        </div>
      </div>

      {/* Animated Text Section */}
      <div
        className={styles.iiiContainer}
        ref={poemRef}
        style={{ background: "none", padding: 0 }}
      >
        <motion.div
          className={styles.textContainer}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {animatedLines.map((line, index) => (
            <motion.h1
              key={index}
              className={styles.animatedText}
              variants={itemVariants}
            >
              {line}
            </motion.h1>
          ))}
        </motion.div>
      </div>
    </article>
  );
};

export default HomeHero;

