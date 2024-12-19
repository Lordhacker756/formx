import { validationSchemas } from "../utils";

interface StyleProps {
    container?: string;
    label?: string;
    optionsContainer?: string;
    optionItem?: string;
    optionLabel?: string;
    radioInput?: string;
    errorText?: string;
}

export interface RadioProps {
    name: string;
    value: string;
    label: string;
    options: string[];
    error?: string | null;
    onChange: (name: string, value: string) => void;
    onBlur: (
        name: string,
        value: string,
        validate: (value: string) => string | null
    ) => void;
    schema: keyof typeof validationSchemas;
    styleProps?: StyleProps;
}
