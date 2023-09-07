
import React from 'react';
import { Form, Formik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/router';
import TextInput from '@/components/TextInput';
import { validationSchema } from '@/components/Validations';
import '../styles/login.css';


const LoginPage: React.FC = () => {
  const router = useRouter();

  // Define a validation schema
  const initialValues = {
    username: '',
    password: '',
  };

  const onSubmit = (values: { username: string; password: string }) => {
    // You can add your authentication logic here
    console.log('Form Values:', values);
    // For example, you can make an API request to validate the credentials
    router.push('/');
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="login-form">
             <TextInput type="text" name="username" label="Username" />
             <TextInput type="password" name="password" label="Password" />  
          <button type="submit" className="login-button">
            Login
          </button>
        </Form>
      </Formik>
      <Link className="login-link" href="/change-password">
        Change Password
      </Link>
      <Link className="login-link" href="/forgot-password">
        Forgot Password
      </Link>
      <Link className="login-link" href="/register">
        Register
      </Link>
    </div>
  );
};

export default LoginPage;
