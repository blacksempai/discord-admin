import { withCookies } from "react-cookie";
import { Navigate, useParams } from "react-router-dom";
import GuildSelector from "./GuildSelector/GuildSelector.jsx";
import GuildMenu from './GuildMenu/GuildMenu.jsx';

function Dashboard(props) {
    const {cookies} = props;
    const { id } = useParams();
    if(!cookies.cookies.token) {
        return <Navigate to='/' />
    }
    if(id) {
        return <GuildMenu id={id} />
    }
    return <GuildSelector/>;
}

export default withCookies(Dashboard);