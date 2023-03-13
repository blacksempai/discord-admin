import classes from './UserDropdown.module.css';
import {Link} from 'react-router-dom';

function UserDropdown(props) {
    return <div className={classes.user_dropdown}>
        <h3 className={classes.dropdown_title}>MY BOT</h3>
        <nav>
            <ul className={classes.nav_list}>
                <li className={classes.nav_item}>
                    <Link to="/" className={classes.nav_link}>Home Page</Link>
                </li>
                <li className={classes.nav_item}>
                    <Link to="/dashboard" className={classes.nav_link}>My Guilds</Link>
                </li>
            </ul>
        </nav>
    </div>
}

export default UserDropdown;