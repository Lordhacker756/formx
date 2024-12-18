export const validationSchemas = {
    // Validates that the name is not empty after trimming
    name: (value: string) =>
        value.trim()
            ? null
            : 'Name cannot be empty. Please provide your full name.',

    // Validates email with stricter regex
    email: (value: string) =>
        /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(value.trim())
            ? null
            : 'Invalid email format. Please enter a valid email address.',

    // Validates phone numbers (supports optional country code and 10-digit format)
    phone: (value: string) =>
        /^(\+?\d{1,3}[-.\s]?)?\d{10}$/.test(value.trim())
            ? null
            : 'Phone number must be 10 digits and can include a country code.',

    // Password must be at least 8 characters and include a mix of letters, numbers, and symbols
    password: (value: string) =>
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value)
            ? null
            : 'Password must be at least 8 characters, include letters, numbers, and a special character.',

    // Validates a dropdown/select field
    select: (value: string) =>
        value.trim()
            ? null
            : 'Please select atleast one option.',

    // Validates a radio button group
    radio: (value: string) =>
        value.trim()
            ? null
            : 'Please choose an option.',

    // Validates a textarea or multiline input
    textarea: (value: string) =>
        value.trim().length > 0
            ? null
            : 'This field cannot be empty. Please provide a response.',
};
