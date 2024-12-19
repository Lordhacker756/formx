import { useEffect, useState } from "react";
import { validationSchemas } from "../utils";
import { FaAngleDown } from "react-icons/fa";
import clsx from "clsx";
import useDebounce from "../hooks/useDebounce";
import { SearchableDropdownProps } from "../types";

const SearchableDropdown: React.FC<SearchableDropdownProps> = ({
  name,
  label,
  value,
  options,
  error,
  schema,
  onChange,
  onBlur,
  styleProps = {},
}) => {
  const [hasBeenOpened, setHasBeenOpened] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [showDropdown, setShowDropdown] = useState(false);

  const debouncedSearch = useDebounce((searchKey: string) => {
    setFilteredOptions(
      options.filter((option) =>
        option.toLowerCase().includes(searchKey.toLowerCase())
      )
    );
  });

  useEffect(() => {
    if (hasBeenOpened) {
      onBlur(name, value, validationSchemas[schema]);
    }
  }, [showDropdown]);

  const handleSearch = (searchKey: string) => {
    debouncedSearch(searchKey);
  };

  return (
    <div className={clsx(styleProps.container)}>
      <label htmlFor={name} className={clsx(styleProps.label)}>
        Select {label}
      </label>
      <div
        className={clsx(
          "border p-2 rounded flex justify-between items-center",
          error ? "border-red-500" : "",
          styleProps.dropdownTrigger
        )}
        id={name}
        onClick={() => {
          setShowDropdown((prev) => !prev);
          setFilteredOptions(options);
          !hasBeenOpened && setHasBeenOpened(true);
        }}
      >
        {value && !showDropdown ? (
          <p>{value}</p>
        ) : showDropdown ? (
          <input
            type="text"
            className={clsx(
              "border-none outline-none w-full",
              styleProps.input
            )}
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
            "transition-all ease-in",
            showDropdown ? "rotate-180" : "rotate-0"
          )}
        />
      </div>
      {error && (
        <span
          className={clsx("text-red-500 text-sm mt-1", styleProps.errorText)}
        >
          {error}
        </span>
      )}
      {showDropdown && (
        <div
          className={clsx(
            "mt-1 rounded flex flex-col items-start",
            error ? "border-red-500" : "",
            styleProps.dropdownList
          )}
        >
          {filteredOptions.map((optionValue, key) => (
            <p
              key={key}
              className={clsx(
                "border p-2 w-full rounded transition-all hover:bg-gray-300 cursor-pointer",
                styleProps.option
              )}
              onClick={() => {
                setShowDropdown(false);
                onChange(name, optionValue);
              }}
            >
              {optionValue}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchableDropdown;
