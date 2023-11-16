import * as yup from "yup"

const schema = yup.object({
  firstName: yup.string().required("first name is required"),
  lastName: yup.string().required("last name is required"),
  email: yup.string().email("invalid email").required("email is required"),
  phone: yup.string().required("phone number is required"),
  notes: yup.string().required('notes are required'),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,20}$/,
      "password must contain 8 characters one uppercase one lowercase and one special case character"
    )
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "password must match")
    .required("confirm password is required"),
  address: yup.string().required("address is required"),
  id: yup.string().required("id  is required"),
});

export default schema;
