import React, { useContext, useId } from "react";
import { store } from "../../contexts";

interface textfieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
  icon?: string;
  helpertext?: string;
  type?: string;
  autocomplete?: string;
  validation?: object;
}
export const Textfield: React.FC<textfieldProps> = ({
  label,
  placeholder,
  icon,
  helpertext,
  validation,
  type,
  ...restprops
}) => {
  const { setShowPasswordImg } = useContext(store);

  const handleShowPassword = (e: React.FormEvent) => {
    e.preventDefault();
    const passwordInput = document.getElementById(
      "password"
    ) as HTMLInputElement;
    if (passwordInput?.type === "password") {
      passwordInput!.type = "text";
      setShowPasswordImg(true);
    } else {
      passwordInput!.type = "password";
      setShowPasswordImg(false);
    }
  };

  const id = useId();
  return (
    <div>
      {label && (
        <label className="ps-0.5" htmlFor={id}>
          {label}
        </label>
      )}
      <div className="flex items-center w-full bg-slate-200 border-2 border-transparent focus-within:border-blue-700 rounded-lg">
        {Boolean(icon) &&
          (type === "password" ? (
            <button type="button" onClick={handleShowPassword}>
              <img className="w-6 h-6" src={icon} alt="image" />
            </button>
          ) : (
            <img className="w-6 h-6" src={icon} alt="image" />
          ))}
        <input
          className="w-full outline-none border-none bg-transparent text-black text-lg py-2 px-0.5"
          placeholder={placeholder}
          id={id}
          {...restprops}
          {...validation}
          type={type || "text"}
          
        />
      </div>
      {Boolean(helpertext) && (
        <p className="text-red-500 ps-0.5">{helpertext}</p>
      )}
    </div>
  );
};
