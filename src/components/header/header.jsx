import s from './header.module.css'

const Header = () => {
    return(
        <header className={s.header}>
            <img
                src="https://codesign.com.bd/conversations/content/images/2020/03/Sprint-logo-design-Codesign-agency.png"
                alt="logo"/>
        </header>
    )
};
export default Header