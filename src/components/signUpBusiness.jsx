import { useFormik } from "formik";
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";

import Joi from "joi";
import Input from "./common/input";
import PageHeader from "./common/pageHeader";
import formikValidationUsingJoi from "../utilities/formikValidationUsingJoi";

import { useAuth } from "../context/auth.context";

const SignUpBusiness = () => {
  const [error, setError] = useState("");

  const { createUser, logIn, user } = useAuth();
  const navigate = useNavigate();

  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validate: formikValidationUsingJoi({
      name: Joi.string().min(2).max(255).required(),
      email: Joi.string()
        .min(2)
        .max(255)
        .required()
        .email({ tlds: { allow: false } }),
      password: Joi.string().min(6).max(1024).required(),
    }),

    async onSubmit(values) {
      try {
        await createUser({ ...values, biz: true });
        await logIn({ email: values.email, password: values.password });
        toast("Your account is ready!");
        navigate("/create-card");
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
        title="Sign Up With Business Account!"
        description="Create a free account and start creating your own Business cards and publish them on our website !"
      />
      <form onSubmit={form.handleSubmit} noValidate autoComplete="off">
        {error && <div className="alert alert-danger">{error}</div>}
        <Input
          type="text"
          label="User Name"
          required
          {...form.getFieldProps("name")}
          error={form.touched.name && form.errors.name}
        />
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
            Sign Up
          </button>
        </div>
      </form>
    </>
  );
};
export default SignUpBusiness;
