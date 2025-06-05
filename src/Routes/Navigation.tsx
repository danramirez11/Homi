import { createHashRouter } from "react-router-dom";
import Simulv2 from "../Pages/Simulv2/Simulv2";
import Detalle from "../Pages/Detalle/Detalle";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Home from "../Pages/Home/Home";
import Onboard from "../Pages/Onboard/Onboard";
import Form from "../Pages/Form/Form";
import SplashScreen from "../Pages/Splash/Splash";
import Results from "../Pages/Results/Results";
import ProjectDetail from "../Pages/projectDetail/ProjectDetail";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Perfil from "../Pages/perfil/perfil";
import PostVenta from "../Pages/Postventa/Postventa";
import PostVentaform from "../Pages/Postventa_form/Postventa";
import Pagos from "../Pages/Payments/Pagos";
import Factura from "../Pages/Factura/Factura";
import Checked from "../Pages/Checked/Checked";
import PayDone from "../Pages/Pagos2/Pagos2";
import Simresults from "../Pages/Simresults/Simresults";

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
        path: "/profile",
        element: <Perfil></Perfil>,
    },
    {
        path: "/detail",
        element: <Detalle/>,
    },
    {
     path: "/simulation",   
     element: <Simulv2></Simulv2>,
    },
    {
     path: "/postventa",   
     element: <PostVenta></PostVenta>,
    },
    {
        path: "/postventaform",   
        element: <PostVentaform></PostVentaform>,
       }
    
    ,{
     path: "/home",   
     element: <Home/>,
    },
    {
    path: "/dashboard/project",
    element: <ProjectDetail/>,
    },
    {
    path: "/dashboard",
    element: <Dashboard/>,
    },
    
    {
       path: "/pagos",
        element: <Pagos/>
     
    },

    {
        path: "/factura",
        element: <Factura/>
    },
    
    { path: "/checked",
        element: <Checked/>
    },

    { path: "/pagos/paydone",
        element: <PayDone/>
    }
    ])

export default routes;