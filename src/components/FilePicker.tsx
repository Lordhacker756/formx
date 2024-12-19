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
    <div className={clsx(styleProps.container)}>
      <label htmlFor={name} className={clsx(styleProps.label)}>
        {label}
      </label>
      <input
        type="file"
        id={name}
        ref={inputRef}
        onChange={handleFileChange}
        className={clsx("hidden", styleProps.input)}
        onBlur={() => onBlur(name, value, validationSchemas["file"])}
      />
      <button
        type="button"
        onClick={handleButtonClick}
        className={clsx(styleProps.button)}
      >
        Choose File
      </button>
      {value && (
        <p className={clsx(styleProps.fileName)}>Selected File: {value.name}</p>
      )}
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

export default FilePicker;
