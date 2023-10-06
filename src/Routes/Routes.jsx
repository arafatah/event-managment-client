import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import ErrorElement from '../Pages/ErrorElement/ErrorElement';
import Home from '../Components/Home/Home';
import Blog from '../Pages/Blog/Blog';

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
            }
        ]
    }
])

export default Routes;