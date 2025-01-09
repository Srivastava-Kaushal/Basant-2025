import React from "react";
import styles from "./HomeHero.module.scss";
import basantLogo from "../media/logo/BASANT_LOGO.png";

const HomeHero = () => {
  return (
    // <div className={styles.heroSection}>
    //   <div className={styles.textContainer}>
    //     <h1>
    //       <span>BASANT&III</span>
    //       <span>2024</span>
    //     </h1>
    //     <p>
    //       Basant is the official alumni reunion of IIT (ISM) Dhanbad. The
    //       reunion is one of the most emotional times of the institute's calendar
    //       as the batch that had passed out 50 years back returns to the campus
    //       to reminisce about their old college memories.
    //     </p>
    //     <div className={styles.imageContainer2}>
    //       <img src="./media/Logo_Colour.png" alt="Hero Image" />
    //     </div>
    //     <button>Register</button>
    //   </div>
    //   <div className={styles.imageContainer}>
    //     <img src="./media/Logo_Colour.png" alt="Hero Image" />
    //   </div>
    // </div>
    <article className={styles.container}>
      <div className={styles.basantContainer}>
        <div className={styles.textContainer}>
        {/* <h1><p>Fifty years of memories, cherished and bright,
We reunite once more under the festive light.
Basant-2025, where old friends meet,
To relive the moments that time can't beat.
</p></h1> */}
          <h1 className={styles.title}>BASANT 2025</h1>
          <p className={styles.homeHeroDesc}>
           Basant-2025, a grand celebration of the 1975 batch of IIT (ISM), Dhanbad! After fifty years, we gather once again to relive the cherished memories of our college days. This reunion is not just an event, but a heartfelt journey back to where friendships were born and dreams began. It’s a chance to reconnect, celebrate the bonds we've shared, and create new memories together. We look forward to welcoming you with open arms, as we honor the legacy of our batch and the timeless spirit of camaraderie that unites us all. 
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
      <div className={styles.iiiContainer}>
        <div className={styles.textContainer}>
        <div>
          <h1>Fifty years of memories, cherished and bright,</h1>
          <h1>We reunite once more under the festive light.</h1>
          <h1>Basant-2025, where old friends meet,</h1>
          <h1>To relive the moments that time can't beat.</h1>
        </div>
          
        </div>
        
      </div>
    </article>
  );
};

export default HomeHero;
