import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import SideBar from '../components/SideBar';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <footer className=' p-2 bg-black text-white static w-full mt-4 bottom-0 mt-40'>
            © 2022 techTEACH, Inc.
            </footer>
        </div>
    );
}; 

export default Main;