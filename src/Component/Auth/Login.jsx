import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
const Login = () => {
   const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='flex justify-center items-center my-5 p-5'>
        <div className='w-full max-w-[500px] p-6 rounded-2xl sm:p-10 bg-gray-100 text-gray-900'>
          <h2 className='text-2xl font-bold text-center py-2'>Login To Musicy</h2>
          <form
         onSubmit={handleSubmit(onSubmit)}
            className='space-y-2'
          >
            <div className='space-y-4'>
              <div>
                <label htmlFor='email' className='block mb-2 text-sm'>
                  Email
                </label>
                <input
                  type='email'
                  placeholder="Enter Your Email"
                  {...register("email", { required: true })}
                  className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                />
                  {errors.email && <span className="text-rose-500">Please enter your email</span>}
              </div>
              <div>
                <label htmlFor='password' className='block mb-2 text-sm'>
                  Password
                </label>
                <input
                  type='password'
                  placeholder='********'
                  {...register("password", { required: true })}
                  className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                />
                {errors.password && <span className="text-rose-500">Please enter your password</span>}
              </div>
            </div>
            <div className='py-3'>
              <button
                type='submit'
                className='bg-amber-600 w-full rounded-md py-3 text-white'
              >
              Login
              </button>
            </div>
          </form>
          <div className='flex items-center py-2'>
            <div className='w-full h-[1px]  bg-gray-500'></div>
            <div className='mx-3'>Or</div>
            <div className='w-full h-[1px] bg-gray-500'></div>
          </div>
          <div className='flex justify-center items-center space-x-2 border m-3 p-2 rounded-xl border-gray-500 cursor-pointer'>
            <FcGoogle size={32} />
  
            <p>Continue with Google</p>
          </div>
          <p className='px-6 text-sm text-center text-gray-400'>
          {`Don't have an account?`}
            <Link
              to='/signup'
              className='hover:underline hover:text-rose-500 text-gray-600'
            >
             SignUp
            </Link>
            .
          </p>
        </div>
      </div>
    );
};

export default Login;