import { validationSchemas } from "../utils";

interface StyleProps {
    container?: string;
    label?: string;
    textArea?: string;
    errorText?: string;
}

export interface TextAreaProps {
    name: string;
    value: string;
    label: string;
    onChange: (name: string, value: string) => void;
    onBlur: (
        name: string,
        value: string,
        validate: (value: string) => string | null
    ) => void;
    error?: string | null;
    schema: 'textarea';
    styleProps?: StyleProps;
}
