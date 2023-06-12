import React, { useEffect, useState } from "react";
import Container from "../Shared/Container";
import ClassesDetails from "./ClassesDetails";
import axios from "axios";
const Classes = () => {
  const [classes,setClasses] = useState([]);
  useEffect(()=>{
    axios.get(`https://musicy-server-side.vercel.app/approvedClass`)
    .then(res=>{
      setClasses(res.data)
    })
  },[])
  return (
    <Container>
      <div className="pt-20">
      <h2 className="text-center font-semibold text-3xl py-5">All Classes</h2>
       <div className="w-full grid grid-cols-4 gap-5 py-5">
        {
          classes.map(singleClass => <ClassesDetails singleClass={singleClass}></ClassesDetails>)
        }
       </div>
      </div>
    </Container>
  );
};

export default Classes;
