import classes from './GuildMenuNav.module.css';
import { Link } from 'react-router-dom';
import Logo from '../../../shared/Header/Logo/Logo.jsx';

function GuildMenuNav() {
    return (
        <nav>
            <header className={classes.menu_header}>
                <Logo/>
            </header>
            <ul className={classes.menu_list}>
                <li className={classes.menu_item}>
                    <Link to={''}>Dashboard</Link>
                </li>
            </ul>
        </nav>
    );
}

export default GuildMenuNav;