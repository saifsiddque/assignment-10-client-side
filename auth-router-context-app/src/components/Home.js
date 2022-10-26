import React, { useContext } from 'react';
import { AuthContext } from '../context/UserContext';
import { FaCode } from "react-icons/fa";


const Home = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <h1 className='p-5 text-5xl text-left text-primary border-b-4 border-primary'>techTEACH</h1>
            <div className='flex p-10 flex-row '>
                <div className='p-5 mb-24'>
                    <h1 className='text-5xl mb-8 text-left'>Welcome to techTEACH </h1>
                    <p className='text-left'>
                        In this website  dolor sit amet consectetur adipisicing elit. Vitae impedit architecto dolores sed obcaecati neque, unde nisi libero voluptate, culpa nulla odio facilis nihil magni modi optio. Officiis reprehenderit voluptatum sed quod maxime odit voluptate animi doloremque. Impedit, qui rem obcaecati perspiciatis architecto cupiditate! Est qui provident nesciunt, voluptatibus sint dolores reiciendis minima iste fugit id placeat maiores inventore excepturi doloremque laudantium pariatur, quidem totam. Cum accusantium perspiciatis, possimus quo atque ullam? Esse, vel harum totam aperiam eum cum? Repellat dolore impedit, vel nihil officia delectus ipsa quibusdam at explicabo nemo ea saepe. Corporis molestiae accusamus sunt nobis, quisquam et? Debitis omnis, similique inventore voluptatibus neque voluptate temporibus minima ea nulla quam commodi esse perspiciatis, adipisci impedit explicabo aspernatur, cumque incidunt perferendis tempore! Consectetur odit reprehenderit ipsa earum quo aperiam assumenda omnis, repellendus nam. Modi sed, quaerat ut odit magni velit, ipsam quod id, adipisci optio est distinctio consequuntur dicta.
                    </p>
                </div>
            </div> 
        </div>
    );
};

export default Home;