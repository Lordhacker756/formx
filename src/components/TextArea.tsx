import React from "react";
import { validationSchemas } from "../utils";
import clsx from "clsx";
import { TextAreaProps } from "../types";

const TextArea: React.FC<TextAreaProps> = ({
  name,
  value,
  label,
  onChange,
  onBlur,
  error,
  schema,
  styleProps = {},
}) => {
  return (
    <div className={clsx("flex flex-col relative mb-4", styleProps.container)}>
      <label
        htmlFor={name}
        className={clsx(
          "absolute -top-2.5 left-2 px-1 text-sm",
          "transition-all duration-300 ease-in-out",
          "bg-white pointer-events-none",
          error ? "text-red-500" : "text-gray-600",
          value ? "transform -translate-y-1" : "",
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
          styleProps.textArea
        )}
      >
        <textarea
          id={name}
          value={value}
          onChange={(e) => onChange(name, e.target.value)}
          onBlur={(e) =>
            onBlur(name, e.target.value, validationSchemas["textarea"])
          }
          rows={4}
          className={clsx(
            "w-full p-3 outline-none bg-transparent",
            "text-gray-800 placeholder-gray-400",
            "transition-all duration-200 resize-y min-h-[100px]",
            "rounded-lg focus:shadow-inner",
            styleProps.textArea
          )}
        />
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-500 transition-opacity duration-200">
          {error}
        </p>
      )}
    </div>
  );
};

export default TextArea;
