import { useContext } from "react";
import { UserContext } from "../Component/Context/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "react-query";

export const useInstructor = () => {
    const {user} = useContext(UserContext);
    const [axiosSecure] = useAxiosSecure()
    const {data:isInstructor,isLoading:isInstructorLoading} = useQuery({
        queryKey:['isInstructor', user?.email],
        queryFn:async()=>{
            const res = await axiosSecure.get(`/instructor/${user?.email}`)
            return res.data.instructor 
        }
    })
    return [isInstructor,isInstructorLoading]
};

