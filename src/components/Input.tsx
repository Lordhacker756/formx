import React, { useState } from "react";
import { validationSchemas } from "../utils/validationSchemas";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

interface InputProps {
  name: string;
  label: string;
  value: string;
  onChange: (name: string, value: string) => void;
  onBlur: (
    name: string,
    value: string,
    validate: (value: string) => string | null
  ) => void;
  error?: string | null;
  customStyles?: string;
  schema?: keyof typeof validationSchemas;
}

const Input: React.FC<InputProps> = ({
  name,
  label,
  value,
  onChange,
  onBlur,
  error,
  customStyles = "",
  schema = "name",
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  return (
    <div className={`flex flex-col ${customStyles}`}>
      <label htmlFor={name} className="mb-1">
        {label}
      </label>
      <div
        className={`border p-2 rounded flex flex-row justify-between items-center ${
          error ? "border-red-500" : ""
        }`}
      >
        <input
          id={name}
          value={value}
          onChange={(e) => onChange(name, e.target.value)}
          onBlur={(e) =>
            onBlur(name, e.target.value, validationSchemas[schema])
          }
          className="w-full border-none outline-none"
          type={schema !== "password" || showPassword ? "text" : "password"}
        />
        {schema === "password" && (
          <span onClick={togglePasswordVisibility} className="password-toggle">
            {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
          </span>
        )}
      </div>
      {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
    </div>
  );
};

export default Input;
