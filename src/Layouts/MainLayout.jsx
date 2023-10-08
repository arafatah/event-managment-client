
import { Outlet } from 'react-router-dom';
import NavBar from '../Components/Home/NavBar/NavBar';
import { ToastContainer } from 'react-toastify';

const MainLayout = () => {
    return (
        <div className='container mx-auto'>
            <NavBar></NavBar>
            <Outlet></Outlet> 
            <ToastContainer />
        </div>
    );
};

export default MainLayout;