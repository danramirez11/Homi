import { createHashRouter } from "react-router-dom";
import Form from "../pages/Form/Form";
import Results from "../pages/Results/Results";

const routes = createHashRouter([
    {
        path: "/",
        element: <div>Home</div>,
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
     path: "simulation ",   
     element: <div>simulation</div>,
    }
    ])

export default routes;