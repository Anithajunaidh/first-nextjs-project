import React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';
type BUTTON_TYPES = 'PRIMARY' | 'SECONDARY' | 'TERTIARY';

interface CustomButtonProps extends ButtonProps {
  buttonType: BUTTON_TYPES;
}

function CustomButtonNew({ buttonType, ...props }: CustomButtonProps) {
  const buttonStyles = {
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 5,
    width:'100%', 
  };

  const buttonProps: ButtonProps = {
    ...props,
    sx: {
      ...buttonStyles,
      ...(buttonType === 'PRIMARY' && {
        variant: 'contained',
        backgroundColor:'#00AA7F',
        color:'white',  
        '&:hover': { 
          backgroundColor: '#00AA7F',
        },
      }),
      ...(buttonType === 'SECONDARY' && { variant: 'outlined',color: '#00AA7F'}),
      ...(buttonType === 'TERTIARY' && { variant: 'text', color: 'primary' }),
      ...props.sx,
    },
  };

  return <Button {...buttonProps}>{props.children}</Button>;
}

export default CustomButtonNew;
