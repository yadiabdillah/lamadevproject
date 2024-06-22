import styles from "./contact.module.css"

const contactPage = () => {
    return 
    <div className={styles.container}>
      <div className={styles.imgContainer}>
      <Image src="contact.png" alt="" fill />
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name And Surname" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number" />
        </form>
      </div>
      </div>;
  };
  
  export default contactPage;