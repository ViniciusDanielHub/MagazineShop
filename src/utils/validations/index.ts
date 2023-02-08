import * as yup from "yup";

export const signUpSchema = yup
  .object({

    username: yup
      .string()
      .min(3, 'Should be at least 3 characters')
      .required('Username is required'),

    email: yup
      .string()
      .email('Please enter a valid email')
      .required('Email is required'),

    password: yup
      .string()
      .required("Please enter your password")
      .matches(
        /\w*[a-z]\w*/,
        "The password must have at least one lower case letter"
      )
      .matches(
        /\w*[A-Z]\w*/,
        "Password must have at least one capital letter"
      )
      .matches(
        /\d/,
        "Password must contain number"
      )
      .matches(
        /[!@#$%ˆ&*()\-_"=+{}; :,<.>]/,
        "Password must have a special character"
      )
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required('Password is required')
  })
  .required();


export const verifyUserAccountSchema = yup
  .object({
    code: yup
      .string()
      .required('Username is required'),
  })
  .required();


export const signInSchema = yup
  .object({

    email: yup
      .string()
      .email('Please enter a valid email')
      .required('Email is required'),

    password: yup
      .string()
      .required('Password is required')
  })
  .required();


export const forgotPasswordSchema = yup
  .object({
    email: yup
      .string()
      .required('Code is required'),
  })
  .required();
  

export const resetPasswordSchema = yup
  .object({
    code: yup
      .string()
      .required('Code is required'),

    newPassword: yup
      .string()
      .required("Please enter your password")
      .matches(
        /\w*[a-z]\w*/,
        "The password must have at least one lower case letter"
      )
      .matches(
        /\w*[A-Z]\w*/,
        "Password must have at least one capital letter"
      )
      .matches(
        /\d/,
        "Password must contain number"
      )
      .matches(
        /[!@#$%ˆ&*()\-_"=+{}; :,<.>]/,
        "Password must have a special character"
      )
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required('Password is required'),

    confirmPassword: yup
      .string()
      .oneOf([yup.ref('newPassword')], 'Passwords do not match')
      .required('Confirm password is required'),
  })
  .required();