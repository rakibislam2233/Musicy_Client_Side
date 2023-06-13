import React from 'react';
import { useQuery } from 'react-query';
import useAxiosSecure from './useAxiosSecure';

const getInstructorData = () => {
  const [axiosSecure] = useAxiosSecure()
    const { data: instructor = [], refetch } = useQuery(["instructors"], async () => {
      const res = await axiosSecure(`/instructors`);
      return res.data  ;
    });
    return instructor
};

export default getInstructorData;