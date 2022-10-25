import React, { useContext } from 'react';
import { AuthContext } from '../context/UserContext';

const Home = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <h3>Home {user?.email}</h3> 
        </div>
    );
};

export default Home;