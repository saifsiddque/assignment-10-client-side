import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';
import { FaCode } from "react-icons/fa";
import { Bars3Icon, BeakerIcon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const [open , setOpen] = useState(false);
    const {user, logOut} = useContext(AuthContext)
    console.log('context',user);

    const handleSingOut = () =>{
        logOut()
        .then( () =>{})
        .catch( () =>{})
    } 

    return (
        <div>
            <div className="navbar bg-primary text-primary-content ">
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="bg-primary bg-primary menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li className='bg-primary'><Link className="bg-primary btn btn-ghost normal-case text-xl ml-0 " to='/courses'>Courses</Link></li>
                        <li className='bg-primary'><Link className="bg-primary btn btn-ghost normal-case text-xl ml-0 " to='/faq'>FAQ</Link></li>
                        <li className='bg-primary' ><Link className=" btn btn-ghost normal-case text-xl ml-0 " to='/blogs'>Blogs</Link></li>
                    </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl ">
                        <FaCode className='h-18 text-5xl mr-3'></FaCode> techTEACH
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className= "menu menu-horizontal p-0 bg-primary">
                    <li><a><Link className="btn btn-ghost normal-case text-xl ml-0 " to='/courses'>Courses</Link></a></li>
                    <li><a><Link className="btn btn-ghost normal-case text-xl ml-0 " to='/faq'>FAQ</Link></a></li>
                    <li><a><Link className="btn btn-ghost normal-case text-xl ml-0 " to='/blogs'>Blogs</Link></a></li>

                    
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className='flex items-center'>
                        {user?.uid? 
                        <>
                            <span>
                                <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
                                    <img style={{'borderRadius':'50%'}} className=' h-12 rounded-full mr-2' src={user.photoURL} alt="" />
                                </div>

                            </span>
                            <Link onClick={handleSingOut} className=" btn btn-sm ">Log Out</Link>

                        </> : <Link to='/login' className="btn btn-sm ml-2">log in</Link>
                        }
                        <label className="label cursor-pointer">
                            <input type="checkbox" className="toggle"  />
                        </label>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Header;