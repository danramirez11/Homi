import { createHashRouter } from "react-router-dom";
import Onboarding from "../screens/Onboarding/Onboarding";
import SplashScreen from "../screens/Splash/Splash";
import Form from "../Pages/Form/Form";
import Results from "../Pages/Results/Results";
import PostVenta from "../Pages/Postventa/Postventa";
import Detalle from "../Pages/Detalle/Detalle";
import Simul from "../Pages/Simul/Simul";
import PostVentaform from "../Pages/Postventa_form/Postventa";


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
    {
     path: "/postventa",   
     element: <PostVenta></PostVenta>,
    },
    {
        path: "/postventaform",   
        element: <PostVentaform></PostVentaform>,
       },
    
    ])

export default routes;