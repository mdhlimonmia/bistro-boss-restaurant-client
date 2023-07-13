import { useContext } from "react";
import { BsGoogle, BsGithub, BsFacebook} from "react-icons/bs";
import { AuthContext } from "../../../provider/AuthProvider";

const SocialLogin = () => {
    const {signInGoogle} = useContext(AuthContext);
    
    const handelSignInGoogle = ()=>{
        signInGoogle()
        .then((result) => {
          console.log(result);
        }).catch((error) => {
          console.log(error);
        });
      }
    return (
        <div className="flex justify-center gap-10 text-3xl">
        <BsFacebook className="hover:text-[#306EFF] hover:cursor-pointer"></BsFacebook>
        <BsGoogle className="hover:text-[#306EFF] hover:cursor-pointer" onClick={handelSignInGoogle}></BsGoogle>
        <BsGithub className="hover:text-[#306EFF] hover:cursor-pointer"></BsGithub>
        
      </div>
    );
};

export default SocialLogin;