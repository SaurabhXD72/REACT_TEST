import React from 'react';
import { Formik, Form, Field } from 'formik';
import Axios from 'axios';
import * as Yup from 'yup';
import './Register.css';
import { useNavigate } from 'react-router-dom';

const RegisterSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

const RegisterForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (values, { setSubmitting, resetForm, setStatus, setErrors }) => {
    if (!values.email || !values.password) {
      setErrors({ submit: 'Please enter both email and password' });
      return;
    }
    const data = {
      email:values.email,
      password:values.password
    }
    
    console.log(values);
    Axios.post('https://reqres.in/api/register', data,{//this doesnt seems to be working bcz we dont know the specefic requirements that the reqres api wants
      headers: {'Content-Type': 'application/json'
    }
    })
      .then(res => {
        console.log(res);
        setSubmitting(false);
        resetForm();
        setStatus({ success: true });
        //navigate('/login');
      })
      .catch(error => {
        console.error(error);
        setSubmitting(false);
        setErrors({ submit: error.message });
      })
      .finally(() => {
        const registeredUser = {
          email:values.email,
          password:values.password
        };
        localStorage.setItem("registeredUser", JSON.stringify(registeredUser));

        console.log(localStorage);
        navigate("/login");
      });
  };

  return (
    <div className="register-container">
      <h1>Register</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={RegisterSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="form-group">
              <Field type="text" name="firstName" placeholder="First Name" />
            </div>
            <div className="form-group">
              <Field type="text" name="lastName" placeholder="Last Name" />
            </div>
            <div className="form-group">
              <Field type="email" name="email" placeholder="Email" />
            </div>
            <div className="form-group">
              <Field type="password" name="password" placeholder="Password" />
            </div>
            <div className="form-group">
              <Field type="password" name="confirmPassword" placeholder="Confirm Password" />
            </div>
            <button type="submit" className="submit-button"disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm;
