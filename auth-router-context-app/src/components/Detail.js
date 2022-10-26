import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Detail = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div className=' p-20'>
            <div className="card container card-compact  m-auto bg-base-100 shadow-xl">
                <figure><img src={data.logo} alt="Shoes" /></figure>
                <div className="card-body text-left">
                    <h2 className="card-title"> In This Course</h2>
                    <p>{data.detail}</p>
                    <h2 className="card-title">About techTEACH</h2>
                    <p>{data.about}</p>
                    <h2 className="card-title underline">Price: {data.price}TK</h2>
                    <h2 className="card-title text-primary">{data.total}h 00m</h2>
                    <div className="card-actions justify-end">
                    <Link to='/getPremium'><button className="btn btn-primary">Get premium access.</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;