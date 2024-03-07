
export interface SignupEntity {
  firstName: string;
  lastName: string;
  mobile: string;
  email: string;
  password: string;
  firstNameError:string,
  lastNameError:string,
  mobileError:string,
  emailError:string,
  passwordError:string,
}

export type  SigninEntity = Pick<SignupEntity,"email"|"password"|"emailError"|"passwordError">
