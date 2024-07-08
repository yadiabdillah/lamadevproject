import Image from "next/image";
import styles from "./singlePost.module.css"

const SinglePostPage= ()=>{
return (
    <div className={styles.container}>
        <div className={styles.imgContainer}>
        <Image src="https://images.pexels.com/photos/25588027/pexels-photo-25588027/free-photo-of-a-stone-column-with-a-carving-on-it.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""
        fill className={styles.img} />
        </div>

        <div className={styles.textContainer}>
            <h1 className={styles.title}>Title</h1>
            <div className={styles.detail}>
                <Image className={styles.avatar} src="https://images.pexels.com/photos/25588027/pexels-photo-25588027/free-photo-of-a-stone-column-with-a-carving-on-it.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""
                 width={50} height={50} />

                <div className={styles.detailText}>
                    <span className={styles.detailTitle}>Author</span>
                    <span className={styles.detailValue}>aa</span>
                </div>
                
                <div className={styles.detailText}>
                    <span className={styles.detailTitle}>Date</span>
                    <span className={styles.detailValue}>2024-07-98</span>
                </div>
            </div>
            <div className={styles.content}>
                hhjcjhccbchcgxgf 

            </div>
        </div>
    </div>
)
}

export default SinglePostPage;