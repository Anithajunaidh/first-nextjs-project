import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import React from 'react';
import * as Yup from 'yup';

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
  };
  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    password: Yup.string()
      .required('Password is required')
      .test('is-strong-password', 'Password must be strong', (value) => {
        const strongPasswordRegex =
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return strongPasswordRegex.test(value || '');
      }),
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
  });
  // const handleRegistration = () => {
  //   // Add registration logic here using the username, email, and password state variables
  //   // For example, you can send a POST request to your API to register the user
  //   router.push('/');
  // };

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-100">
      <h1 className="mb-4 text-4xl font-bold">Register</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="rounded bg-white p-6 shadow-md">
          {/* Username Field */}
          <div className="mb-4">
            <label
              htmlFor="username"
              className="mb-2 block text-sm font-bold text-gray-700"
            >
              Username:
            </label>
            <Field
              type="text"
              id="username"
              name="username"
              className="w-full rounded-md border border-gray-400 px-3 py-2 focus:border-indigo-500 focus:outline-none"
              placeholder="Enter your username"
            />
            <ErrorMessage
              name="username"
              component="div"
              className="mt-1 text-sm text-red-600"
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-bold text-gray-700"
            >
              Email:
            </label>
            <Field
              type="email"
              id="email"
              name="email"
              className="w-full rounded-md border border-gray-400 px-3 py-2 focus:border-indigo-500 focus:outline-none"
              placeholder="Enter your email"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="mt-1 text-sm text-red-600"
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-bold text-gray-700"
            >
              Password:
            </label>
            <Field
              type="password"
              id="password"
              name="password"
              className="w-full rounded-md border border-gray-400 px-3 py-2 focus:border-indigo-500 focus:outline-none"
              placeholder="Enter your password"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="mt-1 text-sm text-red-600"
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="focus:shadow-outline-green rounded-full bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-600 focus:outline-none active:bg-green-700"
          >
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterPage;
