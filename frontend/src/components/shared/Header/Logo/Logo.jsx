import classes from './Logo.module.css';
import logo from './logo.jpeg';

function Logo(props) {
    return (
        <div className={classes.Logo}>
            <img src={logo} alt="DiscordAdmin" className={classes.Logo__img}/>
        </div>
    )
}

export default Logo;