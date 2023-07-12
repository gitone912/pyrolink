import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { useRegisterUserMutation } from "../../../services/userAuthApi";
import { storeToken, storeId } from "../../../services/LocalStorageService";
import { Alert } from "@material-tailwind/react";
import { Checkbox, Typography } from "@material-tailwind/react";
import { useCreateUserMutation } from "../../../services/cartServiceApi";
import { useSaveUserIdMutation } from "../../../services/userAuthApi";
import { v4 as uuidv4 } from 'uuid';

const Signup = () => {
  const [server_error, setServerError] = useState({});
  const [registerUser, { isLoading }] = useRegisterUserMutation();
  const [createUser, responseInfo] = useCreateUserMutation();
  const [saveUserId, responseInfo2] = useSaveUserIdMutation();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      name: data.get("name"),
      email: data.get("email"),
      password: data.get("password"),
      confirmPassword: data.get("confirmPassword"),
      terms: data.get("terms"),
    };

    console.log(actualData.name);
    const res = await registerUser(actualData);

    if (res.error) {
      setServerError(res.error.data.errors);
    }

    if (res.data) {
      const response = await createUser({ name: actualData.name });
      console.log(response);
      const userId = response.data.id;
      console.log(response);
      
      const res2 = await saveUserId({
        user: actualData.email,
        user_cart_id: userId,
        name: actualData.name
      });

      storeToken(res.data.data.token);
      storeId(userId);

      console.log(userId, actualData.name, actualData.email);

        window.location.href = "/dashboard";
      
    }
  };

  if (responseInfo.isLoading) return <div>is loading......</div>;
  if (responseInfo.isError)
    return <div>error occurred {responseInfo.error.error}</div>;
  if (isLoading) return <div>is loading......</div>;

  return (
    <>
      {console.log(server_error)}

      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="./vite.svg"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            action="#"
            method="POST"
            onSubmit={handleSubmit}
          >
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Full Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="name"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {server_error.name ? (
                <Alert className="bg-[#d0342c]/10 text-[#d0342c] border-l-4 border-[#d0342c] rounded-none font-small">
                  {server_error.name[0]}
                </Alert>
              ) : null}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {server_error.email ? (
                <Alert className="bg-[#d0342c]/10 text-[#d0342c] border-l-4 border-[#d0342c] rounded-none font-small">
                  {server_error.email[0]}
                </Alert>
              ) : null}
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {server_error.password ? (
                <Alert className="bg-[#d0342c]/10 text-[#d0342c] border-l-4 border-[#d0342c] rounded-none font-small">
                  {server_error.password}
                </Alert>
              ) : null}
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Confirm Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="confirmPassword"
                  type="password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {server_error.confirmPassword ? (
                <Alert className="bg-[#d0342c]/10 text-[#d0342c] border-l-4 border-[#d0342c] rounded-none font-small">
                  {server_error.confirmPassword[0]}
                </Alert>
              ) : null}
            </div>

            {server_error.terms ? (
              <span style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>
                {server_error.terms[0]}
              </span>
            ) : null}

            <Checkbox
              name="terms"
              id="terms"
              label={
                <Typography color="blue-gray" className="font-medium flex">
                  I agree with the
                  <Typography
                    as="a"
                    href="#"
                    color="blue"
                    className="font-medium hover:text-blue-700 transition-colors"
                    required
                  >
                    &nbsp;terms and conditions
                  </Typography>
                  .
                </Typography>
              }
            />

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already a member?{" "}
            <a
              href="/sign-in"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Sign In here
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
