import customErrors from '@/lib/react-hook-form/errors';

const EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const validationOptions = {
  email: {
    required: customErrors.required,
    pattern: {
      value: EMAIL_REGEXP,
      message: customErrors.email,
    },
  },
  password: {
    required: customErrors.required,
  },
  isSavePassword: {},
};

export type ValidationTypes = typeof validationOptions;

export default validationOptions;
