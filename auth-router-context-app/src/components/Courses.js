import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cours from './Cours';
import './Courses.css';

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses);
    return (
        <div className='grid'>
            <div className=''>
                <h5 className='text-3xl border-b-2 text-left p-3'>All Courses</h5>
                <ul className="menu bg-light bg-base-100 w-100 ">
                    {
                        courses.map(c =>
                            (<li>
                                <a className='border-l-4 border-l-primary m-2'>{c.name}</a>
                            </li>))
                    }
                </ul>
            </div>
            <div className=' m-5'>
                {
                    courses.map(co => (
                        <Cours key={co.id} co={co}></Cours>
                    ))
                    }
            </div>
        </div>
    );
};

export default Courses;