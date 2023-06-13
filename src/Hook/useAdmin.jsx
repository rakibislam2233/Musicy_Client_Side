import { useContext } from "react";
import { UserContext } from "../Component/Context/AuthProvider";
import { useQuery } from "react-query";
import useAxiosSecure from "./useAxiosSecure";

export const useAdmin = () => {
    const {user,loading} = useContext(UserContext);
    (user);
    const [axiosSecure] = useAxiosSecure()
    const {data:isAdmin=[],isLoading:isAdminLoading} = useQuery({
        queryKey:['isAdmin', user?.email],
        enabled: !loading,
        queryFn:async()=>{
            const res = await axiosSecure.get(`/admin/${user?.email}`)
            return res.data.admin
        }
    })
    return [isAdmin,isAdminLoading]
};

