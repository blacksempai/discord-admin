import classes from './PluginCard.module.css';

function PluginCard({icon, title, description, isActive, id, setPlugin}) {
    return (
        <div className={classes.card} onClick={() => {setPlugin(id, !isActive)}}>
            <span className={'material-symbols-outlined ' + classes.card_icon}>
                {icon}
            </span>
            <h3 className={classes.card_title}>{title}</h3>
            <p className={classes.card_description}>{description}</p>
            <div className={classes.btn_container}>
            {
            isActive ? 
                <button className={'btn '+classes.danger}></button>
                :
                <button className='btn'>Enable</button>
            }
            </div>
        </div>
    )
}

export default PluginCard;