import classes from './GuildCard.module.css';
import { Link } from 'react-router-dom';

const baseRedirectURL = 'https://discord.com/api/oauth2/authorize?client_id=1063133464741818390&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A25505%2Fauth%2Fredirect-guild&permissions=8&scope=bot&guild_id=';

const baseImgURL = 'https://cdn.discordapp.com/icons/';

function GuildCard({guild}) {

    const getShortName = (guild) => {
        const name = guild.name.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
        const words = name.split(' ');
        const firstLetters = words.reduce((a, v) => a + v.charAt(0), '');
        return firstLetters.substring(0, 3);
    }

    return (
        <div className={classes.card}>
            {
                guild.icon ?
                <div className={classes.card_avatar_container} style={{
                        background: `url(${baseImgURL+guild.id+'/'+guild.icon})`,
                        backgroundSize: 'cover'
                    }}>
                    <img className={classes.card_avatar} src={baseImgURL+guild.id+'/'+guild.icon} alt={getShortName(guild)} />
                </div>
                :
                <div className={classes.card_avatar_container}>
                    <div className={classes.card_avatar}>
                        {getShortName(guild)}
                    </div>
                </div>
            }
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