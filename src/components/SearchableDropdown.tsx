import { useEffect, useState } from "react";
import { validationSchemas } from "../utils/validationSchemas";
import { FaAngleDown } from "react-icons/fa";
import clsx from "clsx";
import useDebounce from "../hooks/useDebounce";

interface SearchableDropdownProps {
  name: string;
  label: string;
  value: string;
  options: string[];
  error: string | null;
  schema: keyof typeof validationSchemas;
  onChange: (name: string, value: string) => void;
  onBlur: (
    name: string,
    value: string,
    validator: (value: string) => string | null
  ) => void;
}

const SearchableDropdown: React.FC<SearchableDropdownProps> = ({
  name,
  label,
  value,
  options,
  error,
  schema,
  onChange,
  onBlur,
}) => {
  const [hasBeenOpened, setHasBeenOpened] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [showDropdown, setShowDropdown] = useState(false);

  const debouncedSearch = useDebounce((searchKey: string) => {
    console.log("Debounce called");
    setFilteredOptions(
      options.filter((option) =>
        option.toLowerCase().includes(searchKey.toLowerCase())
      )
    );
  });

  useEffect(() => {
    if (hasBeenOpened) {
      onBlur(name, value, validationSchemas["select"]);
    }
  }, [showDropdown]);

  const handleSearch = (searchKey: string) => {
    debouncedSearch(searchKey);
  };

  return (
    <div>
      <label htmlFor={name}>Select {label}</label>
      <div
        className={`border p-2 rounded flex flex-row justify-between items-center ${
          error ? "border-red-500" : ""
        }`}
        id={name}
        onClick={() => {
          !hasBeenOpened && setHasBeenOpened(true);
          setShowDropdown((prev) => !prev);
          setFilteredOptions(options);
        }}
      >
        {value && !showDropdown ? (
          <p>{value}</p>
        ) : showDropdown ? (
          <input
            type="text"
            className="border border-none outline-none w-full"
            placeholder="Enter to search..."
            autoFocus
            onChange={(e) => {
              handleSearch(e.target.value);
            }}
          />
        ) : (
          <p className="text-gray-400">Select {label}</p>
        )}
        <FaAngleDown
          className={clsx(
            "transition-all ease-in ",
            showDropdown ? "rotate-180" : "rotate-0"
          )}
        />
      </div>
      {error && <span className="text-red-500 text-sm mt-1">{error}</span>}

      {showDropdown && (
        <div
          className={`mt-1 rounded flex flex-col
            justify-between items-start ${error ? "border-red-500" : ""}`}
        >
          {filteredOptions.map((value, key) => {
            return (
              <p
                className="border p-2 w-full rounded transition-all ease-in hover:bg-gray-300 hover:cursor-pointer"
                onClick={() => {
                  setShowDropdown(false);
                  onChange(name, value);
                }}
              >
                {value}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchableDropdown;
