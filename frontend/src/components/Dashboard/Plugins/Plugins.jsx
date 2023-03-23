import classes from './Plugins.module.css';
import PluginCard from './PluginCard/PluginCard.jsx';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ConfirmModal from '../../shared/ConfirmModal/ConfirmModal.jsx';

const description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."

function Plugins({guildId}) {
    const [plugins, setPlugins] = useState({});
    const [show, setShow] = useState(false);
    const [currentChange, setCurrentChange] = useState({});

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
                    title={Object.values(currentChange)[0] ? 'Enable the plugin?' : 'Disable the plugin?'}/>
                    
        <div className={classes.plugins_grid}>
            <PluginCard title="Economy"
                        icon="savings"
                        description={description}
                        isActive={plugins.economy}
                        setPlugin={() => setPlugin({economy: !plugins.economy})}/>

            <PluginCard title="Giveaways" 
                        icon="celebration" 
                        description={description} 
                        isActive={plugins.giveaways} 
                        setPlugin={() => setPlugin({giveaways: !plugins.giveaways})}/>

            <PluginCard title="Moderation"
                        icon="add_moderator"
                        description={description}
                        isActive={plugins.moderation} 
                        setPlugin={() => setPlugin({moderation: !plugins.moderation})}/>

            <PluginCard title="Reaction Roles" 
                        icon="manage_accounts" 
                        description={description} 
                        isActive={plugins.rroles}  
                        setPlugin={() => setPlugin({rroles: !plugins.rroles})}/>

            <PluginCard title="Autoroles"
                        icon="groups"
                        description={description} 
                        isActive={plugins.autoroles} 
                        setPlugin={() => setPlugin({autoroles: !plugins.autoroles})}/>

            <PluginCard title="Logging system" 
                        icon="cloud_upload" 
                        description={description} 
                        isActive={plugins.logs} 
                        setPlugin={() => setPlugin({logs: !plugins.logs})}/>

            <PluginCard title="Utilities" 
                        icon="smart_button" 
                        description={description} 
                        isActive={plugins.utilities}  
                        setPlugin={() => setPlugin({utilities: !plugins.utilities})}/>

            <PluginCard title="Fun Section"
                        icon="person_play"
                        description={description} 
                        isActive={plugins.fun} 
                        setPlugin={() => setPlugin({fun: !plugins.fun})}/>
        </div>
        </>
    )
}

export default Plugins;