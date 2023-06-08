import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { UserContext } from "../Context/AuthProvider";
import { useContext } from "react";
import { Toaster, toast } from "react-hot-toast";
const Login = () => {
  const { login,googleLogin } = useContext(UserContext);
  const location = useLocation();
  const naviget = useNavigate();
  const from = location?.state?.from.pathname || "/";
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { email, password } = data;
    login(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
        naviget(from, { replace: true })
      })
      .catch((err) => {
        console.log(err.message);
        toast.error(err.message);
      });
  };
  const LoginWithGoogle = () => {
    googleLogin()
    .then((result) => {
      const user = result.user;
      const userInfo = {name:user.displayName,email:user?.email,imageUrl:user.photoURL}
      fetch(`http://localhost:5000/users/${user?.email}`,{
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
          naviget(from, { replace: true })
        
      })
    })
    .catch((err) => {
      console.log(err.message);
      toast.error(err.message)
    })
  }
  return (
    <>
      <div className="flex justify-center items-center my-5 p-5">
        <div className="w-full max-w-[500px] p-6 rounded-2xl sm:p-10 bg-gray-100 text-gray-900">
          <h2 className="text-2xl font-bold text-center py-2">
            Login To Musicy
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  {...register("email", { required: true })}
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                />
                {errors.email && (
                  <span className="text-rose-500">Please enter your email</span>
                )}
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="********"
                  {...register("password", { required: true })}
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                />
                {errors.password && (
                  <span className="text-rose-500">
                    Please enter your password
                  </span>
                )}
              </div>
            </div>
            <div className="py-3">
              <button
                type="submit"
                className="bg-amber-600 w-full rounded-md py-3 text-white"
              >
                Login
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
            {`Don't have an account?`}
            <Link
              to="/signup"
              className="hover:underline hover:text-rose-500 text-gray-600"
            >
              SignUp
            </Link>
            .
          </p>
        </div>
      </div>
      <Toaster></Toaster>
    </>
  );
};

export default Login;
