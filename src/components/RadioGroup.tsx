import React from "react";
import { validationSchemas } from "../utils/validationSchemas";

/*
TODO
1. Get the number of options to give in radio
2. Validate that atleast one is selected
3. Set the value selected
4. Show the errors if any remain unselected
*/

interface RadioProps {
  name: string;
  value: string;
  label: string;
  options: string[];
  error: string | null;
  onChange: (name: string, value: string) => void;
  onBlur: (
    name: string,
    value: string,
    validate: (value: string) => string | null
  ) => void;
  schema: keyof typeof validationSchemas;
}

const RadioGroup: React.FC<RadioProps> = ({
  name,
  value,
  label,
  options,
  onChange,
  error,
  onBlur,
  schema,
}) => {
  console.log("RadioGroup:: ", value);
  return (
    <div>
      <strong>Select {label}</strong>
      <div className="flex flex-row items-center">
        {options.map((_) => (
          <div
            className="mx-2 flex flex-row justify-center items-center"
            key={_}
          >
            <label className="mr-1" htmlFor={_}>
              {_}
            </label>
            <input
              type="radio"
              name={name}
              value={_}
              checked={value === _}
              onChange={() => {
                onChange(name, _);
              }}
              key={_}
              onBlur={() => onBlur(name, _, validationSchemas[schema])}
            />
          </div>
        ))}
      </div>
      {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
    </div>
  );
};

export default RadioGroup;
