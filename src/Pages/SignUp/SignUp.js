import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState("");
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleSignUp = (data) => {
    setError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast("User Created Successfully ✅");
        navigate(from, { replace: true });
        setError("");
        handelUpdateUserProfile(data.name)
          .then(() => {})
          .catch((error) => {
            setError(error.message);
          });
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const handelUpdateUserProfile = (name, photourl) => {
    const profile = {
      displayName: name,
      photoURL: photourl,
    };
    updateUserProfile(profile);
  };

  return (
    <div className="flex justify-center mb-16">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl  border border-gray-400 mt-20 shadow-xl bg-gray-100">
        <p className="text-center text-red-800 bg-red-200 rounded-full">{error}</p>

        <h1 className="text-2xl font-bold text-center">Sign Up</h1>
        <form
          onSubmit={handleSubmit(handleSignUp)}
          novalidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
          data-bitwarden-watching="1"
        >
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", {
                required: "Name is Required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.name && <p className="text-red-500">{errors.name.message}</p>}
          </div>

          <div className="space-y-1 text-sm">
            <label for="photourl" className="block ">
              Photo Url
            </label>
            <input
              required
              type="text"
              name="photourl"
              id="photourl"
              placeholder="Photo URL"
              className="w-full px-4 py-3 rounded-md shadow  focus:border-violet-400"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", {
                required: true,
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Password must be 6 characters long" },
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
          </div>

          <input
            className="block w-full p-3 text-center rounded-full myBtn font-bold text-white"
            value="Sign Up"
            type="submit"
          />
        </form>
        <p className="text-xs text-center sm:px-6 ">
          Already have an account?
          <Link rel="noopener noreferrer" to="/login" className="underline p-1 text-blue-800">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
