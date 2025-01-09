import ComingSoon from "../components/ComingSoon";
import styles from "../styles/Sponsors.module.scss";
import stylesB from "../styles/Home.module.scss";
import cx from "classnames";

const Events = () => {
  return (
    <section>
      <header
        className={cx("page-header", stylesB["page-header"])}
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <h1 className={styles.heading}>
          <span>Past Sponsors</span>
        </h1>
      </header>

      <div className={styles.container}>
        <h3 className={styles.subHeading}>
          <span>Gold Sponsors</span>
        </h3>

        <div className={styles.imgContainer}>
          <img
            src="./media/sponsers/coalindia.png"
            alt="Gold Sponsor"
            className={styles.coalImg}
          />
        </div>
      </div>

      <div className={styles.container}>
        <h3 className={styles.subHeading}>
          <span>Silver Sponsors</span>
        </h3>

        <div className={styles.imgContainer}>
          <img
            src="./media/sponsers/adani.png"
            alt="Silver Sponsor"
            className={styles.sponsorImg}
          />
          <img
            src="./media/sponsers/bccl.png"
            alt="Silver Sponsor"
            className={styles.sponsorImg}
          />
        </div>
      </div>

      <div className={styles.container}>
        <h3 className={styles.subHeading}>
          <span>Bronze Sponsors</span>
        </h3>

        <div className={styles.imgContainer}>
          <img
            src="./media/sponsers/tata.png"
            alt="Bronze Sponsor"
            className={styles.sponsorImg}
          />
          <img
            src="./media/sponsers/secl.png"
            alt="Bronze Sponsor"
            className={styles.sponsorImg}
          />
          <img
            src="./media/sponsers/essar.png"
            alt="Bronze Sponsor"
            className={styles.sponsorImg}
          />
        </div>
      </div>

      <div className={styles.container}>
        <h3 className={styles.subHeading}>
          <span>Advertisers</span>
        </h3>

        <div className={styles.imgContainer}>
          <img
            src="./media/sponsers/sail.png"
            alt="Advertisers"
            className={styles.sponsorImg}
          />
          <img
            src="./media/sponsers/ongc.png"
            alt="Advertisers"
            className={styles.sponsorImg}
          />
        </div>
      </div>
    </section>
  );
};

export default Events;
