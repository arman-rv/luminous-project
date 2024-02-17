import { type Locale } from "#/i18n.config";

export interface SignInFormDictProps {
  title: {
    [key in Locale]: string;
  };
  phoneOrGmail: {
    [key in Locale]: string;
  };
  password: {
    [key in Locale]: string;
  };
  button: {
    [key in Locale]: string;
  };
  rememberMe: {
    [key in Locale]: string;
  };
  forgot: {
    [key in Locale]: string;
  };
  question: {
    [key in Locale]: string;
  };
  link: {
    [key in Locale]: string;
  };
}

export const signInFormDict: SignInFormDictProps = {
  title: {
    fa: "ورود",
    en: "Sign In",
  },
  phoneOrGmail: {
    fa: "شماره‌ تلفن یا ایمیل",
    en: "Phone or Email",
  },
  password: {
    fa: "رمز عبور",
    en: "Password",
  },
  button: {
    fa: "ورود",
    en: "Sign In",
  },
  rememberMe: {
    fa: "مرا به خاطر بسپار",
    en: "Remember me",
  },
  forgot: {
    fa: "فراموشی رمز عبور",
    en: "Forgot password?",
  },
  question: {
    fa: "حساب کاربری ندارید؟",
    en: "Don't have an account?",
  },
  link: {
    fa: "ثبت‌نام",
    en: "Sign Up",
  },
};

export interface FirstSignUpFormDictProps {
  title: {
    [key in Locale]: string;
  };
  phone: {
    [key in Locale]: string;
  };
  button: {
    [key in Locale]: string;
  };
  link: {
    [key in Locale]: string;
  };
}

export const firstSignUpFormDict: FirstSignUpFormDictProps = {
  title: {
    fa: "ثبت‌نام",
    en: "Sign Up",
  },
  phone: {
    fa: "شماره همراه",
    en: "Phone Number",
  },
  button: {
    fa: "ارسال کد تایید",
    en: "Sending Confirmation Code",
  },
  link: {
    fa: "ورود به حساب کاربری",
    en: "Sign In",
  },
};

export interface SecondSignUpFormDictProps {
  title: {
    [key in Locale]: string;
  };
  code: {
    [key in Locale]: string;
  };
  button: {
    [key in Locale]: string;
  };
}

export const secondSignUpFormDict: SecondSignUpFormDictProps = {
  title: {
    fa: "ثبت‌نام",
    en: "Sign Up",
  },
  code: {
    fa: "کد تایید",
    en: "Confirmation Code",
  },
  button: {
    fa: "تایید",
    en: "Confirm",
  },
};

export interface ThirdSignUpFormDictProps {
  title: {
    [key in Locale]: string;
  };
  email: {
    [key in Locale]: string;
  };
  password: {
    [key in Locale]: string;
  };
  button: {
    [key in Locale]: string;
  };
}

export const thirdSignUpFormDict: ThirdSignUpFormDictProps = {
  title: {
    fa: "ثبت‌نام",
    en: "Sign Up",
  },
  email: {
    fa: "ایمیل",
    en: "Email",
  },
  password: {
    fa: "رمز عبور",
    en: "Password",
  },
  button: {
    fa: "ثبت‌نام",
    en: "Sign Up",
  },
};

export interface ResetPasswordFormDictProps {
  title: {
    [key in Locale]: string;
  };
  email: {
    [key in Locale]: string;
  };
  button: {
    [key in Locale]: string;
  };
  signIn: {
    [key in Locale]: string;
  };
  signUp: {
    [key in Locale]: string;
  };
}

export const resetPasswordFormDict: ResetPasswordFormDictProps = {
  title: {
    fa: "بازیابی رمز عبور",
    en: "Reset Password",
  },
  email: {
    fa: "ایمیل",
    en: "Email",
  },
  button: {
    fa: "ارسال کد تایید",
    en: "Sending Confirmation Code",
  },
  signIn: {
    fa: "ورود",
    en: "Sign In",
  },
  signUp: {
    fa: "ثبت‌نام",
    en: "Sign Up",
  },
};
