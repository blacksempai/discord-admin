import { withCookies } from "react-cookie";
import { Navigate } from "react-router-dom";
import ServerSelector from "./ServerSelector/ServerSelector.jsx";

function Dashboard(props) {
    const {cookies} = props;
    if(!cookies.cookies.token) {
        return <Navigate to='/' />
    }
    return <ServerSelector/>;
}

export default withCookies(Dashboard);