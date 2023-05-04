import React from "react";
import './SignupForm.css'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import {Link, useNavigate} from 'react-router-dom';

const SignupForm = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().email().required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password")], "Passwords do not match"),
  });

  const onSubmit = (values, { setSubmitting }) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
  
    // checking if the user already exists
    const existingUser = users.find(user => user.email === values.email);
    if (existingUser) {
      alert("This email is already registered!");
      setSubmitting(false);
      return;
    }
  
    const newUser = {
      ...values,
      id: new Date().getTime(),
    };
  
    localStorage.setItem("users", JSON.stringify([...users, newUser]));
    alert("Registration done successfully!");
    navigate('/');
    setSubmitting(false);
  };
  

  const navigate=useNavigate();
  return (
    <div className="signup-main-div">
      <h1>Signup</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({isSubmitting }) => (
          <Form className="form-signup">
            <div>
              <label htmlFor="firstName">First Name</label> <br />
              <Field name="firstName" type="text" className='input-box-signup'/> <br />
              <ErrorMessage name="firstName" />
            </div>
            <br />
            <div>
              <label htmlFor="lastName">Last Name</label> <br />
              <Field name="lastName" type="text" className='input-box-signup'/> <br />
              <ErrorMessage name="lastName" />
            </div>
            <br />
            <div>
              <label htmlFor="email">Email</label> <br />
              <Field name="email" type="email" className='input-box-signup'/> <br />
              <ErrorMessage name="email" />
            </div>
            <br />
            <div>
              <label htmlFor="password">Password</label> <br />
              <Field name="password" type="password" className='input-box-signup'/> <br />
              <ErrorMessage name="password" />
            </div>
            <br />
            <div>
              <label htmlFor="confirmPassword">Confirm Password</label> <br />
              <Field name="confirmPassword" type="password" className='input-box-signup'/> <br />
              <ErrorMessage name="confirmPassword" />
            </div>
            <br />  <br /> <br />
            <button type="submit" disabled={isSubmitting} className="signup-btn">
              Signup
            </button>
          </Form>
        )}
      </Formik>
      <hr className="hr-signup"/>
          <Link to='/' className="signup-redirect">Already have an account? Sign in</Link>
    </div>
  );
};

export default SignupForm;
