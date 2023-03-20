import classes from './Plugins.module.css';
import PluginCard from './PluginCard/PluginCard.jsx';
import { useEffect, useState } from 'react';
import axios from 'axios';

const description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."

const ids = {
    economy: 1,
    giveaways: 2,
    moderation: 3,
    rroles: 4,
    autoroles: 5,
    logs: 6,
    utilities: 7,
    fun: 8
}

function Plugins({guildId}) {
    const [plugins, setPlugins] = useState({});

    useEffect(() => {
        axios.get('/plugins', {params: {guildId}}).then(result => setPlugins(result.data))
    }, []);

    const setPlugin = (id, value) => {
        switch(id) {
            case ids.economy: return axios.put('/plugins', {data: {economy: value, guildId}}).then(result => setPlugins(result.data));
            case ids.giveaways: return axios.put('/plugins', {data: {giveaways: value, guildId}}).then(result => setPlugins(result.data));
            case ids.moderation: return axios.put('/plugins', {data: {moderation: value, guildId}}).then(result => setPlugins(result.data));
            case ids.rroles: return axios.put('/plugins', {data: {rroles: value, guildId}}).then(result => setPlugins(result.data));
            case ids.autoroles: return axios.put('/plugins', {data: {autoroles: value, guildId}}).then(result => setPlugins(result.data));
            case ids.logs: return axios.put('/plugins', {data: {logs: value, guildId}}).then(result => setPlugins(result.data));
            case ids.utilities: return axios.put('/plugins', {data: {utilities: value, guildId}}).then(result => setPlugins(result.data));
            case ids.fun: return axios.put('/plugins', {data: {fun: value, guildId}}).then(result => setPlugins(result.data));
            default: return
        }
    }

    return (
        <div className={classes.plugins_grid}>
            <PluginCard title="Economy" icon="savings" description={description} isActive={plugins.economy} id={ids.economy} setPlugin={setPlugin}/>
            <PluginCard title="Giveaways" icon="celebration" description={description} isActive={plugins.giveaways} id={ids.giveaways} setPlugin={setPlugin}/>
            <PluginCard title="Moderation" icon="add_moderator" description={description} isActive={plugins.moderation} id={ids.moderation} setPlugin={setPlugin}/>
            <PluginCard title="Reaction Roles" icon="manage_accounts" description={description} isActive={plugins.rroles} id={ids.rroles} setPlugin={setPlugin}/>
            <PluginCard title="Autoroles" icon="groups" description={description} isActive={plugins.autoroles} id={ids.autoroles} setPlugin={setPlugin}/>
            <PluginCard title="Logging system" icon="cloud_upload" description={description} isActive={plugins.logs} id={ids.logs} setPlugin={setPlugin}/>
            <PluginCard title="Utilities" icon="smart_button" description={description} isActive={plugins.utilities} id={ids.utilities} setPlugin={setPlugin}/>
            <PluginCard title="Fun Section" icon="person_play" description={description} isActive={plugins.fun} id={ids.fun} setPlugin={setPlugin}/>
        </div>
    )
}

export default Plugins;