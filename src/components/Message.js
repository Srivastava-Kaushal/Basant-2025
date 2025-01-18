import React from "react";
import styles from "./Message.module.scss";
import cx from "classnames";
import { BasantMessageData } from "../data/data";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MessageCard = ({ department, img, message, name, role, isEven }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  const imageVariants = {
    hidden: { 
      x: isEven ? -100 : 100, 
      opacity: 0 
    },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const textVariants = {
    hidden: { 
      x: isEven ? 100 : -100, 
      opacity: 0 
    },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2
      }
    }
  };

  return (
    <div
      ref={ref}
      className={cx(
        styles.container,
        !isEven ? styles.reverse : styles.normal
      )}
    >
      <motion.div
        className={styles.introContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={imageVariants}
      >
        <div className={styles.imageContainer}>
          <img src={img || "/placeholder.svg"} alt={role} className={styles.roundedCircle} />
        </div>
        <div className={styles.detailsContainer}>
          <h5 align="center">
            <b style={{ fontWeight: "700" }}>{name}</b>
            <br />
            <i style={{ fontWeight: "200" }}>{role}</i>
            <br />
            <small style={{ fontWeight: "200" }}>{department}</small>
            <br />
          </h5>
        </div>
      </motion.div>

      <motion.div
        className={styles.textContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={textVariants}
      >
        <span>{message}</span>
        <NavLink to="/about-us" className={styles.readMoreButton}>
          Read More
        </NavLink>
      </motion.div>
    </div>
  );
};

const Message = () => {
  return (
    <article style={{ display: "flex" }} className={styles.message}>
      <div style={{ flex: "0 0 100%" }}>
        {BasantMessageData.map((messageData, idx) => (
          <MessageCard 
            key={idx} 
            {...messageData} 
            isEven={idx % 2 === 0}
          />
        ))}
      </div>
    </article>
  );
};

export default Message;

