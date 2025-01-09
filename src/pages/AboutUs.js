import styles from "../styles/Home.module.scss";
import stylesB from "../styles/AboutUs.module.scss";
import cx from "classnames";
import { BasantMessageData, IiiMessageData } from "../data/data";
// import { convenor } from "/media/coordinators/joni.jpg";

const AboutUs = () => {
  return (
    <div>
      <header
        className={cx("page-header", styles["page-header"], stylesB.center)}
      >
        <h1 className={stylesB.heading}>
          <span>About Us</span>
        </h1>
      </header>

      {/* <h3 className={stylesB.subHeading}>
        <span>III 2024</span>
      </h3> */}
      {/* {IiiMessageData.map(
        ({ department, img, message, name, role }, idx) => (
          <section className={stylesB.container} id="convenor" key={idx}>
            <h3 className={stylesB.title}>
              <span>{idx === 0 ? "Convenor" : "Co-Convenor"}'s Message</span>
            </h3>
            <div className={stylesB.introContainer}>
              <div className={stylesB.imageContainer}>
                <img src={img} alt={role} className={stylesB.roundedCircle} />
              </div>
              <div className={stylesB.detailsContainer}>
                <h5 align="center">
                  {name}
                  <br />
                  {role}
                  <br />
                  {department} <br />
                </h5>
              </div>
            </div>
            <div className={stylesB.textContainer}>{message}</div>
          </section>
        )
      )} */}
      <h3 className={stylesB.subHeading}>
        <span>Basant 2024</span>
      </h3>
      {BasantMessageData.map(
        ({ department, img, message, name, role }, idx) => (
          <section className={stylesB.container} id="convenor" key={idx}>
            <h3 className={stylesB.title}>
              <span>{idx === 0 ? "Convenor" : "Co-Convenor"}'s Message</span>
            </h3>
            <div className={stylesB.introContainer}>
              <div className={stylesB.imageContainer}>
                <img src={img} alt={role} className={stylesB.roundedCircle} />
              </div>
              <div className={stylesB.detailsContainer}>
                <h5 align="center">
                  {name}
                  <br />
                  {role}
                  <br />
                  {department} <br />
                </h5>
              </div>
            </div>
            <div className={stylesB.textContainer}>{message}</div>
          </section>
        )
      )}
    </div>
  );
};

export default AboutUs;
