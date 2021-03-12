import s from './navbar.module.css'
import {NavLink} from "react-router-dom";


const Nav = ()=> {
    return(
        <nav className={s.nav}>
            <div className = {s.item}>
                <NavLink to="/content" activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className = {s.item}>
                <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className = {s.item}>
                <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className = {s.item}>
                <a>Music</a>
            </div>
            <div className = {s.item}>
                <a>Settings </a>
            </div>
        </nav>
    )
};

export default Nav
