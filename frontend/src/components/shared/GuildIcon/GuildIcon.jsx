import classes from './GuildIcon.module.css';

function GuildIcon({guild, size}) {

    const baseImgURL = 'https://cdn.discordapp.com/icons/';

    const getShortName = (guild) => {
        const name = guild.name.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
        const words = name.split(' ');
        const firstLetters = words.reduce((a, v) => a + v.charAt(0), '');
        return firstLetters.substring(0, 3);
    }

    if(guild?.icon) {
        return <img style={{width: size, height: size}}
                    className={classes.card_avatar}
                    src={baseImgURL+guild.id+'/'+guild.icon}
                    alt={getShortName(guild)} />
    }

    return (
        <div style={{fontSize: size}}>
            <div className={classes.card_avatar} style={{width: size, height: size}}>
                {getShortName(guild)}
            </div>
        </div>
    )
}

export default GuildIcon;