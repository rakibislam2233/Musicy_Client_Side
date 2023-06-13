import { useContext } from "react";
import { UserContext } from "../Component/Context/AuthProvider";
import { useQuery } from "react-query";
import useAxiosSecure from "./useAxiosSecure";

export const useInstructor = () => {
    const {user,loading} = useContext(UserContext);
    const [axiosSecure] = useAxiosSecure()
    const {data:isInstructor=[],isLoading:isInstructorLoading} = useQuery({
        queryKey:['isInstructor', user?.email],
        enabled: !loading,
        queryFn:async()=>{
            const res = await axiosSecure.get(`/instructor/${user?.email}`)
            return res.data.instructor 
        }
    })
    return [isInstructor,isInstructorLoading]
};
