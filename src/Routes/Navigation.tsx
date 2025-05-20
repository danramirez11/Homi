import { createHashRouter } from "react-router-dom";
import Onboarding from "../screens/Onboarding/Onboarding";
import SplashScreen from "../screens/Splash/Splash";
import Form from "../Pages/Form/Form";
import Results from "../Pages/Results/Results";

import Detalle from "../Pages/Detalle/Detalle";
import Simul from "../Pages/Simul/Simul";

const routes = createHashRouter([
    {
        path: "/",
        element: <SplashScreen/>,
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
    
    ])

export default routes;