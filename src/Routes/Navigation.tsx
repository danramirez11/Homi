import { createHashRouter } from "react-router-dom";
import Onboarding from "../screens/Onboarding/Onboarding";
import SplashScreen from "../screens/Splash/Splash";
import Form from "../pages/Form/Form";
import Results from "../pages/Results/Results";
import Simul from "../pages/Simul/Simul";
import Detalle from "../pages/Detalle/Detalle";

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