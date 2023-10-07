
import { Link, NavLink } from 'react-router-dom';
import { FaCartPlus } from "react-icons/fa6";
import { useContext, useEffect } from 'react';
import Aos from "aos";
import 'aos/dist/aos.css'
import { AuthContext } from '../../Utility/AuthProvider/Authprovider';

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then()
            .catch(err => {
                console.error(err);
            })
    }

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>

    </>

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div>
            <div className="navbar bg-white" data-aos="fade-left">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <Link to="/"><img className='w-40' src="https://i.ibb.co/g7fPMy2/Screenshot-2023-10-07-002129.png" alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className='navbar-end'>
                    <div className=" flex items-center text-3xl">
                        <FaCartPlus />
                    </div>
                    {
                        user ?
                            <button onClick={handleSignOut} className="btn btn-sm ml-7 text-lg">Sign Out</button>
                            : 
                            <div className='flex'>
                                <li><NavLink className='btn btn-sm ml-2 text-lg' to='/register'>Register</NavLink></li>
                                <button className='btn btn-sm ml-2 text-lg'><NavLink to="/Login">Login</NavLink></button>
                            </div>
                    }
                    
                </div>

            </div>
        </div>
    );
};

export default NavBar;