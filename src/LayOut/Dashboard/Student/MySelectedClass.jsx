import { useQuery } from "react-query";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import { getShoppingCart } from "../../../utilities/fakedb";
import SelectedTable from "./SelectedTable";
const MySelectedClass = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: classes = [], refetch } = useQuery(
    ["singleClass"],
    async () => {
      const res = await axiosSecure(`/approvedClass`);
      return res.data;
    }
  );
  const checked = getShoppingCart();
  const selected = Object.keys(checked);
  const locData = [];
  selected.forEach((check) => {
    const supData = classes.filter((checkId) => checkId._id === check);
    locData.push(...supData);
  });
  return (
    <>
      {locData.length === 0 ? (
        <div><h2 className="text-xl font-semibold">No Data Available</h2></div>
      ) : (
        <>
          <div className="w-full p-5">
            <h3 className="text-3xl font-semibold text-center">
              My Selected Classes
            </h3>
            <div className="overflow-x-auto w-full my-3">
              <table className="table w-full">
                {/* head */}
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>ClassName</th>
                    <th>instructorName</th>
                    <th>InstructorEmail</th>
                    <th>AvaiableSeats</th>
                    <th>Price</th>
                    <th>Pay</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {locData.map((user, i) => <SelectedTable user={user} key={i}></SelectedTable>)}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MySelectedClass;
