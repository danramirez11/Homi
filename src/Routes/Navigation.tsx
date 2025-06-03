import { createHashRouter } from "react-router-dom";
import Onboarding from "../screens/Onboarding/Onboarding";
import SplashScreen from "../screens/Splash/Splash";
import Form from "../Pages/Form/Form";
import Results from "../Pages/Results/Results";
import Simulv2 from "../Pages/Simulv2/Simulv2";
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
    },{
        path: "/simulv2",
        element: <Simulv2></Simulv2>,
    }
    
    ])

export default routes;