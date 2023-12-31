import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import ErrorElement from '../Pages/ErrorElement/ErrorElement';
import Home from '../Components/Home/Home';
import Blog from '../Pages/Blog/Blog';
import ContactNav from '../Pages/ContactNav/ContactNav';
import Login from '../Components/Login/Login';
import Register from '../Components/Register/Register';
import PrivetRoute from './PrivetRoute';
import ServiceDetails from '../Pages/ServiceDetails/ServiceDetails';
import Portfolio from '../Pages/Portfolio/Portfolio';
import Shop from '../Pages/Shop/Shop';

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorElement></ErrorElement>,
        children:[
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path:"/contact",
                element: <ContactNav></ContactNav>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/service/:id",
                element: <PrivetRoute><ServiceDetails></ServiceDetails></PrivetRoute>,
                loader: () => fetch('../serviceData.json')
            },
            {
                path: "/Portfolio",
                element: <PrivetRoute><Portfolio></Portfolio></PrivetRoute>
            },
            {
                path: "shop",
                element: <PrivetRoute><Shop></Shop></PrivetRoute> 
            }
        ]
    }
])

export default Routes;