import React from "react";
import './Login.css'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import {Link, useNavigate} from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();
  
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
  });

  const onSubmit = (values, { setSubmitting }) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (u) => u.email === values.email && u.password === values.password
    );

    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      alert("logged in successfully!");
      navigate('/home'); 
    } else {
      alert("Invalid email or password");
    }
    setSubmitting(false);
  };

  return (
    <div className="login-main-div">
      <h1>Login here</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({isSubmitting }) => (
          <Form className="form-login">
            <div>
              <label htmlFor="email">Email</label> <br />
              <Field name="email" type="email" className='input-box'/> <br />
              <ErrorMessage name="email" /> 
            </div>
            <br />
            <div>
              <label htmlFor="password">Password</label> <br />
              <Field name="password" type="password" className='input-box'/> <br />
              <ErrorMessage name="password" />
            </div>
            <br />  <br /> <br />
            <button type="submit" disabled={isSubmitting} className="login-btn">
              Login
            </button>  
          </Form>
        )}
      </Formik>
      <hr className="hr-login"/>
          <Link to='/signup' className="signup-redirect">Don't have an account? Sign up</Link>
    </div>
  );
};

export default LoginForm;
