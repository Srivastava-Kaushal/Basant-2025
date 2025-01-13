import { NavLink } from "react-router-dom";
import cx from "classnames";
import styles from "../styles/Home.module.scss";

import { ReactComponent as ScheduleIcon } from "../media/icons/schedule.svg";
import { ReactComponent as LinkIcon } from "../media/icons/link.svg";
import Carousel from "../components/Carousel";
import HighlightCard from "../components/HighlightCard";

import { BasantEvents, events, highlights, technicalCoordinators } from "../data/data";
import { mainCoordinators, coordinators, professors } from "../data/data";
import Hero from "../components/Hero";
import { motion } from "framer-motion";
import ComingSoon from "../components/ComingSoon";
import HomeHero from "../components/HomeHero";
import { useState } from "react";
import Message from "../components/Message";

const tags = ["star night", "dj night", "cultural talk", "Rose day", "Poetry"];

const Home = ({ user }) => {
  const [comingSoon, setComingSoon] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <section
        className={cx(styles["intro-section"], styles["home-section"])}
        // style={{ borderBottom: "1px solid black" }}
      >
        <div className={styles["intro-bg"]}>
          <div className={styles.rail}>
            {tags.map((tag, i) => (
              <span key={i}>{tag} </span>
            ))}
          </div>
          <div className={styles.rail}>
            {tags.map((tag, i) => (
              <span key={i}>{tag} </span>
            ))}
          </div>
          {/* <div className={styles.rail}>
            {tags.map((tag, i) => (
              <span key={i}>{tag} </span>
            ))}
          </div> */}
        </div>
        <header
          className={cx(styles.introContent, styles.sectionHeader, "container")}
          style={{
            marginInline: "0px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          {/* <h2 className={styles.heading}>
            <span style={{ marginRight: "3ch" }}>BASANT & </span>
            <span className={styles._ar}>III</span>
          </h2>
          <p className={styles.subtitle}>
            Basant is the official alumni reunion of IIT (ISM) Dhanbad. The
            reunion is one of the most emotional times of the institute's
            calendar as the batch that had passed out 50 years back returns to
            the campus to reminisce about their old college memories.
          </p>
          <div className={styles["header-btn-wrapper"]}>
            <NavLink
              to="/gallery"
              className={cx("btn", styles["intro-header-btn"])}
            >
              <span
                className={cx("btn-subtitle", styles["intro-btn-subtitle"])}
              >
                Basant'23
              </span>
              <span className={cx("btn-text", styles["intro-btn-text"])}>
                Gallery
              </span>
              <LinkIcon />
            </NavLink>
          </div> */}
          <HomeHero />
        </header>
      </section>

      <section className={cx(styles["home-section"])}>
        <header className={cx(styles.sectionHeader, "container")}>
          <h2 className={styles.heading}>
            <span>Message</span>
          </h2>
        </header>
        <Message />
      </section>

      {comingSoon ? (
        <section
          style={{
            height: "120vh",
            backgroundColor: "#00070D",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ComingSoon theme="light" />
        </section>
      ) : (
        <>
          <section
            className={cx(
              styles["home-section"],
              "container",
              styles.highlights
            )}
          >
            <header className={styles.sectionHeader}>
              <h2 className={styles.heading}>
                <span>Highlights</span>
              </h2>
            </header>

            <main>
              <div className={styles.hlgallery}>
                {/* {highlights.map((id) => (
                  <HighlightCard user={user} key={id} {...events[id]} />
                ))}
                <div className={styles["btn-wrapper"]}>
                  <NavLink to="/events" className="btn">
                    <span className="btn-subtitle">Events</span>
                    <span className="btn-text">
                      Full Event
                      <br />
                      Schedule
                    </span>
                    <ScheduleIcon />
                  </NavLink>
                </div> */}
                {BasantEvents.map((events, idx) => (
                  <HighlightCard key={idx} events={events} />
                ))}
              </div>
            </main>
          </section>
        </>
      )}

      <section className={cx(styles["home-section"], styles.coordinators)}>
        <header className={cx(styles.sectionHeader, "container")}>
          <h2 className={styles.heading}>
            {/* <span style={{ marginRight: "3ch" }}>Our</span>
      <span className={styles._ar}>Team</span> */}
            Our Team
          </h2>
          <div
            className={cx(styles.subtitle, "container")}
            id="coordinatorsList"
          ></div>
        </header>
        <main>
          <div className="position" style={{ marginBottom: "20px" }}>
            <h2
              style={{
                color: "#3498db",
                fontSize: "2.4rem",
                fontWeight: "bold",
                marginBottom: "10px",
                marginLeft: "15px",
              }}
            >
              ORGANIZING COMMITTEE
            </h2>
          </div>
          <Carousel cardsList={professors} />

          <div className="position" style={{ marginBottom: "20px" }}>
            <h2
              style={{
                color: "#3498db",
                fontSize: "2.4rem",
                fontWeight: "bold",
                marginBottom: "10px",
                marginLeft: "15px",
              }}
            >
              STUDENT TEAM
            </h2>
          </div>
          <Carousel cardsList={mainCoordinators} />

          <div className="position" style={{ marginBottom: "20px" }}>
            <h2
              style={{
                color: "#3498db",
                fontSize: "2.4rem",
                fontWeight: "bold",
                marginBottom: "10px",
                marginLeft: "15px",
              }}
            >
              TECHNICAL HEADS
            </h2>
          </div>
          <Carousel cardsList={technicalCoordinators} />
        </main>
      </section>
    </motion.div>
  );
};

export default Home;
