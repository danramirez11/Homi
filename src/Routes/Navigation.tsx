import { createHashRouter } from "react-router-dom";
import SplashScreen from "../screens/Splash/Splash";
import Form from "../Pages/Form/Form";
import Results from "../Pages/Results/Results";

import Detalle from "../Pages/Detalle/Detalle";
import Simul from "../Pages/Simul/Simul";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Home from "../Pages/Home/Home";
import Onboard from "../Pages/Onboard/Onboard";

const routes = createHashRouter([
    {
        path: "/",
        element: <SplashScreen/>,
    },
    {
        path: "/login",
        element: <Login/>,
    },
    {
        path: "/register",
        element: <Register/>,
    },
    {
        path: "/onboarding",
        element: <Onboard/>,
    },
    {
        path: "/form",
        element: <Form/>,
        },
    {
        path: "/results",
        element: <Results></Results>,
    },
    {
        path: "/detail",
        element: <Detalle/>,
    },
    {
     path: "/simulation",   
     element: <Simul></Simul>,
    },
    {
     path: "/home",   
     element: <Home/>,
    },
    
    ])

export default routes;