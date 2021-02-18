import s from './navbar.module.css'

// let s = {
//     'nav': 'navbar_nav__E4fjq',
//     'item': 'navbar_item__3ulqF'
// }

const Nav = ()=> {
    return(
        <nav className={s.nav}>
            <div className = {s.item}>
                <a>Profile</a>
            </div>
            <div className = {s.item}>
                <a>Messages</a>
            </div>
            <div className = {s.item}>
                <a>News</a>
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