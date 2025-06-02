import { createHashRouter } from "react-router-dom";
import Onboarding from "../screens/Onboarding/Onboarding";
//import SplashScreen from "../screens/Splash/Splash";
import Form from "../Pages/Form/Form";
import Results from "../Pages/Results/Results";

import Detalle from "../Pages/Detalle/Detalle";
import Simul from "../Pages/Simul/Simul";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Pages/Dashboard/Dashboard";

const routes = createHashRouter([
    {
        path: "/",
        element: <Dashboard/>,
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
        element: <Onboarding/>,
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
    path: "/dashboard",
    element: <Dashboard/>,
    }
    
    ])

export default routes;