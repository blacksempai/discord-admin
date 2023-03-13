import classes from './Plugins.module.css';
import PluginCard from './PluginCard/PluginCard.jsx';

const description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."

function Plugins() {

    return (
        <div className={classes.plugins_grid}>
            <PluginCard title="Economy" icon="savings" description={description}/>
            <PluginCard title="Giveaways" icon="celebration" description={description}/>
            <PluginCard title="Moderation" icon="add_moderator" description={description}/>
            <PluginCard title="Reaction Roles" icon="manage_accounts" description={description}/>
            <PluginCard title="Autoroles" icon="groups" description={description}/>
            <PluginCard title="Logging system" icon="cloud_upload" description={description}/>
            <PluginCard title="Utilities" icon="smart_button" description={description}/>
            <PluginCard title="Fun Section" icon="person_play" description={description}/>
        </div>
    )
}

export default Plugins;