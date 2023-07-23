"use client";
import React from "react";
import { useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const { isLoaded, signUp, setActive } = useSignUp();
  const [email, setEmail] = React.useState(""); // The user's email address
  const [firstName, setFirstName] = React.useState(""); // The user's first name
  const [lastName, setLastName] = React.useState(""); // The user's last name
  const [password, setPassword] = React.useState(""); // The user's password
  const [pendingVerification, setPendingVerification] = React.useState(false); // Whether the user is pending verification
  const [code, setCode] = React.useState(""); // The verification code
  const router = useRouter();

  // Form submission handler
  const handleSubmit = async (e) => {};

  // Verification code submission handler via email
  const onPressVerify = async (e) => {};

  return (
    <div className="border p-5 rounded" style={{ width: "500px" }}>
      <h1 className="text-2xl mb-4">Register</h1>
      {!pendingVerification && (
        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900">
              First Name
            </label>
            <input
              type="text"
              name="first name"
              id="first_name"
              onChange={(e) => setFirstName(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
              required={true}
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900">
              Last Name
            </label>
            <input
              type="text"
              name="last name"
              id="last_name"
              onChange={(e) => setLastName(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
              required={true}
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
              required={true}
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
              required={true}
            />
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
            Create an Account
          </button>
        </form>
      )}
    </div>
  );
};

export default RegisterPage;
