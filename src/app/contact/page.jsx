import styles from "./contact.module.css"
import Image from "next/image";

const contactPage = () => {
    return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
      <Image src="/contact.png" alt="" fill />
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name And Surname" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number" />
        <textarea name="" id="" cols="30" rows="10" placeholder="Messages"></textarea>
        <button className={styles.btnSend}>Send</button>
        </form>
      </div>
      </div>
  )};
  
  export default contactPage;