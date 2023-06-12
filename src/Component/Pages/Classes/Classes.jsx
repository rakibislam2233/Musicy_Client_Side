import React, { useEffect, useState } from "react";
import Container from "../Shared/Container";
import ClassesDetails from "./ClassesDetails";
import axios from "axios";
import { useQuery } from "react-query";
import useAxiosSecure from "../../../Hook/useAxiosSecure";

const Classes = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: classes = [], refetch } = useQuery(["singleClass"], async () => {
    const res = await axiosSecure(`/approvedClass`);
    return res.data  ;
  });
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
