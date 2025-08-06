import { createBrowserRouter } from "react-router";
import Header from "../component/Header";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from "../pages/CategoryNews";
import Home from "../pages/Home";

const router = createBrowserRouter(
    [
        {
            path:"/",
           element:<HomeLayout></HomeLayout>,
           children:[
            {
                path:"",
                element:<Home></Home>
            },
            {
                path:"/category/:id",
                element:<CategoryNews></CategoryNews>,
                loader: () => fetch("/public/news.json"),
            },
           ]
        },
           
        {
            path:"auth",
            element:<h2>Authintication path</h2>
        },
        {
            path:"news",
            element:<h2>the new newspaper</h2>
        },
        {
            path:"/*",
            element:<h2>Error404</h2>
        }

    ]
)

export default router;