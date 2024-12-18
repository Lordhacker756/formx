import React, { useEffect, useState } from "react";
import { validationSchemas } from "../utils/validationSchemas";
import clsx from "clsx";
import { FaAngleDown } from "react-icons/fa";

interface SelectProps {
  name: string;
  value: string;
  options: string[];
  label: string;
  onChange: (name: string, value: string) => void;
  onBlur: (
    name: string,
    value: string,
    validate: (value: string) => string | null
  ) => void;
  error: string;
  customStyles?: string;
  schema: keyof typeof validationSchemas;
  multiSelect?: boolean;
}

const Select: React.FC<SelectProps> = ({
  name,
  value,
  options,
  label,
  onChange,
  onBlur,
  error,
  customStyles,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);

  useEffect(() => {
    if (hasOpened && !showDropdown) {
      onBlur(name, value, validationSchemas["select"]);
    }
  }, [showDropdown]);

  const handleDropdownClick = () => {
    if (!hasOpened) {
      setHasOpened(true);
    }
    setShowDropdown((prev) => !prev);
  };

  return (
    <div className={clsx("flex flex-col", customStyles)}>
      <label className="mb-1" htmlFor="name">
        {label}
      </label>
      <div
        className={`border p-2 rounded flex flex-row justify-between items-center ${
          error ? "border-red-500" : ""
        }`}
        id={name}
        onClick={handleDropdownClick}
      >
        {value ? (
          <p>{value}</p>
        ) : (
          <p className="text-gray-400">Select {label}</p>
        )}
        <FaAngleDown
          className={clsx(
            "transition-all ease-in ",
            showDropdown ? "rotate-180" : "rotate-0"
          )}
        />
      </div>
      {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
      {showDropdown && (
        <div
          className={`mt-1 rounded flex flex-col
            justify-between items-start ${error ? "border-red-500" : ""}`}
        >
          {options.map((value, key) => {
            return (
              <p
                className="border p-2 w-full rounded transition-all ease-in hover:bg-gray-300 hover:cursor-pointer"
                onClick={() => {
                  setShowDropdown(false);
                  onChange(name, value);
                }}
              >
                {value}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Select;
