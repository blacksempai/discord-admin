import classes from './Plugins.module.css';
import PluginCard from './PluginCard/PluginCard.jsx';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ConfirmModal from '../../shared/ConfirmModal/ConfirmModal.jsx';
import { useNavigate } from "react-router-dom";

const description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."

function Plugins({guildId}) {
    const [plugins, setPlugins] = useState({});
    const [show, setShow] = useState(false);
    const [currentChange, setCurrentChange] = useState({});
    const navigate = useNavigate();

    const handleClose = (isConfirm, data) => {
        setShow(false);
        if(isConfirm) {
            axios.put('/plugins', {data: {guildId, ...data}}).then(result => setPlugins(result.data));
        }
    }
    const handleShow = () => setShow(true);

    useEffect(() => {
        axios.get('/plugins', {params: {guildId}}).then(result => setPlugins(result.data))
    }, []);

    const setPlugin = (value) => {
        setCurrentChange(value);
        handleShow();
    }

    return (
        <>
        <ConfirmModal data={currentChange}
                    show={show}
                    handleClose={handleClose} 
                    title='Enable the plugin?'/>
                    
        <div className={classes.plugins_grid}>
            <PluginCard title="Economy"
                        icon="savings"
                        description={description}
                        isActive={plugins.economy}
                        setPlugin={() => plugins.economy ? navigate('economy') : setPlugin({economy: true})}/>

            <PluginCard title="Giveaways" 
                        icon="celebration" 
                        description={description} 
                        isActive={plugins.giveaways} 
                        setPlugin={() => plugins.giveaways ? navigate('giveaways') : setPlugin({giveaways: true})}/>

            <PluginCard title="Moderation"
                        icon="add_moderator"
                        description={description}
                        isActive={plugins.moderation} 
                        setPlugin={() => plugins.moderation ? navigate('moderation') : setPlugin({moderation: true})}/>

            <PluginCard title="Reaction Roles" 
                        icon="manage_accounts" 
                        description={description} 
                        isActive={plugins.rroles}  
                        setPlugin={() => plugins.rroles ? navigate('rroles') : setPlugin({rroles: true})}/>

            <PluginCard title="Autoroles"
                        icon="groups"
                        description={description} 
                        isActive={plugins.autoroles} 
                        setPlugin={() => plugins.autoroles ? navigate('autoroles') : setPlugin({autoroles: true})}/>

            <PluginCard title="Logging system" 
                        icon="cloud_upload" 
                        description={description} 
                        isActive={plugins.logs} 
                        setPlugin={() => plugins.logs ? navigate('logs') : setPlugin({logs: true})}/>

            <PluginCard title="Utilities" 
                        icon="smart_button" 
                        description={description} 
                        isActive={plugins.utilities}  
                        setPlugin={() => plugins.utilities ? navigate('utilities') : setPlugin({utilities: true})}/>

            <PluginCard title="Fun Section"
                        icon="person_play"
                        description={description} 
                        isActive={plugins.fun} 
                        setPlugin={() => plugins.fun ? navigate('fun') : setPlugin({fun: true})}/>
        </div>
        </>
    )
}

export default Plugins;