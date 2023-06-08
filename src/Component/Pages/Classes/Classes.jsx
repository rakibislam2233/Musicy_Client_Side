import React, { useEffect, useState } from "react";
import Container from "../Shared/Container";
import ClassesDetails from "./ClassesDetails";

const Classes = () => {
    const [classes,setClasses] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/class`)
        .then(res=>res.json())
        .then(data=>{
          setClasses(data);
        })
    },[])
  return (
    <Container>
      <div className="pt-20">
      <h2 className="text-center font-semibold text-3xl py-5">All Classes</h2>
       <div className="w-full grid grid-cols-3 gap-5 py-5">
        {
          classes.map(singleClass => <ClassesDetails singleClass={singleClass}></ClassesDetails>)
        }
       </div>
      </div>
    </Container>
  );
};

export default Classes;
