import classes from './PluginCard.module.css';

function PluginCard({icon, title, description, isActive, setPlugin}) {
    return (
        <div className={classes.card} onClick={setPlugin}>
            <span className={'material-symbols-outlined ' + classes.card_icon}>
                {icon}
            </span>
            <h3 className={classes.card_title}>{title}</h3>
            <p className={classes.card_description}>{description}</p>
            <div className={classes.btn_container}>
            {
            isActive ? 
                <button className={'btn '+classes.active_btn}>Active</button>
                :
                <button className='btn'>
                    <div className={classes.main_btn_text}>
                        <span className="material-symbols-outlined" style={{fontSize: '18px'}}>
                            add
                        </span>
                        <span>Enable</span>
                    </div>
                    <div className={classes.alt_btn_text}>
                        <span>Enable</span>
                        <span className="material-symbols-outlined" style={{fontSize: '18px'}}>
                            arrow_forward
                        </span>
                    </div>
                </button>
            }
            </div>
        </div>
    )
}

export default PluginCard;