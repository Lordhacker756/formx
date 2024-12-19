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
      className={clsx("flex flex-col", styleProps.wrapper)}
      ref={dropdownRef}
    >
      <label htmlFor={name} className={clsx("mb-1", styleProps.label)}>
        {label}
      </label>
      <div
        id={name}
        role="button"
        aria-expanded={showDropdown}
        tabIndex={0}
        className={clsx(
          "border p-2 rounded flex justify-between items-center cursor-pointer",
          error ? "border-red-500" : "border-gray-300",
          "focus:outline-none focus:ring focus:ring-blue-500",
          styleProps.dropdownTrigger
        )}
        onClick={handleDropdownClick}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleDropdownClick();
        }}
      >
        <span>{value || `Select ${label}`}</span>
        <FaAngleDown
          className={clsx(
            "transition-transform",
            showDropdown ? "rotate-180" : "rotate-0"
          )}
        />
      </div>
      {error && (
        <span className={clsx("text-red-500 text-sm mt-1", styleProps.error)}>
          {error}
        </span>
      )}
      {showDropdown && (
        <div
          role="listbox"
          className={clsx(
            "mt-1 border rounded shadow bg-white max-h-48 overflow-y-auto",
            styleProps.dropdownList
          )}
        >
          {options.map((option, index) => (
            <div
              key={`${name}-${index}`}
              role="option"
              className={clsx(
                "p-2 cursor-pointer hover:bg-gray-100",
                value === option &&
                  clsx("bg-gray-200 font-semibold", styleProps.optionSelected),
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
    </div>
  );
};

export default Select;
