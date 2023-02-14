import { useEffect, useState } from "react";
import axios from 'axios'
import Loading from './../../Loading/Loading.jsx';
import classes from './AuthorizedUser.module.css';
import discordBlue from './discordblue.png';
import UserDropdown from "./UserDropdown/UserDropdown.jsx";


function AuthorizedUser() {
    const [user, setUser] = useState(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const onImgNotFound = (event) => {
        const img = event.target;
        img.onerror = null;
        img.src = discordBlue; 
    }

    const toggleDropdown = () => {
        if(isDropdownOpen) {
            setIsDropdownOpen(false);
        }
        else {
            setIsDropdownOpen(true);
        }
    }

    useEffect(() => {
        axios.get('/discord/me').then(response => setUser(response.data))
    }, []);

    if(!user) {
        return (
            <div className={classes.user}>
                <Loading />
            </div>  
        )
    }


    return (
        <div className={classes.user}>
            <button className={classes.user_button} onClick={toggleDropdown}>
                <img className={classes.user_avatar} src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`} alt="User" onError={onImgNotFound} />
                <span class="material-symbols-outlined">
                    expand_more
                </span>
            </button>
            {isDropdownOpen ? <UserDropdown/> : null}
        </div>
    )
}

export default AuthorizedUser;