import { useQuery } from "react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import { FcBusinessman, FcPortraitMode, FcVoicePresentation } from "react-icons/fc";
import { useAdmin } from "../../../Hook/useAdmin";
import { useInstructor } from "../../../Hook/useInstructor";
const MangeUser = () => {
  const [axiosSecure] = useAxiosSecure()
  const [isAdmin] = useAdmin()
  const [isInstructor] = useInstructor()
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure(`/users`);
    return res.data  ;
  });
  const handleMakeAdmin = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to Make Admin",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes,Make Admin",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/admin/${id}`, {
          method: "PATCH",
        })
          .then((res) => res.json())
          .then((data) => {
            refetch();
            if (data.modifiedCount > 0) {
              Swal.fire("Success", "Make Admin Successfuly");
            }
          });
      }
    });
  };
  const handleMakeinstructor= (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to Make Instructor",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes,Make Instructor",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/instructor/${id}`, {
          method: "PATCH",
        })
          .then((res) => res.json())
          .then((data) => {
            refetch();
            if (data.modifiedCount > 0) {
              Swal.fire("Success", "Make Instructor Successfuly");
            }
          });
      }
    });
  };
  return (
    <div className="w-full p-5">
      <h2 className="text-3xl font-semibold text-center">Manag User</h2>
      <div className="overflow-x-auto w-full my-3">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>UserPhoto</th>
              <th>User Name</th>
              <th>User Email</th>
              <th>Admin</th>
              <th>Instructor</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, i) => (
              <tr>
                <td>
                  <img
                    className="w-12 h-12 rounded-full"
                    src={user.imageUrl}
                    alt=""
                  />
                </td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user?.role === "admin" || user?.role === "instructor" ? (
                    <>
                      <button disabled className="p-2 rounded bg-gray-500">
                      <FcBusinessman className="w-6 h-6"></FcBusinessman>
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => handleMakeAdmin(user._id)}
                        className="p-2 rounded bg-amber-500"
                      >
                       <FcBusinessman className="w-6 h-6"></FcBusinessman>
                      </button>
                    </>
                  )}
                </td>
                <td>
                {user?.role === "instructor" || user?.role === "admin" ? (
                    <>
                      <button disabled className="p-2 rounded bg-rose-500">
                      <FcVoicePresentation className="w-6 h-6"></FcVoicePresentation>
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => handleMakeinstructor(user._id)}
                        className="p-2 rounded bg-rose-500"
                      >
                        <FcVoicePresentation className="w-6 h-6"></FcVoicePresentation>
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
 
  );
};

export default MangeUser;
