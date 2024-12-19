interface StyleProps {
    container?: string;
    label?: string;
    inputContainer?: string;
    input?: string;
    errorText?: string;
}

export interface DatePickerProps {
    name: string;
    value: string;
    error: string | null;
    onChange: (name: string, value: string) => void;
    onBlur: (
        name: string,
        value: string,
        validate: (value: string) => string | null
    ) => void;
    label: string;
    styleProps?: StyleProps;
}