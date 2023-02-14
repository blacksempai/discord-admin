import classes from './Header.module.css';
import Logo from './Logo/Logo.jsx';
import MainNavigation from './MainNavigation/MainNavigation.jsx';
import User from '../User/User.jsx';

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