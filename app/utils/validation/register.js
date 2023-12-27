import * as Yup from "yup";

export const registerSchema = Yup.object({
  username: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().required(),
  confirmPassword: Yup.string().matches("password"),
  role: Yup.string().required()
});
