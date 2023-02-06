import classes from './User.module.css';
import { withCookies } from 'react-cookie'
import AuthorizedUser from './AuthorizedUser/AuthorizedUser';

const redirectURL = 'https://discord.com/api/oauth2/authorize?client_id=1063133464741818390&redirect_uri=http%3A%2F%2Flocalhost%3A25505%2Fauth%2Fget-token&response_type=code&scope=identify';


function User(props)
{
    const {cookies} = props;

    if (cookies.cookies.token) {
        return <AuthorizedUser/>
    }

    return (
        <a href={redirectURL}>Login</a>
    )
}

export default withCookies(User);