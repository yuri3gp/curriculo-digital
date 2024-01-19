import { createBrowserRouter } from "react-router-dom";
import About from "./pages/about";
import Init from "./pages";
import Debug from "./pages/debug";

export const App = createBrowserRouter([
    {
        path: "/",
        element: <Init />
    },
    {
        path:"/debug",
        element:<Debug/>
    },
    {
        path:"/about",
        element: <About/>
    }
]);