import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { UserContext } from '../../Context/AuthPorvider/AuthPorvider';

const useAdmin = () => {
    const {users} = useContext(UserContext)
    const [axiosSecure] = useAxiosSecure()
    console.log(users?.email);
    const {data:isAdmin, loading:adminLoading} = useQuery({
        queryKey:["isAdmin",users?.email],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/users/admin/${users?.email}`)
            return res.data.admin;
        }
    })
    return  [isAdmin,adminLoading]
};

export default useAdmin;