import { Button, Textfield, createCenteredText } from "../../components";
import emailpng from "/icons/email.png";
import React from "react";
import { useContext } from "react";
import { store } from "../../contexts";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {instanse} from "./../../App"
import {registerFormType} from "./type"


const Register: React.FC = () => {
  const { showPasswordImg } = useContext(store);

  const registerformschema = Yup.object({
    name: Yup.string().required("name is required"),
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
    resolver: yupResolver(registerformschema),
  });

  
  const navigate = useNavigate();

  const handleRegisterForm = handleSubmit(async (Data) => {

    const checkBox = document.getElementById(
      "checkboxform"
    ) as HTMLInputElement;
    if (!checkBox.checked)
      return alert("Please select the tick I agree with the terms");

    try{
      const resGet = await instanse.get("/auth/register");
    if (resGet.data.msg.find((user:registerFormType) => user.email === Data.email))
      return alert("user already exist");

    await instanse.post("/auth/register", Data);
    toast.success("register is successfylly");
    navigate(
      `/auth/login?name=${Data.name}&email=${Data.email}&password=${Data.password}`,
      {
        state: {
          name: Data.name,
          email: Data.email,
          password: Data.password,
        },
      }
    );
    }catch (error){
      toast.error("somting is wrong")
    }
    
  });

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <p className="mt-5">insightlancer</p>
        <h2 className="text-3xl mt-4">Create Account</h2>
        <p className="text-center max-w-xs mt-4 text-sm">
          Fill your informatino below or register with your socail account
        </p>
      </div>
      <div className="flex flex-col items-center py-1 px-5 ">
        <form
          onSubmit={handleRegisterForm}
          className="w-full flex flex-col gap-3"
          action=""
        >
          <Textfield
            autoComplete="off"
            helpertext={errors.name?.message ?? ""}
            label="Name"
            placeholder="mehdi"
            type="text"
            validation={register("name")}
          />
          <Textfield
            label="Email"
            placeholder="Example:mahdi@gmail.com"
            icon={emailpng}
            type="email"
            validation={register("email")}
            helpertext={errors.email?.message ?? ""}
            autoComplete="off"
          />
          <Textfield
            label="Password"
            type="password"
            icon={showPasswordImg ? "/icons/hide.png" : "/icons/show.png"}
            id="password"
            validation={register("password")}
            helpertext={errors.password?.message ?? ""}
            autoComplete="off"
          />
          <div className="flex gap-0.5 ">
            <input type="checkbox" id="checkboxform" />
            <p>Agree with</p>
            <a className="text-blue-600">Terms & condition</a>
          </div>
          <Button
            className="mt-1 mb-10"
            variant="contained"
            children="Sign up"
          />
        </form>
        {createCenteredText("or sign up whit", 40)}
        <div className="flex mt-10 gap-4">
          <button>
            <img
              className="bg-white w-20 h-220 rounded-full"
              src="/icons/apple-icon (1).png"
              alt=""
            />
          </button>
          <button>
            <img
              className="bg-white w-20 h-220 rounded-full"
              src="/icons/icons8-google-48.png"
              alt=""
            />
          </button>
          <button>
            <img
              className="bg-white w-20 h-220 rounded-full"
              src="/icons/facebook.png"
              alt=""
            />
          </button>
        </div>
        <p className=" text-lg flex gap-0.5 mt-8">
          Already have an account?
          <button onClick={()=>{navigate("/auth/login")}} className="text-blue-600 underline">Sign in</button>
        </p>
      </div>
    </>
  );
};
export default Register;
