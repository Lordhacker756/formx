import { useState } from 'react';

type ValidationFunction = (value: any) => string | null;

export const useFormValidation = (initialValues: Record<string, any>) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState<Record<string, string | null>>({});

    // Handle input change
    const handleChange = (name: string, value: any) => {
        setValues((prev) => ({ ...prev, [name]: value }));
    };

    // Handle blur for validation
    const handleBlur = (name: string, value: any, validate: ValidationFunction) => {
        const error = validate(value);
        setErrors((prev) => ({ ...prev, [name]: error }));
    };

    // Check if form has errors
    const hasErrors = Object.values(errors).some((error) => error !== null);

    return {
        values,
        errors,
        handleChange,
        handleBlur,
        hasErrors,
    };
};
