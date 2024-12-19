import React from "react";
import clsx from "clsx";
import { SubmitButtonProps } from "../types";

const SubmitButton: React.FC<SubmitButtonProps> = ({
  disabled,
  label = "Submit",
  styleProps = {},
}) => {
  const {
    base = "p-2 rounded text-white w-full",
    enabled = "bg-blue-500",
    disabled: disabledStyle = "bg-blue-500 bg-opacity-50 cursor-not-allowed",
  } = styleProps;

  return (
    <button
      type="submit"
      disabled={disabled}
      className={clsx(base, disabled ? disabledStyle : enabled)}
    >
      {label}
    </button>
  );
};

export default SubmitButton;
