interface SubmitButtonProps {
  disabled: boolean;
  label?: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  disabled,
  label = "Submit",
}) => {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={`p-2 rounded bg-blue-500 text-white ${
        disabled ? "bg-opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {label}
    </button>
  );
};

export default SubmitButton;
