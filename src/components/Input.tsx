import React, { useState, forwardRef } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: string; // Making the `type` property optional
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ type = "text", ...props }, ref) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const isPasswordField = type === "password";

  return (
    <div className="relative w-full ">
      <input
        type={isPasswordField && isPasswordVisible ? "text" : type}
        className="pl-[11px] md:pl-[17px] flex h-[40px] md:h-[50px] px-[22px] w-full bg-transparent border-[1px] 
        hover:border-2 text-14 file:border-0 file:text-sm placeholder:text-muted-graycal focus-visible:outline-none 
        disabled:cursor-not-allowed disabled:opacity-50"
        ref={ref}
        {...props}
      />
      {isPasswordField && (
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-graycal"
        >
          {isPasswordVisible ? <FiEye size={20} className="text-[#6673FC] w-[15px] md:w-[18px]" /> : <FiEyeOff size={20} className="text-[#6673FC] w-[15px] md:w-[18px]"/>}
        </button>
      )}
    </div>
  );
});

Input.displayName = "Input";

export { Input };
