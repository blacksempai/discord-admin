import Header from "../../shared/Header/Header.jsx";
import classes from './GuildSelector.module.css';
import { useEffect } from 'react';
import axios from "axios";
import { useState } from 'react';
import GuildCard from './GuildCard/GuildCard.jsx';

function GuildSelector() {
    const [guilds, setGuilds] = useState([]);

    useEffect(() => {
        axios.get('/discord/guilds').then(response => setGuilds(response.data));
    }, []);

    return (
        <div>
            <Header/>
            <div className={classes.guild_selector_container + ' container'}>
                <h2>Select a guild</h2>
                <ul className={classes.guild_list}>
                    {guilds.map(g => <li><GuildCard guild={g}/></li>)}
                </ul>
            </div>
        </div>
    )
}

export default GuildSelector;