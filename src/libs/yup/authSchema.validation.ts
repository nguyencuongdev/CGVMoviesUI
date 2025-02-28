import { object, string } from 'yup';

const regexPhone = /^0[0-9]{9}$/;
const regexEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const loginValidationSchema = object({
  account: string()
    .required('login-form-account-validation-required')
    .test(
      'is valid phone number or email',
      'login-form-account-is-phonenumber-email',
      value => regexPhone.test(value) || regexEmail.test(value),
    ),
  password: string()
    .required('login-form-password-validation-required')
    .min(8, 'login-form-password-validation-min')
    .max(50, 'login-form-password-validation-max'),
});
