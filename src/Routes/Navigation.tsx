import { createHashRouter } from "react-router-dom";
import Simul from "../pages/Simul/Simul";

const routes = createHashRouter([
    {
        path: "/",
        element: <div>Home</div>,
    },
    {
        path: "/form",
        element: <div>form</div>,
        },
    {
        path: "/results",
        element: <div>results</div>,
    },
    {
     path: "/simulation",   
     element: <Simul></Simul>,
    },
    
    ])

export default routes;