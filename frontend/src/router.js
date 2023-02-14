import { createBrowserRouter } from "react-router-dom";
import HomePage from './components/HomePage/HomePage.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage/>,
        errorElement: <ErrorPage/>,
    },
    {
        path: '/dashboard',
        element: <Dashboard/>,
        errorElement: <ErrorPage/>,
    }
])

export default router;