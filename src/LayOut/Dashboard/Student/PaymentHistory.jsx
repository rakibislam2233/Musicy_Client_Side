import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../Component/Context/AuthProvider";
import axios from "axios";

const PaymentHistory = () => {
  const { user } = useContext(UserContext);
  const [enrolled, setEnrolled] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/enrolledClass/${user?.email}`)
      .then((res) => {
        setEnrolled(res.data);
      });
  }, []);
  return (
    <>
      {enrolled?.length === 0 ? (
        <div>
          <h2 className="text-xl font-semibold">No Data Available</h2>
        </div>
      ) : (
        <>
          <div className="w-full p-5 h-full">
            <h3 className="text-3xl font-semibold text-center">
              My Payment History
            </h3>
            <div className="overflow-x-auto w-full my-3">
              <table className="table w-full">
                {/* head */}
                <thead>
                  <tr>
                    <th>Transaction Id</th>
                    <th>Date</th>
                    <th>PaymentStatus</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {enrolled?.map((user, i) => (
                    <tr>
                      <td>{user.transactionId}</td>
                      <td>{user.date}</td>
                      <td className="font-semibold">{user.paymentStatus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default PaymentHistory;
