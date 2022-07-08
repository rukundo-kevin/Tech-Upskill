/* eslint-disable consistent-return */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

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
  const { error, isAuth, token , userData} = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  useEffect(() => {
    setTimeout(() => {
     if (isAuth) return navigate('/dashboard');
    }, 300);
  }, [isAuth]);

  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = loginState;
     dispatch(login({ email, password }));
     return navigate("/dashboard");
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
