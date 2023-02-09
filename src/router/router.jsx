import {createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import PersonId from "../components/PersonId";

export const router= createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {            
        path:'/:id',
        element: <PersonId />
    }
])