import classes from './GuildCard.module.css';
import { Link } from 'react-router-dom';
import GuildIcon from '../../../shared/GuildIcon/GuildIcon.jsx';

const baseRedirectURL = 'https://discord.com/api/oauth2/authorize?client_id=1063133464741818390&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A25505%2Fauth%2Fredirect-guild&permissions=8&scope=bot&guild_id=';

const baseImgURL = 'https://cdn.discordapp.com/icons/';

function GuildCard({guild}) {
    return (
        <div className={classes.card}>
            <div className={classes.card_avatar_container} style={guild.icon ? {
                background: `url(${baseImgURL+guild.id+'/'+guild.icon})`,
                backgroundSize: 'cover'
            } : null}>
                <GuildIcon guild={guild} size="84px"/>
            </div>
            <div className={classes.card_footer}>
                <div className={classes.description}>
                    <p className={classes.description_title}>
                        {guild.name}
                    </p>
                    <p className={classes.description_role}>
                        {guild.owner ? 'Owner' : 'Bot Master'}
                    </p>
                </div>
                <div className={classes.btn_container}>
                    {
                        guild.isBot ? 
                        <Link to={guild.id} className={classes.btn + ' ' + classes.btn__active}>
                            Go
                        </Link>
                        :
                        <a href={baseRedirectURL+guild.id} className={classes.btn}>
                            Setup
                        </a>
                    }
                </div>
            </div>
        </div>
    )
}

export default GuildCard;