import React from 'react';
import { useLoaderData } from 'react-router-dom';

const GetPremium = () => {
    const data = useLoaderData()

    return (
        <div>
            <div className="m-auto card w-96 bg-base-100 shadow-xl">
                <div className="card-body text-left">
                    <h2 className="card-title">{data.name}</h2>
                    <div className='flex justify-between m-2 bg-gray-400 p-2'>
                        <p>Price:</p>
                        <p className='text-right'>{data.price}</p>
                    </div>
                    <div className='flex justify-between m-2 bg-gray-400 p-2'>
                        <p>Quantity:</p>
                        <p className='text-right'>1</p>
                    </div>
                    <div className='flex justify-between m-2 bg-gray-400 p-2'>
                        <p>Tax:</p>
                        <p className='text-right'>0%</p>
                    </div>
                    <div className='flex justify-between m-2 bg-gray-400 p-2'>
                        <p>Total:</p>
                        <p className='text-right underline' >{data.price}</p>
                    </div>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetPremium;