import React from 'react';
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../../public/ErrorPages/ErrorPages.json";
import { Link } from 'react-router-dom';
const Errorpage = () => {
    return (
        <div>
             <div className='flex justify-center py-5 '>
             <Link to={'/'}><button className='py-2 font-semibold text-white px-5 rounded-xl bg-amber-500'>Back To Home</button></Link>
             </div>
             <Lottie className='w-1/2 h-[500px] mx-auto' animationData={groovyWalkAnimation} loop={true} />
            
        </div>
    );
};

export default Errorpage;