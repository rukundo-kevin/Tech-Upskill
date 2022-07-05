/* eslint-disable consistent-return */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import jwtDecode from "jwt-decode";

import { FormAction, Input, Alert, FormExtra, Header } from "./";

import { login } from "../../api";
import { loginFields } from "../../constants/formFields";

const fields = loginFields;

const fieldsState = {};
fields.forEach((field) => {
  fieldsState[field.id] = "";
});

const Login = () => {
  const [loginState, setLoginState] = useState(fieldsState);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      if (localStorage.getItem("AUTH_TOKEN")) return navigate("/");
    }, 300);
  }, []);

  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(loginState)
      .then((res) => {
        localStorage.setItem("AUTH_TOKEN", res.accessToken);
        localStorage.setItem("userEmail", res.user.email);
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
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="">
            <Header heading="Login to Flashcards" />

            {error && <Alert message={error} heading="Error" variant="error" />}
            {fields.map((field) => (
              <Input
                key={field.id}
                handleChange={handleChange}
                value={loginState[field.id]}
                labelText={field.labelText}
                labelFor={field.labelFor}
                id={field.id}
                name={field.name}
                type={field.type}
                isRequired={field.isRequired}
                placeholder={field.placeholder}
              />
            ))}
          </div>
          <FormExtra
            linkText={"Don't have an account yet? "}
            linkUrl="/register"
          />
          <FormAction handleSubmit={handleSubmit} text="Login" />
        </form>
      </div>
    </div>
  );
};

export default Login;
