import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import useAxiosSecure from '../../../Hook/useAxiosSecure';
import { UserContext } from '../../../Component/Context/AuthProvider';

const MySelectedClass = () => {
    const {user} = useContext(UserContext)
    const [axiosSecure] = useAxiosSecure()
    const { data: selectClass = [], refetch } = useQuery(["selectClass",user?.email], async () => {
        const res = await axiosSecure(`/selectedClass/${user?.email}`);
        return res.data  ;
      });
      console.log(selectClass);
    return (
        <div>
            
        </div>
    );
};

export default MySelectedClass;