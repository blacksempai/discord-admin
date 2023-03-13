import classes from './GuildSelector.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Select from '../../../../ui-lib/Select/Select.jsx';
import GuildIcon from './../../../../shared/GuildIcon/GuildIcon.jsx';

function GuildSelector({isSidebarFolded, id}) {
    const [guilds, setGuilds] = useState([]);

    const selectGuild = (id) => {
        window.location.assign('/dashboard/'+id);
    }

    useEffect(() => {
        axios.get('/discord/user-bot-guilds').then(result => setGuilds(result.data));
    }, [])

    return (
        <div style={isSidebarFolded ? {padding: '0 0.25rem'} : {padding: '0 1rem'}}>
            <Select 
                list={guilds.map(g => ({...g, icon: () => <GuildIcon guild={g} size="20px"/>}))}
                selectedItemId={id}
                selectionChange={selectGuild}
                isWithIcons={true}
                isOnlyIcon={isSidebarFolded}
            />
        </div>
    )
}

export default GuildSelector;