import { useContext, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import {loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha,} from "react-simple-captcha";
import loginBg from "../../assets/others/authentication.png";
import loginImg from "../../assets/others/authentication2.png";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";
import SocialLogin from "../Share/SocialLogin/SocialLogin";


const Login = () => {
  const [disabled, setDisabled] = useState(true);

  const {signInGoogle} = useContext(AuthContext);
  const captchaRef = useRef(null);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handelLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };

  const handleValidateCaptcha = () => {
    // const user_captcha_value = event.target.value;
    const user_captcha_value = captchaRef.current.value;
    // console.log(user_captcha_value);
    if (validateCaptcha(user_captcha_value) == true) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url("${loginBg}")`,
      }}
    >
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row shadow-2xl shadow-gray-600 m-auto">
          <div className="text-center md:w-1/2 lg:text-left">
            <img src={loginImg} alt="" />
          </div>

          <div className="card md:w-1/2 max-w-sm flex-shrink-0 text-black">
            <h1 className="text-5xl ml-8 font-bold">Login now!</h1>

            <form onSubmit={handelLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered  bg-white"
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
                />
                <label className="label">
                  <a href="#" className="link link-hover hover:text-[#D1A054]">
                    Forgot password?
                  </a>
                </label>
              </div>

              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  //   onBlur={handleValidateCaptcha}
                  ref={captchaRef}
                  type="text"
                  name="captcha"
                  placeholder="type the above text"
                  className="input input-bordered bg-white"
                />
                <button
                  onClick={handleValidateCaptcha}
                  className="btn btn-outline btn-sm my-1"
                >
                  Validate
                </button>
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
              <h1 className="text-[#D1A054]">New Here? <span className="hover:text-[#306EFF] hover:cursor-pointer"><Link to="/signup">Create a New Account</Link></span></h1>
              <h2>or sign in with</h2>
             <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
