import { validationSchemas } from "../utils";

export interface InputProps {
    name: string;
    label: string;
    value: string;
    onChange: (name: string, value: string) => void;
    onBlur: (
        name: string,
        value: string,
        validate: (value: string) => string | null
    ) => void;
    error?: string | null;
    schema?: "name" | "email" | "phone" | "password";
    styleProps?: {
        container?: string;
        label?: string;
        inputWrapper?: string;
        input?: string;
        passwordToggle?: string;
    }
}