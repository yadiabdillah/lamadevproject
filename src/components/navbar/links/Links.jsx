"use client"

import Link from "next/link"
import styles from "./links.module.css"
import NavLink from "./navLinks/navLinks"
import { useState } from "react"
import Image from "next/image"

const links = [

    {title:"Homepage",path:"/"},
    {title:"About",path:"/about"},
    {title:"Contact",path:"/contact"},
    {title:"Blog",path:"/blog"},
]

const Links = ()=>{
    const [open,SetOpen] = useState(false);
   

    const session = true
    const isAdmin = true
    return (
        <div className={styles.container}>
        <div className={styles.links}>
           {links.map((link=>(
           <NavLink item={link} key={link.title}  />
           )))}{
            session ? (
                <>
                {
                    isAdmin && (
                        <NavLink item={{title:"Admin" , path:"/admin"}}/>
                    )
                }
                
                <button className={styles.logout}>Logout</button>
                </>) :(<NavLink item={{title:"login" , path:"/login"}}/>)
           }
        </div>
        {/* <button className={styles.menuButton} >Menu</button> */}
        <Image src="/menu.png" className={styles.menuButton} alt="" width={30} height={30} onClick={()=>SetOpen((prev)=>!prev)} />
        {
            open &&     <div className={styles.mobileLinks}>
               {links.map((link=>(
           <NavLink item={link} key={link.title}  />
           )))} 
            </div>
        }
        </div>
    )
}

export default Links