import { createHashRouter } from "react-router-dom";
import Onboarding from "../screens/Onboarding/Onboarding";
import SplashScreen from "../screens/Splash/Splash";
import Form from "../pages/Form/Form";
import Simul from "../pages/Simul/Simul";

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
        element: <p>results</p>,
    },
    {
     path: "/simulation",   
     element: <Simul></Simul>,
    },
    
    ])

export default routes;