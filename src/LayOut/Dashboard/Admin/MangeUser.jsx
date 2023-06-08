
import { useQuery } from "react-query";
import Swal from "sweetalert2";

const MangeUser = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch(`http://localhost:5000/users`);
    return res.json();
  });
  const handleMakeAdmin = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to Make Admin",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/admin/${id}`, {
          method: "PATCH",
        })
          .then((res) => res.json())
          .then((data) => {
            refetch()
            if (data.modifiedCount > 0) {
              Swal.fire("Success", "Make Admin Successfuly");
            }
          });
      }
    });
  };

  return (
    <div>
      <h2 className="text-3xl font-semibold text-center">Manag User</h2>
      <div className="overflow-x-auto w-full my-3">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Si</th>
              <th>Photo</th>
              <th>User Name</th>
              <th>User Email</th>
              <th>Role</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, i) => (
              <tr>
                <td>{i + 1}</td>
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
                  {user?.role === "admin" ? (
                    <>
                      <button disabled className="btn btn-xs btn-warning">
                        Make Admin
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => handleMakeAdmin(user._id)}
                        className="btn btn-xs btn-warning"
                      >
                        Make Admin
                      </button>
                    </>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="btn btn-xs btn-warning"
                  >
                    Make Instructor
                  </button>
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
