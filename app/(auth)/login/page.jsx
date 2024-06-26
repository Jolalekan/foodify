"use client";

import { useFormik } from "formik";
import { useLogin } from "../../hooks/auth";
import { TextInput, PasswordInput } from "../../components/widgets/input";
import { Button } from "../../components/widgets/button";
import { loginConstant } from "../../utils/constant";
import { loginSchema } from "../../utils/validation";
import { useContext, useEffect } from "react";
import AuthContext from "../../components/AppContext";

export default function Login() {
  const { loading, login } = useLogin();
  const {setUserData }= useContext(AuthContext)

  const formik = useFormik({
    initialValues: loginConstant,
    validationSchema: loginSchema,
    // onSubmit: (events) => login(events)
    onSubmit:async(value)=>{
      const userData = await login(value)
      if(userData && setUserData){
        setUserData(userData)
      }
    }
  });

  return (
    <main>
      <div className={"flex justify-center h-screen items-center"}>
        <div className={"w-[90%] sm:w-[90%] md:w-[30%]"}>
          <p className={"font-bold text-[25px] pb-3 text-primary-100"}>
            Foodify login
          </p>
          <div className={"py-2"}>
            <form onSubmit={formik.handleSubmit}>
              <TextInput
                type={"email"}
                label={"Email"}
                placeholder={"user@gmail.com"}
                name={"email"}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.fieldName}
                error={formik.errors.email}
              />
              <PasswordInput
                className={"mt-3"}
                label={"Password"}
                placeholder={"******"}
                name={"password"}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.fieldName}
                error={formik.errors.password}
              />

              <Button
                type={"submit"}
                className={"mt-7"}
                label={"Login"}
                loading={loading}
              />
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
