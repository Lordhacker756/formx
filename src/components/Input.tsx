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
    <div className={clsx("flex flex-col", styleProps.container)}>
      <label htmlFor={name} className={clsx("mb-1", styleProps.label)}>
        {label}
      </label>
      <div
        className={clsx(
          "border p-2 rounded flex flex-row justify-between items-center",
          error && "border-red-500",
          styleProps.inputWrapper
        )}
      >
        <input
          id={name}
          value={value}
          onChange={(e) => onChange(name, e.target.value)}
          onBlur={(e) =>
            onBlur(name, e.target.value, validationSchemas[schema])
          }
          className={clsx("w-full border-none outline-none", styleProps.input)}
          type={schema !== "password" || showPassword ? "text" : "password"}
        />
        {schema === "password" && (
          <span
            onClick={togglePasswordVisibility}
            className={clsx("password-toggle", styleProps.passwordToggle)}
          >
            {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
          </span>
        )}
      </div>
      {error && (
        <span
          className={clsx("text-red-500 text-sm mt-1", styleProps.errorText)}
        >
          {error}
        </span>
      )}
    </div>
  );
};

export default Input;
