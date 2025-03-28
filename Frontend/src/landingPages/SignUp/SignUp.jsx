import React, { useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL; // Ensure this is set in .env file

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/register`, formData);
      console.log("Signup Successful:", response.data);
    } catch (error) {
      console.error("Signup Error:", error.response?.data || error.message);
    }
  };

  const inputs = [
    { name: "name", label: "Name", type: "text", placeholder: "Ex: Harsh Pal" },
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Ex: hp@gmail.com",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Ex: 123456",
    },
  ];

  return (
    <div className="py-5 space-y-8 min-h-screen px-4">
      <h1 className="text-center text-2xl lg:text-5xl font-semibold mt-12">
        Open a free demat and trading account online
      </h1>

      <p className="text-lg lg:text-xl text-gray-700 text-center">
        Start investing brokerage-free and join a community of 1.5+ crore
        investors and traders.
      </p>

      <div className="w-full grid gap-10 grid-cols-1 lg:grid-cols-2 mt-10">
        <div className="flex justify-center">
          <img
            src="/images/accountOpen.svg"
            alt="Signup Image"
            className="w-4/5 lg:w-full"
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-xl lg:text-2xl font-semibold text-gray-700">
            Signup now
          </h2>
          <p className="text-gray-500">Or track your existing application</p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {inputs.map((input, idx) => (
              <div className="flex flex-col space-y-2" key={idx}>
                <label htmlFor={input.name}>{input.label}</label>
                <input
                  className="px-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none"
                  type={input.type}
                  placeholder={input.placeholder}
                  name={input.name}
                  required
                  value={formData[input.name]}
                  onChange={handleChange}
                />
              </div>
            ))}

            <button
              type="submit"
              className="px-4 py-2 rounded-md hover:bg-blue-600 cursor-pointer text-white font-semibold bg-blue-500 w-full"
            >
              Sign Up
            </button>
          </form>

          <p className="text-xs text-center">
            By proceeding, you agree to the{" "}
            <span className="text-blue-500">terms & privacy policy</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
