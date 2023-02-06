import { createBrowserRouter } from "react-router-dom";
import HomePage from './components/HomePage/HomePage.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>,
        errorElement: <ErrorPage/>,
    },
])

export default router;