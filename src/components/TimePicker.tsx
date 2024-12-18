import { validationSchemas } from "../utils/validationSchemas";

interface TimePickerProps {
  name: string;
  value: string;
  error: string | null;
  onChange: (name: string, value: string) => void;
  onBlur: (
    name: string,
    value: string,
    validate: (value: string) => string | null
  ) => void;
  label: string;
}

const TimePicker: React.FC<TimePickerProps> = ({
  name,
  value,
  error,
  onChange,
  onBlur,
  label,
}) => {
  return (
    <div className={"flex flex-col"}>
      <label className="mb-1" htmlFor={name}>
        {label}
      </label>
      <div
        className={`border p-2 rounded flex flex-row justify-between items-center hover:cursor-pointer ${
          error ? "border-red-500" : ""
        }`}
        id={name}
      >
        <input
          type="time"
          name={name}
          id={name}
          onChange={(e) => {
            onChange(name, e.target.value);
          }}
          onBlur={() => onBlur(name, value, validationSchemas["time"])}
        />
      </div>
    </div>
  );
};

export default TimePicker;
