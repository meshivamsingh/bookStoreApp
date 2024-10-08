import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';

function Login() {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const onSubmit = async data => {
      const userInfo={
        fullname:data.fullname,
        email:data.email,
        password:data.password,
      }
     await axios.post("http://localhost:4001/user/login",userInfo)
      .then((res)=>{
      console.log(res.data)
      if(res.data){
        toast.success('Successfully loggedIn!');
        document.getElementById("my_modal_3").close()
        window.location.reload();
      }
      localStorage.setItem("Users",JSON.stringify(res.data));
      }).catch((err)=>{
       if(err.response){
        console.log(err)
        toast.error("Error:" + err.response.data.message);

       }
      })
    }
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
  <div className="modal-box dark:bg-slate-900 dark:text-white">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={()=>document.getElementById("my_modal_3").close()}>✕</Link>
    
    <h3 className="font-bold text-lg">Login</h3>
<div className='mt-4 space-y-2'>
    <span>Email</span>
    <br />
    <input 
    type='email' 
    placeholder='Enter Your Mail' 
    className='py-1 w-80 px-3 border rounded-md outline-none'
    {...register("email", { required: true })}
    />
    <br />
    {errors.email && <span className='text-sm text-red-600'>This field is required</span>}

</div>
                             {/* PASSWORD  */}
 <div className='mt-4 space-y-2'>
    <span>Password</span>
    <br />
    <input 
    type='password' 
    placeholder='Enter Your Password' 
    className='py-1 w-80 px-3 border rounded-md outline-none'
    {...register("password", { required: true })}
    />
    <br />
    {errors.password && <span className='text-sm text-red-600'>This field is required</span>}

</div>
 {/* Button  */}

 <div className='flex justify-around mt-6'>
    <button className='bg-orange-400 text-white rounded-md px-3 py-1 hover:bg-orange-500 duration-200'
    >Login</button>
    <p>Not Registered?
         <Link to="/signup" className='text-blue-600 underline cursor-pointer'>Signup</Link>{""}</p>
 </div>
 </form>
  </div>
</dialog>
    </div>
  );
}

export default Login
