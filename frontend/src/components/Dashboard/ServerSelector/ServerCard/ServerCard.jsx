import classes from './ServerCard.module.css';

const baseRedirectURL = 'https://discord.com/api/oauth2/authorize?client_id=1063133464741818390&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A25505%2Fauth%2Fredirect-guild&permissions=8&scope=bot&guild_id=';

const baseImgURL = 'https://cdn.discordapp.com/icons/';

function ServerCard({server}) {

    const getShortName = (server) => {
        const name = server.name.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
        const words = name.split(' ');
        const firstLetters = words.reduce((a, v) => a + v.charAt(0), '');
        return firstLetters.substring(0, 3);
    }

    return (
        <div className={classes.card}>
            {
                server.icon ?
                <div className={classes.card_avatar_container} style={{
                        background: `url(${baseImgURL+server.id+'/'+server.icon})`,
                        backgroundSize: 'cover'
                    }}>
                    <img className={classes.card_avatar} src={baseImgURL+server.id+'/'+server.icon} alt={getShortName(server)} />
                </div>
                :
                <div className={classes.card_avatar_container}>
                    <div className={classes.card_avatar}>
                        {getShortName(server)}
                    </div>
                </div>
            }
            <div className={classes.card_footer}>
                <div className={classes.description}>
                    <p className={classes.description_title}>
                        {server.name}
                    </p>
                    <p className={classes.description_role}>
                        {server.owner ? 'Owner' : 'Bot Master'}
                    </p>
                </div>
                <div className={classes.btn_container}>
                    <a href={baseRedirectURL+server.id} className={classes.btn}>
                        Setup
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ServerCard;