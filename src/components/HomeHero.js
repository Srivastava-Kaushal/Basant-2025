import React from "react";
import styles from "./HomeHero.module.scss";
import basantLogo from "../media/logo/BASANT_LOGO.png";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const HomeHero = () => {
  const controls = useAnimation();
  const { ref: animatedTextRef, inView: animatedTextInView } = useInView({
    threshold: 0.2,
  });

  React.useEffect(() => {
    if (animatedTextInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, animatedTextInView]);

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
        <div className={styles.textContainer}>
          <h1 className={styles.title}>BASANT 2025</h1>
          <p className={styles.homeHeroDesc}>
            Basant-2025, a grand celebration of the 1975 batch of IIT (ISM),
            Dhanbad! After fifty years, we gather once again to relive the
            cherished memories of our college days. This reunion is not just an
            event, but a heartfelt journey back to where friendships were born
            and dreams began. It's a chance to reconnect, celebrate the bonds
            we've shared, and create new memories together. We look forward to
            welcoming you with open arms, as we honor the legacy of our batch
            and the timeless spirit of camaraderie that unites us all.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <img
            className={styles.homeHeroimg}
            src={basantLogo}
            alt="Basant Logo"
          />
        </div>
      </div>

      {/* Animated Text Section */}
      <div
        className={styles.iiiContainer}
        ref={animatedTextRef}
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

