export const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidPassword = (password: string) => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  return passwordRegex.test(password);
};

export const isValidPasswordConfirmation = (
  password: string,
  confirmPassword: string
) => {
  return password === confirmPassword;
};
