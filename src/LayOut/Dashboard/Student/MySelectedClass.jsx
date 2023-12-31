import { useContext, useEffect } from "react";
import SelectedTable from "./SelectedTable";
import { UserContext } from "../../../Component/Context/AuthProvider";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import { useQuery } from "react-query";
const MySelectedClass = () => {
  const { user } = useContext(UserContext);
  const [axiosSecure] = useAxiosSecure();
  const {
    data: MySelectedClass = [],
    refetch,
    isLoading,
  } = useQuery(["MySelectedClass",user?.email], async () => {
    const res = await axiosSecure(
      `/selectedClass/${user?.email}`
    );
    return res.data;
  });
  return (
    <>
      {MySelectedClass.length === 0 ? (
        <div><h2 className="text-xl font-semibold">No Data Available</h2></div>
      ) : (
        <>
          <div className="w-full p-5 h-full">
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
                  {MySelectedClass.map((user, i) => <SelectedTable refetch={refetch} user={user} key={i}></SelectedTable>)}
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
