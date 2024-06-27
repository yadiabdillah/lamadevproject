import styles from "./postCard.module.css"
import Image from "next/image"
import Link from "next/link"

const PostCard = () =>{
    return (
        <div className={styles.container}>Postcard
        <div className={styles.top}>
            <div className={styles.imgContainer}>
                <Image src="" alt="" fill className={styles.image} />
            </div>
            <span className={styles.date}>01.01.2024</span>
        </div>
        <div className={styles.bottom}>
            <h1 className={styles.title}>Title</h1>
            <p className={styles.description}>description</p>
            <Link href="/blog/post">Read More</Link> 
        </div>
        </div>
    )
}

export default PostCard