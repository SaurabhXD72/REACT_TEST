import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./Login.css";

const Login = () => {
  const [error, setError] = useState(null);
  console.log("Login rendered");//fail
  const navigate = useNavigate();
  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email().required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  });

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    const registeredUser = JSON.parse(localStorage.getItem("registeredUser"));
    if ( registeredUser && registeredUser.email === values.email && registeredUser.password === values.password) {
      setSubmitting(false);
      resetForm();
      navigate("/Welcome");
    }
    else {
      setError("Inavlid credentials");
      setSubmitting(false);
    }
    try {
      const { data } = await axios.post('https://reqres.in/api/login', values);
      console.log(data);
      setSubmitting(false);
      resetForm();
    } catch (err) {
      setError(err.message);
      setSubmitting(false);
    }
  };

  return (
    <div className = "login-container">
      <h2 className="login-title">Login</h2>
      {error && <p className="error">{error}</p>}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
          <div className="form-control">
            <Field name="email" type="email" placeholder="Email" />
            </div>
            <div className="form-control">
            <Field name="password" type="password" placeholder="Password" />
            </div>
            <button type="submit" className="submit-button" onClick={onSubmit}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
