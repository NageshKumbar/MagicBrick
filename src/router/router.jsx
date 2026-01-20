import HomePage from "../pages/HomePage/HomePage";
import AboutPage from "../pages/AboutPage/AboutPage";
import ContactPage from "../pages/ContactPage/ContactPage";
import BookingPage from "../pages/BookingPage/BookingPage"; 
import FlatDetailsPage from "../pages/FlatDetailsPage/FlatDetailsPage";

import App from "../App";

import { createBrowserRouter } from 'react-router-dom'

const my_router = createBrowserRouter(
    [
        {
            element:<App />,
            children: [
                {
                    path:'/',
                    element:<HomePage />
                },
                {
                    path:'/about',
                    element:<AboutPage />
                },
                {
                    path:'/contact',
                    element:<ContactPage />
                },
                {
                    path:'/booking',
                    element:<BookingPage />
                },
                {
                    path:'/flat/:id',
                    element:<FlatDetailsPage />
                }
            ] 
        }
    ]
);

export default my_router