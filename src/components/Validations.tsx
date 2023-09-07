import * as Yup from 'yup';

export const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  password: Yup.string()
    .required('Password is required')
    .test('is-strong-password', 'Password must be strong', (value) => {
      // Example: At least 8 characters, 1 uppercase letter, 1 lowercase letter, and 1 special character
      const strongPasswordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      return strongPasswordRegex.test(value || '');
    }),
});