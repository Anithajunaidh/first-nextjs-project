import React from 'react';
import { useRouter } from 'next/router';
import {  Form, Formik, Field } from 'formik';
import { EmailvalidationSchema } from '@/utils/Validations';
import CustomButton from '@/components/CustomButton';
import TextInput from '@/components/TextInput';
const RegisterPage: React.FC = () => {
  const router = useRouter();
  const initialValues = {
    username: '',
    password: '',
    email: '',
  };
  const onSubmit = (values: {
    username: string;
    password: string;
    email: string;
  }) => {
    // You can add your authentication logic here
    console.log('Form Values:', values);
    router.push('/');
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-100">
      <h1 className="mb-4 text-4xl font-bold">Register</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={EmailvalidationSchema}
        onSubmit={onSubmit}
      >
        <Form className="rounded bg-white p-6 shadow-md space-y-6">
          {/* Username Field */}
          <Field
            label="Username"
            name="username"
            type="text"
            as={TextInput}
/>
            <Field
            label="Email"
              type="email"
              name="email"
          as={TextInput}  />
            <Field
              label="Password"
              type="password"
              name="password"
              className="w-full rounded-md border border-gray-400 px-3 py-2 focus:border-indigo-500 focus:outline-none"
            />
          {/* Register Button */}
          <CustomButton
            type="submit" 
           // className="focus:shadow-outline-green rounded-full bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-600 focus:outline-none active:bg-green-700"
          >
            Register
          </CustomButton>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterPage;
