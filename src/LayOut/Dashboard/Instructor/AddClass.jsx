import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../Component/Context/AuthProvider";
import axios from "axios";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import Swal from "sweetalert2";

const AddClass = () => {
    const {user} = useContext(UserContext)
    const [axiosSecure] = useAxiosSecure()
    const { register, handleSubmit,reset, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    const image = data.photo[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMGBB_KEY
    }`;
    axios.post(url, formData)
    .then(res=>{
      const imageUrl = res.data.data.display_url;
      const {className,instructorName,instructorEmail,price,availableSeats} = data;
      const classData = {className,instructorName,image:imageUrl,price ,availableSeats,instructorEmail,status:'Pending'};
      axios.post(`http://localhost:5000/instructor/addClass`, classData)
      .then(res=>{
        if(res.data.insertedId){
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Add Class Successfully',
            showConfirmButton: false,
            timer: 1500
          })
          reset()
        }
      })
     
    })
  };
  return (
    <div className="w-full md:w-[75%] ">
        <h2 className="text-center text-3xl font-semibold py-2">Add a Class</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full border px-8 py-3 rounded-2xl"
      >
        <div className="">
          <div className="w-full form-control">
            <label className="label">
              <span className="label-text">Class name*</span>
            </label>
            <input
              type="text"
              placeholder="Class name"
              className="input input-bordered  focus:border-rose-600"
              {...register("className", { required: true })}
            />
            {errors.className && (
              <span className="text-rose-500">Please Enter Class Name</span>
            )}
          </div>
          <div className="w-full form-control">
            <label className="label">
              <span className="label-text">Instructor name*</span>
            </label>
            <input
              type="text"
              placeholder="Instructor name"
              className="input input-bordered  focus:border-rose-600"
              {...register("instructorName", { required: true })}
              defaultValue={user.displayName}
              readOnly
            />
            {errors.instructorName && (
              <span className="text-rose-500">Please Enter Instructor name</span>
            )}
          </div>
        </div>
        <div className="w-full form-control">
            <label className="label">
              <span className="label-text">Instructor email*</span>
            </label>
            <input
              type="text"
              placeholder="Instructor email"
              className="input input-bordered  focus:border-rose-600"
              {...register("instructorEmail", { required: true })}
              defaultValue={user.email}
              readOnly
            />
            {errors.instructorEmail && (
              <span className="text-rose-500">
                Please Enter Instructor email
              </span>
            )}
          </div>
        <div className="md:flex justify-between gap-5">
        <div className="w-full form-control">
            <label className="label">
              <span className="label-text">Price*</span>
            </label>
            <input
              type="text"
              placeholder="Price"
              className="input input-bordered  focus:border-rose-600"
              {...register("price", { required: true })}
            />
            {errors.price && (
              <span className="text-rose-500">
                Please Enter Price
              </span>
            )}
          </div>
          <div className="w-full form-control">
            <label className="label">
              <span className="label-text">Available seats*</span>
            </label>
            <input
              type="number"
              placeholder="Available seats"
              className="input input-bordered  focus:border-rose-600"
              {...register("availableSeats", { required: true })}
            />
            {errors.availableSeats && (
              <span className="text-rose-500">Please Enter Available seats</span>
            )}
          </div>
        </div>

        <div className="form-control py-2">
        <label className="label">
              <span className="label-text">Class Image*</span>
            </label>
          <input
            type="file"
            name=""
            {...register("photo", { required: true })}
          />
          {errors.photo && (
            <span className="text-rose-500">Please Enter Class Image</span>
          )}
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#886124]">Add Class</button>
        </div>
      </form>
    </div>
  );
};

export default AddClass;
