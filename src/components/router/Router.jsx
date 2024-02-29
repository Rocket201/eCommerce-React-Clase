import { createBrowserRouter } from "react-router-dom";
import App from "../components/App.jsx";
import Home from "../components/pages/Home.jsx";
import Products from "../components/pages/products.jsx";
import Error404 from "../page/Error404.jsx";


const router= createBrowserRouter([{

    path: "/",
    element: <App/>,
    errorElement: <Error404/>,
    children: [
        {
            index: true,
            element: <Home/>
            
        },
        {
            index:"/productos",
            element: <Products/>
            
        }
    ]
}])

export default router;