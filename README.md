# Feather Form🪶

A lightweight and robust form component package with built-in validations for React applications. Feather form provides fully typed, accessible, and customizable form components with integrated validation support.

[![npm version](https://badge.fury.io/js/formx.svg)](https://badge.fury.io/js/feather-from)

<p align="center">
  <img src="./src/assets/demo.gif" alt="Feather Forms Demo" width="1000"/>
</p>

## Features

- 🎯 9 Pre-built form components
- ✅ Built-in validation schemas
- 🎨 Fully customizable with Tailwind CSS
- 📱 Responsive and accessible
- 🔒 TypeScript support
- 🪶 Lightweight (~20KB gzipped)

## Installation

```bash
npm install formx
```
### or
```bash
yarn add formx
```
### or
```bash
pnpm add formx
```

## Basic Usage
```ts
import { Input, useFormValidation } from 'formx';

const MyForm = () => {
  const { values, errors, handleChange, handleBlur } = useFormValidation({
    username: ''
  });

  return (
    <Input
      name="username"
      label="Username"
      value={values.username}
      onChange={handleChange}
      onBlur={handleBlur}
      error={errors.username}
      schema="name"
    />
  );
};
```

## Components
### Input
A flexible input component for text based inputs like name, email and password with built-in validation.
#### Props
| Prop        | Type   | Required | Description         |
|-------------|--------|----------|---------------------|
| name        | string | Yes      | Field identifier    |
| label       | string | Yes      | Input label         |
| value       | string | Yes      | Input value         |
| onChange    | function | Yes    | Change handler      |
| onBlur      | function | Yes    | Blur handler        |
| error       | string | No       | Error message       |
| schema      | string | No       | Validation schema   |
| styleProps  | object | No       | Style customization |

#### Style Props
```JSX
styleProps?: {
  container?: string;    // Wrapper div
  label?: string;        // Label element
  inputWrapper?: string; // Input container
  input?: string;        // Input element
  passwordToggle?: string; // Password visibility toggle
  errorText?: string;    // Error message
}
```
#### Example
```JSX
<Input
  name="email"
  label="Email Address"
  value={values.email}
  onChange={handleChange}
  onBlur={handleBlur}
  error={errors.email}
  schema="email"
  styleProps={{
    container: "mb-4",
    label: "font-bold",
    input: "px-4 py-2"
  }}
/>
```

### Select
A customizable select dropdown component

#### Props
| Prop        | Type      | Required | Description         |
|-------------|-----------|----------|---------------------|
| name        | string    | Yes      | Field identifier    |
| label       | string    | Yes      | Select label        |
| value       | string    | Yes      | Selected value      |
| options     | string[]  | Yes      | Values to select from in dropdown    |
| onChange    | function  | Yes      | Change handler      |
| onBlur      | function  | Yes      | Blur handler        |
| error       | string    | No       | Error message       |
| schema      | string    | No       | Validation schema   |
| styleProps  | object    | No       | Style customization |

#### Style Props
```JSX
styleProps?: {
  container?: string;        // Main container
  label?: string;         // Label element
  dropdownTrigger?: string; // Dropdown button
  dropdownList?: string;  // Options container
  option?: string;        // Individual option
  optionSelected?: string; // Selected option
  error?: string;         // Error message
}
```

#### Example
```JSX
      <Select
        name="role"
        label="Job Role"
        error={errors.role}
        onBlur={handleBlur}
        onChange={handleChange}
        schema="select"
        value={values.role}
        options={["SDE1", "SDE2", "SDE3", "SA", "PE"]}
      />
```

### Searchable Dropdown
A customizable searchable dropdown component

#### Props
| Prop        | Type      | Required | Description         |
|-------------|-----------|----------|---------------------|
| name        | string    | Yes      | Field identifier    |
| label       | string    | Yes      | Select label        |
| value       | string    | Yes      | Selected value      |
| options     | string[]  | Yes      | Values to select from in dropdown    |
| onChange    | function  | Yes      | Change handler      |
| onBlur      | function  | Yes      | Blur handler        |
| error       | string    | No       | Error message       |
| schema      | string    | No       | Validation schema   |
| styleProps  | object    | No       | Style customization |

#### Style Props
```JSX
styleProps?: {
  wrapper?: string;        // Main container
  label?: string;         // Label element
  dropdownTrigger?: string; // Dropdown button
  dropdownList?: string;  // Options container
  option?: string;        // Individual option
  optionSelected?: string; // Selected option
  error?: string;         // Error message
}
```

#### Example
```JSX
      <SearchableDropdown
        name="department"
        label="Department"
        value={values.department}
        error={errors.department}
        onBlur={handleBlur}
        onChange={handleChange}
        options={[
          "Frontend",
          "Backend",
          "Database Management",
          "DevOps",
          "DevRel",
          "Mobile",
          "Human Resource",
        ]}
        schema="select"
      />
```

### Radio Group
A flexible input component which allows you to render single-select radio buttons

#### Props
| Prop        | Type      | Required | Description        |
|-------------|-----------|----------|--------------------|
| name        | string    | Yes      | Field identifier   |
| label       | string    | Yes      | Group label        |
| options     | string[]  | Yes      | Radio options      |
| value       | string    | Yes      | Selected value     |
| onChange    | function  | Yes      | Change handler     |
| error       | string    | No       | Error message      |

#### Style Props
```JSX
styleProps?: {
  container?: string;       // Wrapper div
  label?: string;          // Group label
  optionsContainer?: string; // Container for radio options
  optionItem?: string;     // Individual radio item wrapper
  optionLabel?: string;    // Label for each radio option  
  radioInput?: string;     // Radio input element
  errorText?: string;      // Error message
}
```

#### Example
```JSX
      <RadioGroup
        name="gender"
        label="Gender"
        options={["male", "female"]}
        value={values.gender}
        key="gender"
        onBlur={handleBlur}
        onChange={handleChange}
        error={errors.gender}
        schema="select"
      />
```

### Text Area
A mulit-line text input useful for paragraph based content

#### Props
| Prop        | Type      | Required | Description         |
|-------------|-----------|----------|---------------------|
| name        | string    | Yes      | Field identifier    |
| label       | string    | Yes      | TextArea label      |
| value       | string    | Yes      | Input value         |
| onChange    | function  | Yes      | Change handler      |
| onBlur      | function  | Yes      | Blur handler        |
| error       | string    | No       | Error message       |
| schema      | string    | No       | Validation schema   |

#### Style Props
```JSX
styleProps?: {
  container?: string;    // Wrapper div
  label?: string;       // Label element
  textArea?: string;    // Textarea element
  errorText?: string;   // Error message
}
```

#### Example
```JSX
<TextArea
  name="coverLetter"
  label="Cover Letter"
  value={values.coverLetter}
  error={errors.coverLetter}
  schema="textarea"
  onBlur={handleBlur}
  onChange={handleChange}
  styleProps={{
    container: "mb-4",
    label: "font-bold",
    textArea: "p-2 h-32"
  }}
/>
```

### Date Picker
A date picker component with built-in validation requiring date to be selected before submitting

#### Props
| Prop        | Type      | Required | Description         |
|-------------|-----------|----------|---------------------|
| name        | string    | Yes      | Field identifier    |
| label       | string    | Yes      | TextArea label      |
| value       | string    | Yes      | Input value         |
| onChange    | function  | Yes      | Change handler      |
| onBlur      | function  | Yes      | Blur handler        |
| error       | string    | No       | Error message       |
| schema      | string    | No       | Validation schema   |

#### Style Props
```JSX
styleProps?: {
  container?: string;      // Wrapper div
  label?: string;         // Label element
  inputContainer?: string; // Date input container
  input?: string;         // Date input element
  errorText?: string;     // Error message
}
```

#### Example
```JSX
<DatePicker
  name="dateOfBirth"
  label="Date of Birth"
  value={values.dateOfBirth}
  onChange={handleChange}
  onBlur={handleBlur}
  error={errors.dateOfBirth}
  styleProps={{
    container: "mb-4",
    label: "font-bold",
    input: "p-2"
  }}
/>
```

### Time Picker
A time picker component with built-in validation requiring date to be selected before submitting

#### Props
| Prop        | Type      | Required | Description         |
|-------------|-----------|----------|---------------------|
| name        | string    | Yes      | Field identifier    |
| label       | string    | Yes      | Time picker label   |
| value       | string    | Yes      | Selected time       |
| onChange    | function  | Yes      | Change handler      |
| onBlur      | function  | Yes      | Blur handler        |
| error       | string    | No       | Error message       |

#### Style Props
```JSX
styleProps?: {
  container?: string;      // Wrapper div
  label?: string;         // Label element
  inputContainer?: string; // Time input container
  input?: string;         // Time input element
  errorText?: string;     // Error message
}
```

#### Example
```JSX
<TimePicker
  name="loginTime"
  label="Login Time"
  value={values.loginTime}
  onChange={handleChange}
  onBlur={handleBlur}
  error={errors.loginTime}
  styleProps={{
    container: "mb-4",
    label: "font-bold",
    input: "p-2"
  }}
/>
```

### File Picker
A file picker component with built-in validation requiring the file to be selected before submitting

#### Props
| Prop        | Type      | Required | Description         |
|-------------|-----------|----------|---------------------|
| name        | string    | Yes      | Field identifier    |
| label       | string    | Yes      | File picker label   |
| value       | File      | Yes      | Selected file       |
| onChange    | function  | Yes      | Change handler      |
| onBlur      | function  | Yes      | Blur handler        |
| error       | string    | No       | Error message       |
| schema      | string    | Yes      | Validation schema   |

#### Style Props
```JSX
styleProps?: {
  container?: string;    // Wrapper div
  label?: string;       // Label element
  input?: string;       // File input element
  button?: string;      // Upload button
  fileName?: string;    // Selected filename text
  errorText?: string;   // Error message
}
```

#### Example
```JSX
<FilePicker
  name="resume"
  label="Resume"
  value={values.resume}
  onChange={handleChange}
  onBlur={handleBlur}
  error={errors.resume}
  schema="file"
  styleProps={{
    container: "mb-4",
    label: "font-bold",
    button: "bg-blue-500 text-white px-4 py-2 rounded"
  }}
/>
```

### Submit Button
The submit button component of our useFormValidation component, it's responsible for submitting the form

#### Props
| Prop        | Type      | Required | Description         |
|-------------|-----------|----------|---------------------|
| disabled    | boolean   | Yes      | Button disabled state |
| label       | string    | No       | Button text         |
| styleProps  | object    | No       | Style customization |


#### Style Props
```JSX
styleProps?: {
  base?: string;      // Base button styles
  enabled?: string;   // Enabled state styles
  disabled?: string;  // Disabled state styles
}
```

#### Example
```JSX
<SubmitButton
  disabled={hasErrors()}
  label="Submit Form"
  styleProps={{
    base: "p-2 rounded text-white w-full",
    enabled: "bg-blue-500 hover:bg-blue-600",
    disabled: "bg-gray-400 cursor-not-allowed"
  }}
/>
```

## Validation Schema
- **name**: Validates names (letters only)
- **email**: Validates email addresses
- **password**: Minimum 8 characters, including letters, numbers, and special characters
- **select**: Validates a value from the dropdown has been selected
- **radio**: Validates one radio button is selected
- **textarea**: Validates text area isn't empty
- **file**: Validates file has been selected
- **date**: Validates date selections

## Complete Example
```JSX
import React from "react";
import {
  DatePicker,
  FilePicker,
  Input,
  RadioGroup,
  SearchableDropdown,
  Select,
  SubmitButton,
  TextArea,
  TimePicker,
} from "./components";

import { useFormValidation } from "./hooks";

const App = () => {
  const { values, errors, handleChange, handleBlur, hasErrors } =
    useFormValidation({
      name: "",
      email: "",
      password: "",
      coverLetter: "",
      gender: "",
      role: "",
      department: "",
      resume: "",
      dateOfBirth: "",
      loginTime: "",
    });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", values);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Feather From🪶
          </h1>
          <p className="text-gray-600">
            Elegant and Responsive Form Components
          </p>
        </div>

        <form
          className="bg-white rounded-2xl shadow-xl p-8 space-y-8"
          onSubmit={(e) => handleSubmit(e)}
        >
          {/* Personal Information Section */}
          <section className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800 pb-2 border-b">
              Personal Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                name="name"
                label="Full Name"
                value={values.name}
                error={errors.name}
                onChange={handleChange}
                onBlur={handleBlur}
                schema="name"
              />
              <Input
                name="email"
                label="Email Address"
                value={values.email}
                error={errors.email}
                onChange={handleChange}
                onBlur={handleBlur}
                schema="email"
              />
            </div>
            <Input
              name="password"
              label="Password"
              value={values.password}
              error={errors.password}
              onChange={handleChange}
              onBlur={handleBlur}
              schema="password"
            />
          </section>

          {/* Professional Details Section */}
          <section className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800 pb-2 border-b">
              Professional Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                name="department"
                label="Department"
                value={values.department}
                error={errors.department}
                onChange={handleChange}
                onBlur={handleBlur}
                options={["Engineering", "Design", "Marketing", "Sales"]}
                schema="select"
              />
              <SearchableDropdown
                name="role"
                label="Role"
                value={values.role}
                error={errors.role}
                onChange={handleChange}
                onBlur={handleBlur}
                options={["Developer", "Designer", "Manager", "Director"]}
                schema="select"
              />
            </div>
            <TextArea
              name="coverLetter"
              label="Cover Letter"
              value={values.coverLetter}
              error={errors.coverLetter}
              onChange={handleChange}
              onBlur={handleBlur}
              schema="textarea"
            />
          </section>

          {/* Additional Information Section */}
          <section className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800 pb-2 border-b">
              Additional Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <DatePicker
                name="dateOfBirth"
                label="Date of Birth"
                value={values.dateOfBirth}
                error={errors.dateOfBirth}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <TimePicker
                name="loginTime"
                label="Preferred Login Time"
                value={values.loginTime}
                error={errors.loginTime}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <RadioGroup
              name="gender"
              label="Gender"
              value={values.gender}
              error={errors.gender}
              onChange={handleChange}
              onBlur={handleBlur}
              options={["Male", "Female", "Other"]}
              schema="radio"
            />
            <FilePicker
              name="resume"
              label="Upload Resume"
              value={values.resume}
              error={errors.resume}
              onChange={handleChange}
              onBlur={handleBlur}
              schema="file"
            />
          </section>

          <div className="pt-6">
            <SubmitButton label="Submit Application" disabled={hasErrors()} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;

```