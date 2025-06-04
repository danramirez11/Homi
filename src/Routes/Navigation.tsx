import { createHashRouter } from "react-router-dom";
import Results from "../Pages/Results/Results";
import Simulv2 from "../Pages/Simulv2/Simulv2";
import Detalle from "../Pages/Detalle/Detalle";
import Simul from "../Pages/Simul/Simul";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Home from "../Pages/Home/Home";
import Onboard from "../Pages/Onboard/Onboard";
import Form from "../Pages/Form/Form";
import SplashScreen from "../Pages/Splash/Splash";
import Pagos from "../Pages/Payments/Pagos";

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
    },{
        path: "/simulv2",
        element: <Simulv2></Simulv2>,
    }
    
    ,{
     path: "/home",   
     element: <Home/>,
    },
    {
       path: "/pagos",
        element: <Pagos/>
     
    },
        
    ])

export default routes;