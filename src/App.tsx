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
