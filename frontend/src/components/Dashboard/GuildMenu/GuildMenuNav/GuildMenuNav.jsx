import classes from './GuildMenuNav.module.css';
import { Link } from 'react-router-dom';
import Logo from '../../../shared/Header/Logo/Logo.jsx';
import GuildSelector from './GuildSelector/GuildSelector.jsx';

function GuildMenuNav({toggleSidebar, isSidebarFolded, id}) {
    return (
        <nav>
            <header className={classes.menu_header}>
                <button onClick={toggleSidebar} className={classes.sidebar_toggle}>
                    <span class="material-symbols-outlined">
                        menu_open
                    </span>
                </button>
                <Logo/>
                {!isSidebarFolded ? <h1 className={classes.title}>CLUDY</h1> : null}
            </header>
            <GuildSelector isSidebarFolded={isSidebarFolded} id={id}/>
            <ul className={classes.menu_list}>
                <li className={classes.menu_item}>
                    <Link to={''}>Dashboard</Link>
                </li>
            </ul>
        </nav>
    );
}

export default GuildMenuNav;