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
    <div className={clsx("flex flex-col", styleProps.container)}>
      <p className={clsx("mb-2", styleProps.label)}>Select {label}</p>
      <div
        className={clsx(
          "flex flex-row items-center",
          styleProps.optionsContainer
        )}
      >
        {options.map((option) => (
          <div
            key={option}
            className={clsx(
              "mx-2 flex flex-row justify-center items-center",
              styleProps.optionItem
            )}
          >
            <label
              htmlFor={option}
              className={clsx("mr-1", styleProps.optionLabel)}
            >
              {option}
            </label>
            <input
              type="radio"
              name={name}
              value={option}
              id={option}
              checked={value === option}
              onChange={() => onChange(name, option)}
              onBlur={() => onBlur(name, option, validationSchemas[schema])}
              className={clsx(styleProps.radioInput)}
            />
          </div>
        ))}
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

export default RadioGroup;
