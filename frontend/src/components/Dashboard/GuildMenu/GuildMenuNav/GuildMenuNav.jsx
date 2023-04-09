import classes from './GuildMenuNav.module.css';
import { NavLink } from 'react-router-dom';
import Logo from '../../../shared/Header/Logo/Logo.jsx';
import GuildSelector from './GuildSelector/GuildSelector.jsx';

function GuildMenuNav({toggleSidebar, isSidebarFolded, id}) {

    const getLinkClass = ({isActive}) => isActive ? classes.menu_link + ' ' + classes.menu_link_active : classes.menu_link;

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
                    <NavLink to={''} className={getLinkClass} end>
                        <span class="material-symbols-outlined">dashboard</span>
                        {isSidebarFolded ? null : <span>Dashboard</span>}
                    </NavLink>
                </li>
                <li className={classes.menu_item}>
                    <NavLink to={'economy'} className={getLinkClass}>
                        <span class="material-symbols-outlined">savings</span>
                        {isSidebarFolded ? null : <span>Economy</span>}
                    </NavLink>
                </li>
                <li className={classes.menu_item}>
                    <NavLink to={'giveaways'} className={getLinkClass}>
                        <span class="material-symbols-outlined">celebration</span>
                        {isSidebarFolded ? null : <span>Giveaways</span>}
                    </NavLink>
                </li>
                <li className={classes.menu_item}>
                    <NavLink to={'moderation'} className={getLinkClass}>
                        <span class="material-symbols-outlined">add_moderator</span>
                        {isSidebarFolded ? null : <span>Moderation</span>}
                    </NavLink>
                </li>
                <li className={classes.menu_item}>
                    <NavLink to={'rroles'} className={getLinkClass}>
                        <span class="material-symbols-outlined">manage_accounts</span>
                        {isSidebarFolded ? null : <span>Reaction Roles</span>}
                    </NavLink>
                </li>
                <li className={classes.menu_item}>
                    <NavLink to={'autoroles'} className={getLinkClass}>
                        <span class="material-symbols-outlined">groups</span>
                        {isSidebarFolded ? null : <span>Autoroles</span>}
                    </NavLink>
                </li>
                <li className={classes.menu_item}>
                    <NavLink to={'logs'} className={getLinkClass}>
                        <span class="material-symbols-outlined">cloud_upload</span>
                        {isSidebarFolded ? null : <span>Logging System</span>}
                    </NavLink>
                </li>
                <li className={classes.menu_item}>
                    <NavLink to={'utilities'} className={getLinkClass}>
                        <span class="material-symbols-outlined">smart_button</span>
                        {isSidebarFolded ? null : <span>Utilities</span>}
                    </NavLink>
                </li>
                <li className={classes.menu_item}>
                    <NavLink to={'fun'} className={getLinkClass}>
                        <span class="material-symbols-outlined">person_play</span>
                        {isSidebarFolded ? null : <span>Fun section</span>}
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default GuildMenuNav;