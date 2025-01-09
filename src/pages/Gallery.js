import styles from "../styles/Gallery.module.scss";
import cx from "classnames";
// import "react-html5video/dist/styles.css";
import { motion } from "framer-motion";
import ComingSoon from "../components/ComingSoon";

import Day from "../components/Day";
import { firstDayImages, secondDayImages } from "../data/data";

const Gallery = ({ user }) => {
  const Video = ({ embedId }) => {
    return (
      <div
        style={{
          overflow: "hidden",
          paddingBottom: "56.25%",
          position: "relative",
          height: "50vh",
        }}
      >
        <iframe
          style={{
            left: "6%",
            top: "18%",
            height: "65%",
            width: "90%",
            position: "absolute",
          }}
          width="653"
          height="280"
          src={`https://www.youtube.com/embed/${embedId}`}
          allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope; pictures-in-picture"
          allowFullScreen
          title="Embeded Youtube"
        />
      </div>
    );
  };

  return (
    <motion.div
      className={cx(styles.events, "page-transition", "container")}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      exit={{ scaleX: 0 }}
    >
      <header
        className={cx("page-header", styles["page-header"])}
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <h1 className={styles.heading}>
          <span>Gallery</span>
        </h1>
        {/* <div className={cx("subtitle", styles["header-subtitle"])}>
          <h2>Feb.3-4</h2>
          <div>Basant'23 </div>
        </div> */}
      </header>
      <main className={cx(styles["main-content"])}>
        {/* <div className={cx(styles["gallery"])}> */}
        <div style={{ marginBottom: "50px" }}>
          <div className={cx(styles["h1"])}>
            <h2>DAY 1</h2>
          </div>
          <Day images={firstDayImages} />
        </div>
        {/* </div> */}

        <hr style={{marginBottom:"20px"}}/>

        {/* <div className={cx(styles["gallery"])}> */}
        <div style={{ marginBottom: "50px" }}>
          <div className={cx(styles["h1"])}>
            <h2>DAY 2</h2>
          </div>
          <Day images={secondDayImages} />
        </div>
        {/* </div> */}
      </main>
    </motion.div>
  );
};

export default Gallery;
