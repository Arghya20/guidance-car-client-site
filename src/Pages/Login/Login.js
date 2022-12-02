import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const location = useLocation();
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const { loginUser } = useContext(AuthContext);

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (data) => {
    loginUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const { providerLogin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();

  const handelGoogleLogin = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="flex justify-center mb-20">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl  border border-gray-400 mt-20 shadow-xl bg-gray-100">
        <p className="text-center text-red-800 bg-red-200 rounded-full">{error}</p>
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <form
          onSubmit={handleSubmit(handleLogin)}
          novalidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
          data-bitwarden-watching="1"
        >
          <div className="form-control w-full max-w-xs mx-auto">
            <label className="label">
              {" "}
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              {...register("email", {
                required: "Email Address is required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && <p className="text-red-600">{errors.email?.message}</p>}
          </div>

          <div className="form-control w-full max-w-xs mx-auto">
            <label className="label">
              {" "}
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Password must be 6 characters or longer" },
              })}
              className="input input-bordered w-full max-w-xs"
            />
          
            {errors.password && <p className="text-red-600">{errors.password?.message}</p>}
          </div>

          <input
            className="btn  w-full p-3 text-center rounded-full  text-white font-bold myBtn"
            value="Login"
            type="submit"
          />
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
          <p className="px-3 text-sm">Login with social accounts</p>
          <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <button
            onClick={handelGoogleLogin}
            aria-label="Log in with Google"
            className="p-3 rounded-full bg-white shadow"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
          </button>
        </div>
        <p className="text-xs text-center sm:px-6 ">
          Don't have an account?
          <Link rel="noopener noreferrer" to="/signup" className="underline p-1 text-blue-800">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
