import styles from "./home.module.css"
import Image from "next/image";

const Home = () => {
  return <div className={styles.container}> 
  <div className={styles.textContainer}>
    <h1>Creative Thoughts Agency</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac ligula sapien. Proin vitae eleifend tellus, eu molestie odio. Etiam ultrices euismod ligula, ut fermentum risus elementum ac. </p>
    <div className={styles.buttons}>
    <button className={styles.button}>Learn More</button>
    <button className={styles.button}>Contact</button>
    </div>
    <div className={styles.brands}>

    </div>
    
    <Image src="/brands.png" alt="" fill className={styles.brandImg} />
  </div>
  <div className={styles.imgContainer}>
    <Image src="hero.gif" fill className={styles.heroImg}  />
   </div>
  </div>;
};

export default Home;