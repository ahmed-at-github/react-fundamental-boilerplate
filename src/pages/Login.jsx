import { Link, Navigate, useLocation, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import useAuthContext from "../hooks/useAuthContext";
import userData from "../data/user.json"
import { useEffect } from "react";

export default function Login() {
  const { user, setUser } = useAuthContext();
  const { register, handleSubmit, formState: { errors }, } = useForm();
  let navigate = useNavigate();


  const onSubmit = (data) => {
    // console.log(data);
    handleLogin(data);
  }

  useEffect(() => {
    // console.log("from fetch");
    user?.email && navigate("/")
  }, [user, navigate])

  const handleLogin = (formData) => {
    const fetchData = async () => {
      try {
        const tempUser = userData.find(user => user.email === formData.email && user.password && formData.password) || {};
        console.log("userData: ", userData);

        if (tempUser.email) {
          localStorage.setItem("uid", tempUser._id);
          setUser(tempUser);
        }
      } catch (error) {
        console.log(error);

      }
    };
    fetchData();

  }


  return (
    user?.email || (<div>
      <h1>Login</h1>


      <Link to="/">Home</Link>


      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}

        <input placeholder="Email" type="email" {...register("email", { required: true })} />
        {/* include validation with required or other standard HTML validation rules */}
        {errors.email && <span>This field is required</span>}


        <input placeholder="Password" type="password" {...register("password", { required: true })} />
        {/* include validation with required or other standard HTML validation rules */}
        {errors.password && <span>This field is required</span>}

        <button type="submit">Submit</button>
      </form>

    </div>)
  )
}
