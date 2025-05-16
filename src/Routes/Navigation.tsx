import { createHashRouter } from "react-router-dom";

const routes = createHashRouter([
    {
        path: "/",
        element: <div>Home</div>,
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