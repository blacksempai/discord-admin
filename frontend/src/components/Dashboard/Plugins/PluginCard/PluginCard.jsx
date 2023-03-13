import classes from './PluginCard.module.css';

function PluginCard({icon, title, description, isActive}) {
    return (
        <div className={classes.card}>
            <span className={'material-symbols-outlined ' + classes.card_icon}>
                {icon}
            </span>
            <h3 className={classes.card_title}>{title}</h3>
            <p className={classes.card_description}>{description}</p>
            {
            isActive ? 
                <div className={classes.card_btn}>Active</div>
                :
                <button className={classes.card_btn}>Enable</button>
            }
        </div>
    )
}

export default PluginCard;