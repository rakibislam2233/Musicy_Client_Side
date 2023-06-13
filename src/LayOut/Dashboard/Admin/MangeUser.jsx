import { useQuery } from "react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import { FcBusinessman, FcPortraitMode, FcVoicePresentation } from "react-icons/fc";
import { useAdmin } from "../../../Hook/useAdmin";
import { useInstructor } from "../../../Hook/useInstructor";
import axios from "axios";
const MangeUser = () => {
  const [axiosSecure] = useAxiosSecure()

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
        fetch(`https://musicy-server-side.vercel.app/admin/${id}`, {
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
  const handleMakeinstructor= (user) => {
    const {_id,email,name,imageUrl} = user;
    const newUser = {_id,email,name,image:imageUrl};
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
        axios.post(`https://musicy-server-side.vercel.app/instructor`,newUser)
          .then((res) => {
            refetch();
            if (res.data.result.modifiedCount > 0) {
              Swal.fire("Success", "Make Instructor Successfuly");
            }
          });
      }
    });
  };
  return (
    <div className="w-full p-5 h-full">
      <h2 className="text-3xl font-semibold text-center">Manage User</h2>
      <div className="overflow-x-auto w-full my-3">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>UserPhoto</th>
              <th>User Name</th>
              <th>User Email</th>
              <th>Role</th>
              <th>Admin</th>
              <th>Instructor</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, i) => (
              <tr key={i}>
                <td>
                  <img
                    className="w-12 h-12 rounded-full"
                    src={user.imageUrl}
                    alt=""
                  />
                </td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <th>{ user.role ? user.role : 'student'}</th>
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
                        onClick={() => handleMakeinstructor(user)}
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
