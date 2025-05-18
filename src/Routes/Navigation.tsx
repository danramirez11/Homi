import { createHashRouter } from "react-router-dom";
import Onboarding from "../screens/Onboarding/Onboarding";
import SplashScreen from "../screens/Splash/Splash";

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
        element: <div>form</div>,
        },
    {
        path: "/results",
        element: <div>results</div>,
    },
    {
     path: "simulation ",   
     element: <div>simulation</div>,
    }
    ])

export default routes;