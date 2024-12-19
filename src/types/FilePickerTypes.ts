import { validationSchemas } from "../utils";

interface StyleProps {
    container?: string;
    label?: string;
    input?: string;
    button?: string;
    fileName?: string;
    errorText?: string;
}

export interface FilePickerProps {
    name: string;
    label: string;
    value: File | null;
    onChange: (name: string, value: File | null) => void;
    onBlur: (
        name: string,
        value: File | null,
        validate: (value: File | null) => string | null
    ) => void;
    error?: string | null;
    schema: keyof typeof validationSchemas;
    styleProps?: StyleProps;
}