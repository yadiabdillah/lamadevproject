import style from  "./navbar.module.css"
import Links from "./links/Links";
const Navbar = ()=>{
return (
        <div className={style.container}>
            <div>Logo</div>
           <Links/>
        </div>
)
}

export default Navbar;