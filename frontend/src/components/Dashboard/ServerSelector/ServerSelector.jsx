import Header from "../../shared/Header/Header.jsx";
import classes from './ServerSelector.module.css';
import { useEffect } from 'react';
import axios from "axios";
import { useState } from 'react';
import ServerCard from './ServerCard/ServerCard.jsx';

function ServerSelector() {
    const [guilds, setGuilds] = useState([]);

    useEffect(() => {
        axios.get('/discord/guilds').then(response => setGuilds(response.data));
    }, []);

    return (
        <div>
            <Header/>
            <div className={classes.server_selector_container + ' container'}>
                <h2>Select a server</h2>
                <ul className={classes.server_list}>
                    {guilds.map(g => <li><ServerCard server={g}/></li>)}
                </ul>
            </div>
        </div>
    )
}

export default ServerSelector;