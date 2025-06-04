import { createHashRouter } from "react-router-dom";
import Simulv2 from "../Pages/Simulv2/Simulv2";
import Detalle from "../Pages/Detalle/Detalle";
import Simul from "../Pages/Simul/Simul";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Home from "../Pages/Home/Home";
import Onboard from "../Pages/Onboard/Onboard";
import Form from "../Pages/Form/Form";
import SplashScreen from "../Pages/Splash/Splash";
import Results from "../Pages/Results/Results";

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
        element: <Results/>,
    },
    {
        path: "/detail",
        element: <Detalle/>,
    },
    {
     path: "/simulation",   
     element: <Simul></Simul>,
    },{
        path: "/simulv2",
        element: <Simulv2></Simulv2>,
    }
    
    ,{
     path: "/home",   
     element: <Home/>,
    },
    
    ])

export default routes;