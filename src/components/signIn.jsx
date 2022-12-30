import { useFormik } from "formik";
import { useNavigate, Navigate } from "react-router-dom";
import { useState } from "react";

import Joi from "joi";
import Input from "./common/input";
import PageHeader from "./common/pageHeader";
import formikValidationUsingJoi from "../utilities/formikValidationUsingJoi";

import { useAuth } from "../context/auth.context";

const SignIn = () => {
  const [error, setError] = useState("");

  const { logIn: logInUser, user } = useAuth();
  const navigate = useNavigate();

  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      email: "",
      password: "",
    },
    validate: formikValidationUsingJoi({
      email: Joi.string()
        .min(2)
        .max(255)
        .required()
        .email({ tlds: { allow: false } }),
      password: Joi.string().min(6).max(1024).required(),
    }),

    async onSubmit(values) {
      try {
        await logInUser(values);
        navigate("/");
      } catch ({ response }) {
        if (response && response.status === 400) {
          setError(response.data);
        }
      }
    },
  });

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <PageHeader
        title="Sign In to your account"
        description="Mange your account ,explore and get in touch with our world wide business's selection !"
      />
      <form onSubmit={form.handleSubmit} noValidate autoComplete="off">
        {error && <div className="alert alert-danger">{error}</div>}
        <Input
          type="email"
          label="Email"
          required
          {...form.getFieldProps("email")}
          error={form.touched.email && form.errors.email}
        />
        <Input
          type="password"
          label="Password"
          required
          {...form.getFieldProps("password")}
          error={form.touched.password && form.errors.password}
        />

        <div className="my-2">
          <button
            type="submit"
            disabled={!form.isValid}
            className="btn btn-primary"
          >
            Sign In
          </button>
        </div>
      </form>
    </>
  );
};
export default SignIn;
