import { useRouter } from 'next/router';
import {  Field, Form, Formik, } from 'formik';
import CustomButton from '@/components/CustomButton';
import TextInput from '@/components/TextInput';
import { ChangePasswordSchema } from '@/utils/Validations';
const ChangePasswordPage: React.FC = () => {
const router=useRouter();
const initialValues={currentPassword:'',newPassword:'',confirmPassword:''}
  const onSubmit = (values:{currentPassword:string,newPassword:string ,confirmPassword:string}) => {
    console.log('Form Values:', values);
router.push('/login')
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-100">
      <h1 className="mb-4 text-4xl font-bold">Change Password</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={ChangePasswordSchema}>
      <Form className="rounded bg-white p-6 shadow-md space-y-6">
      <Field type="password" name="currentPassword" label="Current Password" as={TextInput} fullWidth/> 
      <Field type="password" name="newPassword" label="New Password" as={TextInput} fullWidth/> 
      <Field type="password" name="confirmPassword" label="Confirm Password" as={TextInput} fullWidth/>
        {/* Change Password Button */}
        <CustomButton
          type="submit"
         // className="focus:shadow-outline-blue rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600 focus:outline-none active:bg-blue-700"
        >
          Change Password
        </CustomButton>
      </Form>
      </Formik>
    </div>
  );
};

export default ChangePasswordPage;
