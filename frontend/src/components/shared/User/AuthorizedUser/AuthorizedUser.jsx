import axios from "axios";
import { useEffect, useState } from "react";


function AuthorizedUser() {

    const [user, setUser] = useState(null);

    useEffect(() => {
        axios.get('/discord/me').then(user => setUser(user));
    }, []);

    return (
        <div>
            <img src={user.photo} alt="" />
            {user.nickname}
        </div>
    )
}

export default AuthorizedUser;