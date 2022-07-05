import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { FormAction, Input, Alert, FormExtra, Header } from "./";

import { register } from "../../api/";
import { registerFields } from "../../constants/formFields";

const fields = registerFields;

const fieldsState = {};

fields.forEach((field) => (fieldsState[field.id] = ""));

export const Signup = () => {
  const [signupState, setSignupState] = useState(fieldsState);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      if (message.length > 1) return navigate("../login");
    }, 300);
  }, [message]);

  const handleChange = (e) =>
    setSignupState({ ...signupState, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password, confirmPassword } = signupState;
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    register({ username, email, password })
      .then((res) => {
        localStorage.setItem("AUTH_TOKEN", res.accessToken);
        navigate("/dashboard");
      })
      .catch((err) => {
        if (err.response.data) {
          setError(err.response.data);
        } else {
          setError(err.message);
        }
      });
  };

  return (
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-md w-full space-y-8 border p-8 rounded shadow-sm bg-white">
        <Header heading="Create an account" />
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="">
            {error && <Alert message={error} heading="Error" variant="error" />}
            {message && (
              <Alert
                message={message.payload}
                heading="Success"
                variant="success"
              />
            )}
            {fields.map((field) => (
              <Input
                key={field.id}
                handleChange={handleChange}
                value={signupState[field.id]}
                labelText={field.labelText}
                labelFor={field.labelFor}
                id={field.id}
                name={field.name}
                type={field.type}
                isRequired={field.isRequired}
                placeholder={field.placeholder}
              />
            ))}
            <FormExtra linkText={"Already Have an Account?"} linkUrl="/login" />
            <FormAction handleSubmit={handleSubmit} text="Register" />
          </div>
        </form>
      </div>
    </div>
  );
};
