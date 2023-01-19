import classes from './Header.module.css';
import Logo from './Logo/Logo';
import MainNavigation from './MainNavigation/MainNavigation';
import User from './../User/User';

function Header(props) {
    return (
    <header className={classes.Header}>
        <Logo/>
        <MainNavigation/>
        <User/>
    </header>
    )
}

export default Header;