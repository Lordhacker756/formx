import React from "react";
import Input from "./components/Input";
import SubmitButton from "./components/SubmitButton";
import useFormValidation from "./hooks/useFormValidation";
import TextArea from "./components/TextArea";

const App = () => {
  const { values, errors, handleChange, handleBlur, hasErrors } =
    useFormValidation({
      name: "",
      email: "",
      password: "",
      coverLetter: "",
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

      <SubmitButton disabled={hasErrors()} />
    </form>
  );
};

export default App;
