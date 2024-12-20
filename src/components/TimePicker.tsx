import { TimePickerProps } from "../types";
import { validationSchemas } from "../utils";
import { FaClock } from "react-icons/fa";
import clsx from "clsx";

const TimePicker: React.FC<TimePickerProps> = ({
  name,
  value,
  error,
  onChange,
  onBlur,
  label,
  styleProps = {},
}) => {
  return (
    <div className={clsx("relative flex flex-col mb-4", styleProps.container)}>
      <label
        htmlFor={name}
        className={clsx(
          "absolute -top-2.5 left-2 px-1 text-sm",
          "transition-all duration-200 bg-white z-10",
          error ? "text-red-500" : "text-gray-600",
          styleProps.label
        )}
      >
        {label}
      </label>

      <div
        className={clsx(
          "relative border rounded-lg",
          "transition-all duration-200",
          "hover:border-blue-400 focus-within:border-blue-500",
          "shadow-sm hover:shadow-md",
          error ? "border-red-500" : "border-gray-300",
          styleProps.container
        )}
      >
        <div className="flex items-center px-3 py-2">
          <input
            type="time"
            id={name}
            value={value}
            onChange={(e) => onChange(name, e.target.value)}
            onBlur={() => onBlur(name, value, validationSchemas.time)}
            className={clsx(
              "w-full outline-none bg-transparent",
              "text-gray-800 placeholder-gray-400",
              "transition-all duration-200",
              "[&::-webkit-calendar-picker-indicator]:opacity-0",
              "[&::-webkit-calendar-picker-indicator]:absolute",
              "[&::-webkit-calendar-picker-indicator]:w-full",
              "[&::-webkit-calendar-picker-indicator]:h-full",
              "[&::-webkit-calendar-picker-indicator]:cursor-pointer",
              styleProps.input
            )}
          />
          <FaClock className="text-gray-400 w-5 h-5 pointer-events-none" />
        </div>
      </div>

      {error && (
        <p
          className={clsx(
            "mt-1 text-sm text-red-500",
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

export default TimePicker;
