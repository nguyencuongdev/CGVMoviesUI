import * as yup from 'yup';

const regexPhone = /^0[0-9]{9}$/;
const regexEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regexPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).+$/;
const yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);
// yesterday.setHours(0, 0, 0, 0);

export const loginValidationSchema = yup.object({
  account: yup
    .string()
    .required('required-message')
    .test(
      'is valid phone number or email',
      'login-form-account-is-phonenumber-email',
      value => regexPhone.test(value) || regexEmail.test(value),
    ),
  password: yup
    .string()
    .required('required-message')
    .min(8, 'password-validation-min')
    .max(50, 'password-validation-max')
    .matches(regexPassword, 'password-validation-not-valid'),
});

export const RegisterValidationSchema = yup.object({
  name: yup
    .string()
    .required('required-message')
    .min(3, 'register-form-name-validation-min')
    .max(50, 'register-form-name-validation-max'),
  phoneNumber: yup
    .string()
    .required('required-message')
    .test('check phone number is valid', 'phone-number-notvalid', value => regexPhone.test(value)),
  email: yup.string().required('required-message').email('email-notvalid'),
  password: yup
    .string()
    .required('required-message')
    .min(8, 'password-validation-min')
    .max(50, 'password-validation-max')
    .matches(regexPassword, 'password-validation-not-valid'),
  rePassword: yup
    .string()
    .required('required-message')
    .min(8, 'repassword-validation-min')
    .max(50, 'repassword-validation-max')
    .oneOf([yup.ref('password')], 'repassword-validation-notmach'),
  dateOfBirth: yup.date().required('required-message').max(yesterday, 'register-form-dob-invalid'),
  gender: yup.string().required('required-message'),
  faviousRaps: yup.array().of(yup.string()).nullable(),
});
