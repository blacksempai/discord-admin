import classes from './GuildSelector.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function GuildSelector({isSidebarFolded, id}) {
    const [guilds, setGuilds] = useState([]);    

    console.log(guilds);

    useEffect(() => {
        axios.get('/discord/user-bot-guilds').then(result => setGuilds(result.data));
    }, [])

    return (
        <div className={classes.wrapper}>
            <div className={classes.dropdown_selected}>
                {guilds.find(g => g.id === id)?.name || 'Loading...'}
            </div>    
            <ul className={classes.dropdown_list}>
                {guilds.map(g => <li>{g.name}</li>)}
            </ul>
        </div>
    )
}

export default GuildSelector;