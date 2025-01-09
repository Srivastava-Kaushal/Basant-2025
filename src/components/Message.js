import React from "react";
import styles from "./Message.module.scss";
import cx from "classnames";
import { BasantMessageData, IiiMessageData } from "../data/data";
import { NavLink } from "react-router-dom";

const Message = () => {
  return (
    <article style={{ display: "flex" }} className={styles.message}>
      <div style={{ flex: "0 0 100%" }}>
  {BasantMessageData.map(
    ({ department, img, message, name, role }, idx) => (
      <div
        className={cx(
          styles.container,
          idx % 2 !== 0 ? styles.reverse : styles.normal // Add a class for diagonal layout
        )}
        key={idx}
      >
        <div className={styles.introContainer}>
          <div className={styles.imageContainer}>
            <img src={img} alt={role} className={styles.roundedCircle} />
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
        </div>
        <div className={styles.textContainer}>
          <span>{message}</span>
          <NavLink to="/about-us" className={styles.readMoreButton}>
            Read More
          </NavLink>
        </div>
      </div>
    )
  )}
</div>

      {/* <div>
        {IiiMessageData.map(
          ({ department, img, message, name, role }, idx) => (
            <div
              className={cx(
                styles.container,
                idx % 2 !== 0 ? styles.reverse : ""
              )}
              key={idx}
            >
              <div className={styles.introContainer}>
                <div className={styles.imageContainer}>
                  <img src={img} alt={role} className={styles.roundedCircle} />
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
              </div>
              <div className={styles.textContainer}>
                <span>{message}</span>
                <NavLink to="/about-us" className={styles.readMoreButton}>
                  Read More
                </NavLink>
              </div>
            </div>
          )
        )}
      </div> */}
    </article>
  );
};

export default Message;
