import React, { useRef } from "react";
import { validationSchemas } from "../utils";
import clsx from "clsx";
import { FilePickerProps } from "../types";

const FilePicker: React.FC<FilePickerProps> = ({
  name,
  label,
  value,
  onChange,
  onBlur,
  error,
  schema,
  styleProps = {},
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    onChange(name, file);
  };

  const handleButtonClick = () => {
    inputRef.current?.click();
  };

  return (
    <div className={clsx("flex flex-col space-y-2", styleProps.container)}>
      <label
        htmlFor={name}
        className={clsx(
          "text-sm font-medium text-gray-700",
          error && "text-red-500",
          styleProps.label
        )}
      >
        {label}
      </label>

      <input
        type="file"
        id={name}
        ref={inputRef}
        onChange={handleFileChange}
        className="hidden"
        onBlur={() => onBlur(name, value, validationSchemas[schema])}
      />

      <div
        className={clsx(
          "flex flex-col items-center justify-center",
          "border-2 border-dashed rounded-lg",
          "transition-all duration-200",
          error ? "border-red-300" : "border-gray-300",
          "hover:border-blue-400",
          "p-6",
          styleProps.input
        )}
      >
        <button
          type="button"
          onClick={handleButtonClick}
          className={clsx(
            "px-4 py-2 rounded-lg",
            "bg-blue-500 hover:bg-blue-600",
            "text-white font-medium",
            "transition-all duration-200",
            "transform hover:scale-105 active:scale-95",
            "shadow-sm hover:shadow-md",
            "focus:outline-none focus:ring-2 focus:ring-blue-300",
            styleProps.button
          )}
        >
          Choose File
        </button>

        {value && (
          <div
            className={clsx(
              "mt-4 flex items-center",
              "text-sm text-gray-600",
              "animate-fade-in",
              styleProps.fileName
            )}
          >
            <svg
              className="w-5 h-5 mr-2 text-blue-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span className="truncate max-w-xs">{value.name}</span>
          </div>
        )}
      </div>

      {error && (
        <p
          className={clsx(
            "text-sm text-red-500",
            "transition-all duration-200",
            "animate-fade-in"
          )}
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default FilePicker;
