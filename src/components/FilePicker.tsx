import React, { useRef } from "react";
import { validationSchemas } from "../utils/validationSchemas";
import clsx from "clsx";

interface FilePickerProps {
  name: string;
  label: string;
  value: File | null;
  onChange: (name: string, value: File | null) => void;
  onBlur: (
    name: string,
    value: File | null,
    validate: (value: File | null) => string | null
  ) => void;
  error?: string | null;
  customStyles?: string;
  schema: keyof typeof validationSchemas;
}

const FilePicker: React.FC<FilePickerProps> = ({
  name,
  label,
  value,
  onChange,
  onBlur,
  error,
  customStyles = "",
  schema,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    onChange(name, file);
  };

  const handleBlur = () => {
    onBlur(name, value, validationSchemas["file"]);
  };

  return (
    <div className={clsx("flex flex-col", customStyles)}>
      <label htmlFor={name} className="mb-1">
        {label}
      </label>
      <div
        className={clsx(
          "border p-2 rounded flex items-center justify-between cursor-pointer",
          error && "border-red-500"
        )}
        onClick={() => fileInputRef.current?.click()}
      >
        <span>{value ? value.name : `Select ${label}`}</span>
        <button type="button" onClick={() => fileInputRef.current?.click()}>
          Browse
        </button>
      </div>
      <input
        id={name}
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
        onBlur={handleBlur}
      />
      {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
    </div>
  );
};

export default FilePicker;
