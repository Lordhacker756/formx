import { useState } from "react";
type ValidationFunction = (value: string) => string | null;

const useFormValidation = (initialValues: Record<string, any>) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState<Record<string, any>>({});

    const handleChange = (name: string, value: string) => {
        console.log("handleChange:: ", name, value)
        if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }))
        setValues((prev) => (
            {
                ...prev,
                [name]: value
            }
        ))
    }

    const handleBlur = (name: string, value: string, validations: ValidationFunction) => {
        const error = validations(value);

        if (error) {
            setErrors((prev) => (
                {
                    ...prev,
                    [name]: error
                }
            ))
        }
    }

    const hasErrors = () => {
        if (Object.values(errors).some((_) => _ !== null) || Object.values(values).every(_ => _ === ""))
            return true
        return false;
    };

    return {
        values,
        errors,
        handleChange,
        handleBlur,
        hasErrors
    }
}

export default useFormValidation;