import React from 'react';
import { useQuery } from 'react-query';
import useAxiosSecure from '../../../Hook/useAxiosSecure';

const MySelectedClass = () => {
    const [axiosSecure] = useAxiosSecure()
    const { data: users = [], refetch } = useQuery(["users"], async () => {
        const res = await axiosSecure(`/users`);
        return res.data  ;
      });
    return (
        <div>
            
        </div>
    );
};

export default MySelectedClass;