import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className="container p-5  ">
            <h1 className='text-5xl mb-8 text-left border-b-4 '>Blogs </h1>

                <div className='mb-4'>
                    <h2 className='text-2xl'>
                    What is CORS?
                    </h2>
                    <p>CORS stands for Cross-Origin Resource Sharing . It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API</p>
                </div>
                <div className='mb-4'>
                    <h2 className='text-2xl'>
                    Why are you using firebase? What other options do you have to implement authentication?
                    </h2>
                    <p>The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.</p>
                    <p>Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p>             
                </div>
                <div className='mb-4'> 
                    <h2 className='text-2xl'>
                    How does the private route work?
                    </h2>
                    <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated</p>
                </div>
                <div className='mb-4'> 
                    <h2 className='text-2xl'>
                    What is Node? How does Node work?
                    </h2>
                    <p>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;