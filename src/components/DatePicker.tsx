import { DatePickerProps } from "../types";
import { validationSchemas } from "../utils";
import clsx from "clsx";

const DatePicker: React.FC<DatePickerProps> = ({
  name,
  value,
  error,
  onChange,
  onBlur,
  label,
  styleProps = {},
}) => {
  return (
    <div className={clsx("flex flex-col", styleProps.container)}>
      <label className={clsx("mb-1", styleProps.label)} htmlFor={name}>
        {label}
      </label>
      <div
        className={clsx(
          "border p-2 rounded flex flex-row justify-between items-center hover:cursor-pointer",
          error ? "border-red-500" : "",
          styleProps.inputContainer
        )}
        id={name}
      >
        <input
          type="date"
          name={name}
          id={name}
          value={value}
          onChange={(e) => {
            onChange(name, e.target.value);
          }}
          onBlur={() => onBlur(name, value, validationSchemas["date"])}
          className={clsx("w-full border-none outline-none", styleProps.input)}
        />
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

export default DatePicker;
