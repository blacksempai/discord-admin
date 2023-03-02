import classes from './GuildMenu.module.css';
import User from '../../shared/User/User.jsx'
import GuildMenuNav from './GuildMenuNav/GuildMenuNav.jsx'

function GuildMenu({id}) {
    return (
        <div className={classes.screen}>
            <div className={classes.sidebar_container}>
                <GuildMenuNav/>
            </div>
            <main className={classes.main_container}>
                <header>
                    <User/>
                </header>
                <div className={classes.router_outlet}></div>
            </main>
        </div>
    )
}

export default GuildMenu;