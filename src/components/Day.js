import styles from "./Day.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Day = ({ images }) => {
  return (
    <div className={styles.container}>
      <Carousel>
        {images.map((image, idx) => (
          <div key={idx}>
            <img src={image.url} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Day;
