import React from "react";
import { validationSchemas } from "../utils/validationSchemas";
import clsx from "clsx";

interface TextAreaProps {
  name: string;
  value: string;
  label: string;
  onChange: (name: string, value: string) => void;
  onBlur: (
    name: string,
    value: string,
    validate: (value: string) => string | null
  ) => void;
  error?: string | null;
  customStyles?: string;
  schema: keyof typeof validationSchemas;
}

const TextArea: React.FC<TextAreaProps> = ({
  name,
  value,
  label,
  onChange,
  onBlur,
  error,
  customStyles,
  schema,
}) => {
  return (
    <div className={clsx("flex flex-col", customStyles)}>
      <label htmlFor="name" className="mb-1">
        {label}
      </label>
      <textarea
        id={name}
        value={value}
        onChange={(e) => {
          onChange(name, e.target.value);
        }}
        onBlur={(e) => {
          onBlur(name, e.target.value, validationSchemas[schema]);
        }}
        className={clsx("border p-2 rounded", error && "border-red-500")}
      />
      {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
    </div>
  );
};

export default TextArea;
