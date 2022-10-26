import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';
import { FaCode } from "react-icons/fa";

const Header = () => {
    const {user, logOut} = useContext(AuthContext)
    console.log('context',user);

    const handleSingOut = () =>{
        logOut()
        .then( () =>{})
        .catch( () =>{})
    } 

    return (
        <div>
            <div className="navbar bg-primary text-primary-content flex justify-between"> 
                <div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">
                        <FaCode className='h-18 text-5xl mr-3'></FaCode> techTEACH
                    </Link>
                    <Link className="btn btn-ghost normal-case text-xl" to='/courses'>Courses</Link>
                    <Link className="btn btn-ghost normal-case text-xl" to='/orders'>FAQ</Link>
                    <Link className="btn btn-ghost normal-case text-xl" to='/login'>Blog</Link>
                    <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
                      
                </div>
                <div>
                    {user?.uid? 
                    <>
                        <span>
                            <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
                                <img style={{'borderRadius':'50%'}} className=' h-12 rounded-full mr-2' src={user.photoURL} alt="" />
                            </div>
                        </span>
                        
                    </> : <Link to='/login' className="btn btn-sm ml-2">log in</Link>
                   
                    }
                    
                
                        <button onClick={handleSingOut} className="btn btn-sm ml-2">Log Out</button>
                        
                    
                    <label className="label cursor-pointer">
                        <input type="checkbox" className="toggle"  />
                    </label>
                </div>
                {console.log(user)}
                
            
            </div>
        </div>
    );
};

export default Header;