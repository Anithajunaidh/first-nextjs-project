
import React from 'react';
import {  Field, Form, Formik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {  LoginvalidationSchema } from '@/utils/Validations';
import CustomButton from '@/components/CustomButton';
import TextInput from '@/components/TextInput';
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
    // <div className="login-container">
    //   <h1>Login</h1>
    <div className="flex h-screen flex-col items-center justify-center bg-gray-100">
    <h1 className="mb-4 text-4xl font-bold">Login</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={LoginvalidationSchema}
        onSubmit={onSubmit}
      >
        <Form className="rounded bg-white p-6 shadow-md space-y-6">
             <Field type="text" name="username" label="Username" as={TextInput} fullWidth/>
             <Field type="password" name="password" label="Password" as={TextInput} fullWidth />  
          {/* <CustomButton type="submit" variant ='contained' color='primary'>
            Login
          </CustomButton> */}
          <CustomButton
            type="submit"
            //className="focus:shadow-outline-green rounded-full bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-600 focus:outline-none active:bg-green-700"
          >Login</CustomButton>
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
