import { validationSchemas } from "../utils";

interface StyleProps {
    wrapper?: string;
    label?: string;
    dropdownTrigger?: string;
    dropdownList?: string;
    option?: string;
    optionSelected?: string;
    error?: string;
}

export interface SelectProps {
    name: string;
    value: string;
    options: string[];
    label: string;
    onChange: (name: string, value: string) => void;
    onBlur: (
        name: string,
        value: string,
        validate: (value: string) => string | null
    ) => void;
    error?: string | null;
    schema: 'select';
    styleProps?: StyleProps;
}