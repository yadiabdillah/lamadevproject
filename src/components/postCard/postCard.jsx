import styles from "./postCard.module.css"
import Image from "next/image"
import Link from "next/link"

const PostCard = () =>{
    return (
        <div className={styles.container}>Postcard
        <div className={styles.top}>
            <div className={styles.imgContainer}>
                <Image src="https://images.pexels.com/photos/25588027/pexels-photo-25588027/free-photo-of-a-stone-column-with-a-carving-on-it.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill className={styles.image} />
            </div>
            <span className={styles.date}>01.01.2024</span>
        </div>
        <div className={styles.bottom}>
            <h1 className={styles.title}>Title</h1>
            <p className={styles.description}>description</p>
            <Link className={styles.link} href="/blog/post">Read More</Link> 
        </div>
        </div>
    )
}

export default PostCard