import React from "react";
import { validationSchemas } from "../utils";
import clsx from "clsx";
import { RadioProps } from "../types";

const RadioGroup: React.FC<RadioProps> = ({
  name,
  value,
  label,
  options,
  onChange,
  error,
  onBlur,
  schema,
  styleProps = {},
}) => {
  return (
    <div className={clsx("flex flex-col space-y-2", styleProps.container)}>
      <label
        className={clsx(
          "text-sm font-medium text-gray-700",
          error && "text-red-500",
          styleProps.label
        )}
      >
        {label}
      </label>

      <div
        className={clsx("flex flex-wrap gap-4", styleProps.optionsContainer)}
      >
        {options.map((option) => (
          <div
            key={option}
            className={clsx(
              "relative flex items-center",
              "p-3 rounded-lg border-2",
              "transition-all duration-200",
              "hover:shadow-md hover:scale-105",
              value === option
                ? "border-blue-500 bg-blue-50"
                : "border-gray-200 hover:border-blue-300",
              styleProps.optionsContainer
            )}
          >
            <input
              type="radio"
              name={name}
              value={option}
              id={option}
              checked={value === option}
              onChange={() => onChange(name, option)}
              onBlur={() => onBlur(name, option, validationSchemas[schema])}
              className={clsx(
                "appearance-none w-4 h-4 rounded-full",
                "border-2 border-gray-300",
                "checked:border-blue-500 checked:bg-blue-500",
                "transition-all duration-200",
                "focus:ring-2 focus:ring-blue-200 focus:outline-none",
                "cursor-pointer",
                styleProps.radioInput
              )}
            />
            <label
              htmlFor={option}
              className={clsx(
                "ml-2 text-sm cursor-pointer",
                "transition-colors duration-200",
                value === option ? "text-blue-700" : "text-gray-700",
                styleProps.optionLabel
              )}
            >
              {option}
            </label>
          </div>
        ))}
      </div>

      {error && (
        <span
          className={clsx(
            "text-red-500 text-sm mt-1",
            "animate-fade-in transition-all duration-200",
            styleProps.errorText
          )}
        >
          {error}
        </span>
      )}
    </div>
  );
};

export default RadioGroup;
