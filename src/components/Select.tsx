import React, { useEffect, useRef, useState } from "react";
import { validationSchemas } from "../utils";
import clsx from "clsx";
import { FaAngleDown } from "react-icons/fa";
import { SelectProps } from "../types";

const Select: React.FC<SelectProps> = ({
  name,
  value,
  options,
  label,
  onChange,
  onBlur,
  error,
  schema,
  styleProps = {},
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hasOpened && !showDropdown) {
      onBlur(name, value, validationSchemas[schema]);
    }
  }, [showDropdown]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };
    if (showDropdown) {
      document.addEventListener("click", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [showDropdown]);

  const handleDropdownClick = () => {
    if (!hasOpened) setHasOpened(true);
    setShowDropdown((prev) => !prev);
  };

  return (
    <div
      className={clsx("relative flex flex-col mb-4", styleProps.container)}
      ref={dropdownRef}
    >
      <label
        htmlFor={name}
        className={clsx(
          "absolute -top-2.5 left-2 px-1 text-sm",
          "transition-all duration-200 bg-white",
          "pointer-events-none",
          error ? "text-red-500" : "text-gray-600",
          styleProps.label
        )}
      >
        {label}
      </label>

      <div
        id={name}
        role="button"
        aria-expanded={showDropdown}
        tabIndex={0}
        className={clsx(
          "border rounded-lg p-3",
          "transition-all duration-200",
          "hover:border-blue-400 focus:border-blue-500",
          "shadow-sm hover:shadow-md",
          "flex justify-between items-center cursor-pointer",
          error ? "border-red-500" : "border-gray-300",
          "focus:outline-none focus:ring-2 focus:ring-blue-200",
          styleProps.dropdownTrigger
        )}
        onClick={handleDropdownClick}
      >
        <span className={clsx("text-gray-700", !value && "text-gray-400")}>
          {value || `Select ${label}`}
        </span>
        <FaAngleDown
          className={clsx(
            "w-5 h-5 text-gray-400",
            "transition-transform duration-200",
            showDropdown && "transform rotate-180"
          )}
        />
      </div>

      {showDropdown && (
        <div
          className={clsx(
            "absolute w-full mt-1 py-1",
            "bg-white border rounded-lg",
            "shadow-lg z-40",
            "transform top-12 origin-top",
            "animate-dropdown",
            styleProps.dropdownList
          )}
        >
          {options.map((option) => (
            <div
              key={option}
              className={clsx(
                "px-4 py-2 cursor-pointer",
                "transition-all duration-150",
                "hover:bg-blue-50",
                value === option && "bg-blue-100 text-blue-700",
                styleProps.option
              )}
              onClick={() => {
                onChange(name, option);
                setShowDropdown(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}

      {error && (
        <p className="mt-1 text-sm text-red-500 transition-all duration-200">
          {error}
        </p>
      )}
    </div>
  );
};

export default Select;
