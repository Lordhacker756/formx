import { validationSchemas } from "../utils";

interface StyleProps {
    container?: string;
    label?: string;
    dropdownTrigger?: string;
    input?: string;
    dropdownList?: string;
    option?: string;
    errorText?: string;
}

export interface SearchableDropdownProps {
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
    styleProps?: StyleProps;
}