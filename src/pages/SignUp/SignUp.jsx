import { Helmet } from "react-helmet-async";
import signUpBg from "../../assets/others/authentication.png";
import signUpImg from "../../assets/others/authentication2.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import SocialLogin from "../Share/SocialLogin/SocialLogin";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useForm } from "react-hook-form";
const SignUp = () => {
  const { createUser, setUser } = useContext(AuthContext);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

 const onSubmit = data =>{
  createUser(data.email, data.password)
  .then((userCredential) => {
    // Signed in 
     setUser(userCredential.user);

    // ...
  })
  .catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage);
    // ..
  });
 }
  return (
    <div
      style={{
        backgroundImage: `url("${signUpBg}")`,
      }}
    >
      <Helmet>
        <title>Bistro Boss | SignUp</title>
      </Helmet>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse shadow-2xl m-auto">
          <div className="text-center md:w-1/2 lg:text-left">
            <img src={signUpImg} alt="" />
          </div>
          <div className="card md:w-1/2 max-w-sm flex-shrink-0 text-black">
            <h1 className="text-5xl ml-8 font-bold">SignUp now!</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered  bg-white"
                  {...register("name", { required: true })}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered  bg-white"
                  {...register("email", { required: true })}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered bg-white"
                  {...register("password", { required: true })}
                />
              </div>

              {/* TODO: button disable */}
              <div className="form-control mt-6">
                <input
                  disabled={false}
                  className="btn  text-white bg-[#D1A054B2] hover:bg-[#D1A054] border-0"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <div className="text-center space-y-5">
              <h1 className="text-[#D1A054]">
                Already registered?{" "}
                <span className="text-[#D1A054] hover:text-[#306EFF] hover:cursor-pointer">
                  <Link to="/login"> Go to log in</Link>
                </span>
              </h1>
              <h2>or sign in with</h2>
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
