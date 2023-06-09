import { useContext } from "react";
import { UserContext } from "../Component/Context/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "react-query";

export const useAdmin = () => {
    const {user} = useContext(UserContext);
    const [axiosSecure] = useAxiosSecure()
    const {data:isAdmin,isLoading:isAdminLoading} = useQuery({
        queryKey:['isAdmin', user?.email],
        queryFn:async()=>{
            const res = await axiosSecure.get(`/admin/${user?.email}`)
            return res.data.admin
        }
    })
    return [isAdmin,isAdminLoading]
};

