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
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto space-y-4">
      <Input
        name="name"
        label="Name"
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.name}
        schema="name"
      />

      <Input
        name="email"
        label="Email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.email}
        schema="email"
      />

      <Input
        name="password"
        label="Password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.password}
        schema="password"
      />

      <TextArea
        name="coverLetter"
        label="Cover Letter"
        value={values.coverLetter}
        error={errors.coverLetter}
        schema="textarea"
        onBlur={handleBlur}
        onChange={handleChange}
      />

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

      <FilePicker
        name="resume"
        label="Resume"
        onBlur={handleBlur}
        onChange={handleChange}
        schema="select"
        value={values.resume}
        error={errors.resume}
        key={"resume"}
      />

      <DatePicker
        name="dateOfBirth"
        label="Date of Birth"
        error={errors.dateOfBirth}
        value={values.dateOfBirth}
        onBlur={handleBlur}
        onChange={handleChange}
      />

      <TimePicker
        name="loginTime"
        label="Login Time"
        error={errors.loginTime}
        value={values.loginTime}
        onBlur={handleBlur}
        onChange={handleChange}
      />

      <SubmitButton disabled={hasErrors()} />
    </form>
  );
};

export default App;
