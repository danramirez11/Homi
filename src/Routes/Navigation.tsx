import { createHashRouter } from "react-router-dom";
import Onboarding from "../screens/Onboarding/Onboarding";
import SplashScreen from "../screens/Splash/Splash";
import Form from "../Pages/Form/Form";
import Perfil from "../Pages/perfil/perfil";
import Results from "../Pages/Results/Results";
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
        element: <Results/>,
    },
    {
        path: "/profile",
        element: <Perfil></Perfil>,
    },
    {
        path: "/detail",
        element: <p>dedtalle</p>,
    },
    {
     path: "/simulation",   
     element: <Simul></Simul>,
    },
    {
        path: "/test",
        element: <h1>¡Hola mundo sin Supabase!</h1>
    }
    
    ])

export default routes;