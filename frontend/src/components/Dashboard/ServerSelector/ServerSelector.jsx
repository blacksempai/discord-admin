import Header from "../../shared/Header/Header.jsx";
import classes from './ServerSelector.module.css';
import { useEffect } from 'react';
import axios from "axios";
import { useState } from 'react';

function ServerSelector() {
    const [guilds, setGuilds] = useState([]);

    useEffect(() => {
        axios.get('/discord/guilds').then(response => setGuilds(response.data.filter(g => g.owner)));
    }, []);

    return (
        <div>
            <Header/>
            <div className={classes.server_selector_container}>
                <h2>Select a server</h2>
                <ul>
                    {guilds.map(g => <li>{g.name}</li>)}
                </ul>
            </div>
        </div>
    )
}

export default ServerSelector;