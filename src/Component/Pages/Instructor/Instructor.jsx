import React, { useEffect, useState } from "react";
import Container from "../Shared/Container";
import InstructorDetails from "./InstructorDetails";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import { useQuery } from "react-query";

const Instructor = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: instructor = [], refetch } = useQuery(["instructors"], async () => {
    const res = await axiosSecure(`/instructors`);
    return res.data  ;
  });
  // fetch(`http://localhost:5000/instructors`)
  // .then((res) => res.json())
  // .then((data) => {
  //   setInstructors(data);
  // });
  return (
    <Container>
      <div className="pt-20">
       <h2 className="text-center font-semibold text-3xl py-5">All Instructor</h2>
       <div className="w-full grid grid-cols-3 gap-5 py-5">
        {
         instructor.map(instructor=><InstructorDetails instructor={instructor}></InstructorDetails>)
        }
       </div>
      </div>
    </Container>
  );
};

export default Instructor;
