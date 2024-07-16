import * as Yup from "yup";
 
export const signUpSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Enter your email"),
  password: Yup.string().min(6).required("Enter your password"),
});
