export const validateUser = (userData: {
  firstName: string;
  lastName: string;
  mobile: string;
  email: string;
  password: string;
}): { isValid: boolean; errors: { [key: string]: string } } => {
  const errors: { [key: string]: string } = {};

  if (userData.firstName.trim() === '') {
    errors.firstName = 'First name is required';
  }

  if (userData.lastName.trim() === '') {
    errors.lastName = 'Last name is required';
  }

  if (!/^\d{10}$/.test(userData.mobile)) {
    errors.mobile = 'Invalid mobile number';
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email)) {
    errors.email = 'Invalid email address';
  }

  if (userData.password.length < 6) {
    errors.password = 'Password must be at least 6 characters long';
  }

  const isValid = Object.keys(errors).length === 0;

  return { isValid, errors };
};
export const validateSignIn = (userData: {
  email: string;
  password: string;
}): { isValid: boolean; errors: { [key: string]: string } } => {
  const errors: { [key: string]: string } = {};

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email)) {
    errors.email = 'Invalid email address';
  }

  if (userData.password.trim() === '') {
    errors.password = 'Password is required';
  }

  const isValid = Object.keys(errors).length === 0;

  return { isValid, errors };
};
export const  validateEmail = (email: string): boolean => {

  return /^\S+@\S+\.\S+$/.test(email);
};
