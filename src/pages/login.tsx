
import React from 'react';
import {  Field, Form, Formik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {  LoginvalidationSchema } from '@/utils/Validations';
//import CustomButton from '@/components/CustomButton';
import TextInput from '@/components/TextInput';
//import '../styles/login.css';
import CustomButtonNew from '@/components/button';
//import { useTheme } from '@/utils/ThemeContext';




const LoginPage: React.FC = () => {
  const router = useRouter();
  //const { theme, toggleTheme } = useTheme();
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
    <div className="flex h-screen flex-col items-center justify-center text-onNeutralBg">
      {/* <button onClick={toggleTheme}>Toggle Theme</button>
      <p>Current Theme: {theme}</p> */}
    <h1 className="mb-4 text-4xl font-bold">Login</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={LoginvalidationSchema}
        onSubmit={onSubmit}
      >
        <Form className="rounded  p-6 shadow-md space-y-6">
             <Field type="text" name="username" label="Username" as={TextInput} fullWidth />
             <Field type="password" name="password" label="Password" as={TextInput} fullWidth />  
          <CustomButtonNew
            type="submit" buttonType='PRIMARY'
          >Login</CustomButtonNew>

        </Form>
      </Formik>
      <Link className="login-link text-onNeutralBg" href="/change-password">
        Change Password
      </Link>
      <Link className="login-link text-onNeutralBg" href="/forgot-password">
        Forgot Password
      </Link>
      <Link className="login-link text-onNeutralBg" href="/register">
        Register
      </Link>
    </div>
  );
};

export default LoginPage;
