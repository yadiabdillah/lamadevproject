"use client"

import Link from "next/link"
import styles from "./links.module.css"
import NavLink from "./navLinks/navLinks"
import { useState } from "react"

const links = [

    {title:"Homepage",path:"/"},
    {title:"About",path:"/about"},
    {title:"Contact",path:"/contact"},
    {title:"Blog",path:"/posts"},
]

const Links = ()=>{
    const [open,SetOpen] = useState(false);
   

    const session = true
    const isAdmin = true
    return (
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
    )
}

export default Links