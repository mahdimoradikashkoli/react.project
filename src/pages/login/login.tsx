import { useContext } from "react";
import { Button, Textfield, createCenteredText } from "../../components";
import emailpng from "/icons/email.png";
import { store } from "../../contexts";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { instanse } from "./../../App";
import jscookie from "js-cookie";
import toast from "react-hot-toast";

const Login = () => {
  const { showPasswordImg } = useContext(store);

  const [searchParams] = useSearchParams();

  const navigate = useNavigate();
  const location = useLocation();
  const loginFormSchema = Yup.object({
    email: Yup.string()
      .required("email is required")
      .email("inter a valid email"),
    password: Yup.string().required("password is required").min(6),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginFormSchema),
  });

  const handleLoginForm = handleSubmit(async (Data) => {
    try {
      const res = await instanse.post("/auth/login", Data);
      jscookie.set("token", res.data.token);
      toast.success("welcome")
      navigate("/")
    } catch (error) {
      toast.error("somtin is wrong");
    }
  });

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <p className="mt-5">insightlancer</p>
        <h2 className="text-3xl mt-4">Sign In</h2>
        <p className="text-center max-w-xs mt-4 text-sm">
          Hi! Welcome back, you've been missed
        </p>
      </div>
      <div className="flex flex-col items-center py-1 px-5 ">
        <form
          onSubmit={handleLoginForm}
          className="w-full flex flex-col gap-3"
          action=""
        >
          <Textfield
            autoComplete="off"
            label="Email"
            placeholder="Example:mahdi@gmail.com"
            icon={emailpng}
            type="email"
            validation={register("email")}
            helpertext={errors.email?.message ?? ""}
            defaultValue={
              location.state?.email ?? searchParams.get("email") ?? ""
            }
          />
          <Textfield
            autoComplete="off"
            label="Password"
            type="password"
            icon={showPasswordImg ? "/icons/hide.png" : "/icons/show.png"}
            id="password"
            validation={register("password")}
            helpertext={errors.password?.message ?? ""}
            defaultValue={
              location.state?.password ?? searchParams.get("password") ?? ""
            }
          />
          <div className="flex justify-end pe-1">
            <button className="text-blue-600 underline">
              Forgot Password?
            </button>
          </div>
          <Button
            className="mt-1 mb-10"
            variant="contained"
            children="Sign In"
          />
        </form>
        {createCenteredText("Or sign in whit", 40)}
        <div className="flex mt-10 gap-4">
          <a href="">
            <img
              className="bg-white w-20 h-220 rounded-full"
              src="/icons/apple-icon (1).png"
              alt=""
            />
          </a>
          <a href="">
            <img
              className="bg-white w-20 h-220 rounded-full"
              src="/icons/icons8-google-48.png"
              alt=""
            />
          </a>
          <a href="">
            <img
              className="bg-white w-20 h-220 rounded-full"
              src="/icons/facebook.png"
              alt=""
            />
          </a>
        </div>
        <p className=" text-lg flex gap-0.5 mt-8 mb-4">
          Don't have an account?
          <button
            onClick={() => {
              navigate("/auth/register");
            }}
            className="text-blue-600 underline"
          >
            Sign Up
          </button>
        </p>
      </div>
    </>
  );
};
export default Login;
