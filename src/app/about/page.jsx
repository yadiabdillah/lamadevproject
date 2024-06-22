import Image from "next/image";
import styles from "./about.module.css"
const aboutPage = () => {
    return (<div>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2 className={styles.subtitle}>About Agency</h2>
          <h1 className={styles.title}>We Create Digital Ideas That Are Bigger, Bolder, Braver and Better</h1>
          <p className={styles.desc}>
          Lorem ipsum dolor sit amet,
           consectetur adipiscing elit. Vestibulum in posuere orci. Integer massa elit, placerat ut eros et, eleifend iaculis metus. Mauris quis aliquet diam. Aliquam ante velit, sagittis non aliquam eget, egestas ut massa. In tempor hendrerit laoreet. Suspendisse ex enim, aliquam quis pulvinar eget, condimentum ut nisi. Aliquam vehicula lacus vel ligula eleifend volutpat. Nullam at rutrum nunc. Duis suscipit congue lectus id tristique. Aliquam id mauris iaculis, consectetur urna a, condimentum purus. Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
          </p>
          <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year Of Experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year Of Experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year Of Experience</p>
          </div>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image src="/about.png" alt="Picture Of The author" fill  className={styles.img}/>
        </div>
     </div>
    </div>
    );
  };
  
  export default aboutPage;