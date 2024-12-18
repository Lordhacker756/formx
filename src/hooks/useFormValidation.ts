import { useState } from "react";

type ValidationFunction = (value: any) => string | null;

const useFormValidation = (initialValues: Record<string, any>) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState<Record<string, any>>({});

    const handleChange = (name: string, value: any) => {
        if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }));
        setValues((prev) => ({ ...prev, [name]: value }));
    };

    const handleBlur = (
        name: string,
        value: any,
        validations: ValidationFunction
    ) => {
        const error = validations(value);
        if (error) {
            setErrors((prev) => ({ ...prev, [name]: error }));
        }
    };

    const hasErrors = () => {
        return (
            Object.values(errors).some((error) => error !== null) ||
            Object.values(values).some((value) => value === "" || value === null)
        );
    };

    return {
        values,
        errors,
        handleChange,
        handleBlur,
        hasErrors,
    };
};

export default useFormValidation;