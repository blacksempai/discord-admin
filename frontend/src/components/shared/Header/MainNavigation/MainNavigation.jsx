import classes from './MainNavigation.module.css';
import {Link} from 'react-router-dom';

function MainNavigation(props) {
    return (
    <nav className={classes.Nav}>
        <ul className={classes.Nav__list}>
            <li className={classes.Nav__item}>
                <Link className={classes.Nav__link} to={`/`}>Home</Link>
            </li>
            <li className={classes.Nav__item}>
                <Link className={classes.Nav__link} to={`features`}>Features</Link>
            </li>
            <li className={classes.Nav__item}>
                <Link className={classes.Nav__link} to={`premium`}>Premium</Link>
            </li>
        </ul>
    </nav>
    )
}

export default MainNavigation;