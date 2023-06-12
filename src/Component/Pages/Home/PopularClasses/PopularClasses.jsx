import React, { useEffect, useState } from 'react';
import ClassesDetails from '../../Classes/ClassesDetails';
import Details from './Details';
const PopularClasses = () => {
    const [popularClasses,setpopularClasses] = useState([]);
    useEffect(()=>{
      fetch(`https://musicy-server-side.vercel.app/approvedClass`)
      .then(res=>res.json())
      .then(data=>{
        setpopularClasses(data)
      })
    },[])
    console.log(popularClasses);
    return (
        <div className="py-5">
        <h2 className="text-center font-semibold text-3xl py-5">All Classes</h2>
         <div className="w-full grid grid-cols-3 gap-5 py-5">
          {
            popularClasses.slice(0,6).map((singleClass,i) =><Details key={i} singleClass={singleClass}></Details>)
          }
         </div>
        </div>
    );
};

export default PopularClasses;