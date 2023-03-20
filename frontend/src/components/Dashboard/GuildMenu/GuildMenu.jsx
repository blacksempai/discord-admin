import classes from './GuildMenu.module.css';
import User from '../../shared/User/User.jsx'
import GuildMenuNav from './GuildMenuNav/GuildMenuNav.jsx'
import { useState } from 'react';
import Plugins from './../Plugins/Plugins.jsx';

function GuildMenu({id}) {
    const [isSidebarFolded, setIsSidebarFolded] = useState(false);

    const toggleSidebar = () => setIsSidebarFolded(prev => !prev);

    return (
        <div className={classes.screen}>
            <div className={classes.sidebar_container} 
            style={isSidebarFolded ? {width: '88px'} : {width: '300px'}}>
                <GuildMenuNav toggleSidebar={toggleSidebar} isSidebarFolded={isSidebarFolded} id={id}/>
            </div>
            <main className={classes.main_container}>
                <header className={classes.header}>
                    <User/>
                </header>
                <div className={classes.router_outlet}>
                    <Plugins guildId={id}/>
                </div>
            </main>
        </div>
    )
}

export default GuildMenu;