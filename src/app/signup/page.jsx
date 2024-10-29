"use client";
import Image from "next/image";
import registerImage from "../../images/register.png";
import Link from "next/link";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import GoogleIcon from "@mui/icons-material/Google";

const SignUp = () => {
  const [apiError, setApiError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleRegister = (values) => {
    setIsLoading(true);

    // Create a fake user and store it in localStorage
    const fakeUser = {
      name: values.name,
      email: values.email,
      password: values.password,
    };

    localStorage.setItem("fakeUser", JSON.stringify(fakeUser));
    setIsLoading(false);

    // Redirect to login page after successful signup
    router.push("/login");
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Minimum length is 3")
      .max(10, "Maximum length is 10")
      .required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .matches(/^[A-z0-9]{6,12}$/, "Password must be 6-12 characters")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: handleRegister,
  });

  return (
    <section className="flex flex-col lg:flex-row justify-around my-10">
      <div className="lg:w-1/2">
        <Image src={registerImage} width={"90%"} alt="register image" />
      </div>
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8 lg:w-1/3">
        <h1 className="text-xl font-bold tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Create an account
        </h1>
        <form onSubmit={formik.handleSubmit} className="space-y-4 md:space-y-6">
          {apiError && (
            <div
              className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
              role="alert"
            >
              {apiError}
            </div>
          )}
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Enter Your Name
            </label>
            <input
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.name}
              type="text"
              name="name"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
              placeholder="Your name"
            />
          </div>
          {formik.errors.name && formik.touched.name && (
            <div
              className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
              role="alert"
            >
              {formik.errors.name}
            </div>
          )}
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
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
            {isLoading ? "Loading..." : "Create an account"}
          </button>
          <button
            type="reset"
            className="w-full text-black bg-gray-100 hover:bg-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            <GoogleIcon /> <span> Sign Up with Google</span>
          </button>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Already have an account?{" "}
            <Link
              href="login"
              className="font-medium text-red-600 hover:underline dark:text-red-500 ms-2"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
