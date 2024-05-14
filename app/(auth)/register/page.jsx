"use client";

import { useFormik } from "formik";
import { useRegister } from "../../hooks/auth";
import { TextInput, PasswordInput } from "../../components/widgets/input";
import { Button } from "../../components/widgets/button";
import { RegisterConstant } from "../../utils/constant";
import { registerSchema } from "../../utils/validation";


export default function Register() {
  const { login, loading, userCreated, error } = useRegister();

  console.log("Error during registration",error)
  const formik = useFormik({
    initialValues: RegisterConstant,
    validationSchema: registerSchema,
    onSubmit: (events) => login(events),
  });

  return (
    <main>
      
      <div className={"flex justify-center h-screen items-center"}>
        <div className={"w-[90%] sm:w-[90%] md:w-[30%]"}>
          <p className={"font-bold text-[25px] pb-3 text-primary-100"}>
            Foodify Register
          </p>
          {userCreated && (
        <div className="text-center font-normal text-green-700">User created succesful you can login</div>
      )}
          <div className={"py-2"}>
            <form onSubmit={formik.handleSubmit}>
              <TextInput
                type={"email"}
                label={"Email"}
                placeholder={"user@gmail.com"}
                name={"email"}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                error={formik.errors.email}
              />
              <PasswordInput
                className={"mt-3"}
                label={"Password"}
                placeholder={"******"}
                name={"password"}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                error={formik.errors.password}
              />

              <Button
                type={"submit"}
                className={"mt-7"}
                label={"Register"}
                loading={loading}
              />
              {error && <p className="text-red-700">{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
