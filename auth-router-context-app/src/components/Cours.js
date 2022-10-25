import React from 'react';
import { Link } from 'react-router-dom';

const Cours = ({co}) => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl m-20">
            <figure className='bg-neutral w-96'><img className=' w-96' src={co.logo} alt="Album"/></figure>
            <div className="card-body">
                <h2 className="card-title text-4xl">{co.name}</h2>
                <p className='text-l text-left'>{co.detail}</p>
                <div className="card-actions justify-end">
                <button className=" btn btn-primary">View Details...</button>
                </div>
            </div>
        </div>
    );
};

export default Cours;