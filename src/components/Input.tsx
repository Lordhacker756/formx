import React, { useState } from "react";
import clsx from "clsx";
import { validationSchemas } from "../utils";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { InputProps } from "../types";

const Input: React.FC<InputProps> = ({
  name,
  label,
  value,
  onChange,
  onBlur,
  error,
  schema = "name",
  styleProps = {},
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  return (
    <div className={clsx("flex flex-col relative mb-4", styleProps.container)}>
      <label
        htmlFor={name}
        className={clsx(
          "absolute -top-2.5 left-2 px-1 text-sm transition-all duration-200 bg-white",
          "text-gray-600 pointer-events-none",
          error ? "text-red-500" : "text-gray-600",
          styleProps.label
        )}
      >
        {label}
      </label>
      <div
        className={clsx(
          "border rounded-lg transition-all duration-200",
          "hover:border-blue-400 focus-within:border-blue-500",
          "shadow-sm hover:shadow-md",
          error ? "border-red-500" : "border-gray-300",
          styleProps.inputWrapper
        )}
      >
        <div className="flex items-center px-3 py-2">
          <input
            id={name}
            value={value}
            onChange={(e) => onChange(name, e.target.value)}
            onBlur={(e) =>
              onBlur(name, e.target.value, validationSchemas[schema])
            }
            className={clsx(
              "w-full outline-none bg-transparent",
              "text-gray-800 placeholder-gray-400",
              "transition-all duration-200",
              styleProps.input
            )}
            type={schema !== "password" || showPassword ? "text" : "password"}
          />
          {schema === "password" && (
            <span
              onClick={togglePasswordVisibility}
              className={clsx(
                "password-toggle ml-2 p-1 rounded-full",
                "cursor-pointer text-gray-500 hover:text-blue-500",
                "transition-all duration-200 transform hover:scale-110",
                "active:scale-95",
                styleProps.passwordToggle
              )}
            >
              {showPassword ? (
                <FaRegEyeSlash className="w-5 h-5" />
              ) : (
                <FaRegEye className="w-5 h-5" />
              )}
            </span>
          )}
        </div>
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-500 transition-all duration-200">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
