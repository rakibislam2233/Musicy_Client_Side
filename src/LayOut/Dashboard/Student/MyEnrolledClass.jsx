import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../Component/Context/AuthProvider";
import axios from "axios";

const MyEnrolledClass = () => {
  const { user } = useContext(UserContext);
  const [enrolled, setEnrolled] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/enrolledClass/${user?.email}`)
      .then((res) => {
        (res.data);
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
              My Enrolled Classes
            </h3>
            <div className="overflow-x-auto w-full my-3">
              <table className="table w-full">
                {/* head */}
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>UserEmail</th>
                    <th>ClassName</th>
                    <th>InstructorName</th>
                    <th>Price</th>
                    <th>PaymentStatus</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {enrolled?.map((user, i) => (
                    <tr>
                      <td>
                        <img
                          className="w-12 h-12 rounded"
                          src={user.image}
                          alt=""
                        />
                      </td>
                      <td>{user.userEmail}</td>
                      <td>{user.className}</td>
                      <td>{user.instructorName}</td>
                      <td>${user.price}</td>
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

export default MyEnrolledClass;
//  CheckoutForm
