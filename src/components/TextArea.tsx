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
    <div className={clsx("flex flex-col", styleProps.container)}>
      <label htmlFor={name} className={clsx("mb-1", styleProps.label)}>
        {label}
      </label>
      <textarea
        id={name}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        onBlur={(e) => onBlur(name, e.target.value, validationSchemas[schema])}
        className={clsx(
          "border p-2 rounded",
          error && "border-red-500",
          styleProps.textArea
        )}
      />
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

export default TextArea;
