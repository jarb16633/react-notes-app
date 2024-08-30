import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const PasswordInput = ({ value, onChange, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex items-center bg-transparent border-[1.5px] px-5 rounded mb-3 outline-none">
      <input
        value={value}
        onChange={onChange}
        type={showPassword ? "text" : "password"}
        placeholder={placeholder || "Password"}
        className="w-full text-sm bg-transparent py-3 mr-3 rounded outline-none"
      />
      {showPassword ? (
        <FaRegEyeSlash
          onClick={toggleShowPassword}
          size={20}
          className="text-dark/50 cursor-pointer"
        />
      ) : (
        <FaRegEye
          onClick={toggleShowPassword}
          size={20}
          className="text-dark/50 cursor-pointer"
        />
      )}
    </div>
  );
};

export default PasswordInput;
