"use client";
import { useState } from "react";
import Image from "next/image";
import registerImage from "../../images/register.png";
import GoogleIcon from "@mui/icons-material/Google";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as Yup from "yup";
import { useFormik } from "formik";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleLogin = (values) => {
    setIsLoading(true);

    const registeredUser = JSON.parse(localStorage.getItem("fakeUser"));

    if (
      registeredUser &&
      registeredUser.email === values.email &&
      registeredUser.password === values.password
    ) {
      localStorage.setItem("token", "fakeAuthToken"); // Set fake token in localStorage
      router.push("/");
      setIsLoading(false);
    } else {
      setError("Invalid credentials or account does not exist.");
      setIsLoading(false);
    }
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .matches(/^[A-z0-9]{6,12}$/, "Password must be 6-12 characters")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: handleLogin,
  });

  return (
    <>
      <section className="flex flex-col lg:flex-row justify-around my-10">
        <div className="lg:w-1/2">
          <Image src={registerImage} width={"90%"} alt="login image" />
        </div>
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8 lg:w-1/3">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Sign in to your account
          </h1>
          <form
            onSubmit={formik.handleSubmit}
            className="space-y-4 md:space-y-6"
          >
            {error && (
              <div
                className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                role="alert"
              >
                {error}
              </div>
            )}
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email or Phone number
              </label>
              <input
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                placeholder="name@gmail.com"
              />
              {formik.errors.email && formik.touched.email && (
                <div
                  className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                  role="alert"
                >
                  {formik.errors.email}
                </div>
              )}
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
              />
              {formik.errors.password && formik.touched.password && (
                <div
                  className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                  role="alert"
                >
                  {formik.errors.password}
                </div>
              )}
            </div>
            <button
              type="submit"
              className="w-full text-white bg-red-600 hover:bg-red-700 px-5 py-2.5 text-center"
            >
              {isLoading ? <p>loading......</p> : "Sign in"}
            </button>
            <button
              type="reset"
              className="w-full text-black bg-gray-100 hover:bg-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              <GoogleIcon /> <span> Sign In with Google</span>
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Don’t have an account yet?{" "}
              <Link
                href="signup"
                className="font-medium text-red-600 ms-3 underline dark:text-red-500"
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
