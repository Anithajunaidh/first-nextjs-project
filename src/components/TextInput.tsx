
// import React from 'react'
// type Props= React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>&{}
// const TextInput = (props:Props) => {
//   return (
//    <label>
//     {props.title && <div> {props.title}{props.required&&<span>*</span>} </div>}
//    <input {...props}/>
//    </label>
//   )
// }

// export default TextInput


// import React from 'react';
// import TextField from '@mui/material/TextField';

// type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
//   title?: string;
//   required?: boolean;
// };

// const TextInput = (props: Props) => {
//   const { title, required, ...inputProps } = props;

//   return (
//     <TextField
//       label={title}
//       variant="outlined"
//       required={required}
//       fullWidth
//       InputLabelProps={{
//         shrink: true,
//       }}
//       {...inputProps}
//     />
//   );
// };

// export default TextInput;

import React from 'react';
import { Field, ErrorMessage, FieldProps, useFormikContext } from 'formik';
import { TextField } from '@mui/material';
interface TextInputProps {
  label: string;
  name: string;
  type:string;
  // You can include any other props specific to your component here
}
const TextInput: React.FC<TextInputProps> = ({ label, name, ...props }) => {
  const { touched } = useFormikContext();
  const fieldName: string = name;
  return(
  <div>
    <Field name={name}>
      {({ field }: FieldProps) => (
        <TextField
          fullWidth
          label={label}
          variant="outlined"
          id={name}
          {...field}
          {...props}
        />
      )}
    </Field>
    {touched[fieldName] && <ErrorMessage name={fieldName} component="div" className="error-message" />}  </div>
);
      };
export default TextInput;

