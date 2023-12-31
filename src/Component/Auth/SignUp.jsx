import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import { UserContext } from "../Context/AuthProvider";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import { Toaster, toast } from "react-hot-toast";
const SignUp = () => {
  const {createNewUser,googleLogin } = useContext(UserContext)
  const [error, setError] = useState("");
  const naviget = useNavigate()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setError("");
    if (data.password !== data.confirmPassword) {
      return setError(`Password Dos't Match`);
    }
    //imagebb website photo Upload
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMGBB_KEY
    }`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        const imageUrl = imageData.data.display_url;
        const {name,email,password,confirmPassword} = data;
        createNewUser(email, password).then((result) => {
          const user = result.user;
          updateProfile(user,{
            displayName:name,
            photoURL:imageUrl
          })
          const userInfo = {name,email,imageUrl}
          fetch(`https://musicy-server-side.vercel.app/users/${email}`,{
            method:"PUT",
            headers:{
              'content-type': 'application/json'
            },
            body:JSON.stringify(userInfo)
          })
          .then(res=>res.json())
          .then(data=>{
            (data);
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Create New User Successfully',
                showConfirmButton: false,
                timer: 1500
              })
              reset()
              naviget('/login')          
          })
          .catch(err => {
            toast.error(err.message)
          })
        })
        .catch((err) => {
          (err.message);
          toast.error(err.message)
        })
      });
  };
  const LoginWithGoogle = () => {
    googleLogin()
    .then((result) => {
      const user = result.user;
      const userInfo = {name:user.displayName,email:user?.email,imageUrl:user.photoURL}
      fetch(`https://musicy-server-side.vercel.app/users/${user?.email}`,{
        method:"PUT",
        headers:{
          'content-type': 'application/json'
        },
        body:JSON.stringify(userInfo)
      })
      .then(res=>res.json())
      .then(data=>{
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Login Successfully',
            showConfirmButton: false,
            timer: 1500
          })
          reset()
          naviget('/')
        
      })
      .catch(err => {
        toast.error(err.message)
      })
    })
    .catch((err) => {
      (err.message);
      toast.error(err.message)
    })
  }
  return (
   <>
    <div className="flex justify-center items-center my-5 p-5">
      <div className="w-full max-w-[500px] p-6 rounded-2xl sm:p-10 bg-gray-100 text-gray-900">
        <h2 className="text-2xl font-bold text-center py-2">
          Create your Musicy account
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter Your Name"
                {...register("name", { required: true })}
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
              />
              {errors.name && (
                <span className="text-rose-500">Please enter your name</span>
              )}
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="Enter Your Email"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
              />
              {errors.email && (
                <span className="text-rose-500">Please enter your email</span>
              )}
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Password
              </label>
              <input
                type="password"
                placeholder="********"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 15,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                })}
              />
              {errors.password?.type === "required" && (
                <span className="text-rose-500">
                  Please Enter Your Password
                </span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="text-rose-500">
                  Password must be 6 characters
                </span>
              )}
              {errors.password?.type === "maxLength" && (
                <span className="text-rose-500">
                  Password must be less then 15 characters
                </span>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-rose-500">
                  Password must have one Uppercase one lower case, one number
                  and one special character.
                </p>
              )}
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="********"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                {...register("confirmPassword", {
                  required: true,
                })}
              />
              {errors.confirmPassword && (
                <span className="text-rose-500">
                  Please Enter Your Confirm Password
                </span>
              )}
              {error ? <span className="text-rose-500">{error}</span> : ""}
            </div>

            <div>
              <label htmlFor="image" className="block mb-2 text-sm">
                Photo URL:
              </label>
              <input
                type="file"
                {...register("image", {
                })}
              />
            </div>
          </div>
          <div className="py-3">
            <button
              type="submit"
              className="bg-amber-600 w-full rounded-md py-3 text-white"
            >
              Create Account
            </button>
          </div>
        </form>
        <div className="flex items-center py-2">
          <div className="w-full h-[1px]  bg-gray-500"></div>
          <div className="mx-3">Or</div>
          <div className="w-full h-[1px] bg-gray-500"></div>
        </div>
        <div onClick={LoginWithGoogle} className="flex justify-center items-center space-x-2 border m-3 p-2 rounded-xl border-gray-500 cursor-pointer">
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </div>
        <p className="px-6 text-sm text-center text-gray-400">
          Already have an account?
          <Link
            to="/login"
            className="hover:underline hover:text-rose-500 text-gray-600"
          >
            Login
          </Link>
          .
        </p>
      </div>
    </div>
    <Toaster></Toaster>
   </>
  );
};

export default SignUp;
