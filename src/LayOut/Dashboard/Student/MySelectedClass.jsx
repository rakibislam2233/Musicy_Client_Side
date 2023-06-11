import { useQuery } from "react-query";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import { getShoppingCart } from "../../../utilities/fakedb";

const MySelectedClass = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: classes = [], refetch } = useQuery(["singleClass"], async () => {
      const res = await axiosSecure(`/approvedClass`);
      return res.data  ;
    });
    const checked = getShoppingCart()
    const selected = Object.keys(checked)
    const locData = []
    selected.forEach(check=>{
        const supData = classes.filter(checkId => checkId._id === check) 
        locData.push(...supData)
    })
    return (
        <div>
            
        </div>
    );
};

export default MySelectedClass;