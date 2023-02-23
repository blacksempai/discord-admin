import { withCookies } from "react-cookie";
import { Navigate, useParams } from "react-router-dom";
import GuildSelector from "./GuildSelector/GuildSelector.jsx";

function Dashboard(props) {
    const {cookies} = props;
    const { id } = useParams();
    if(!cookies.cookies.token) {
        return <Navigate to='/' />
    }
    if(id) {
        return <div>Guild: {id}</div>
    }
    return <GuildSelector/>;
}

export default withCookies(Dashboard);