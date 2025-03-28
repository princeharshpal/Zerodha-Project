import React from "react";

const SignUp = () => {
  const register = async (userData) => {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  };

  // Login
  const login = async (userData) => {
    const response = await axios.post(`${API_URL}/login`, userData);
    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
    }
    return response.data;
  };

  // Get User Profile
  const getProfile = async () => {
    const token = localStorage.getItem("token");
    if (!token) return null;

    const response = await axios.get(`${API_URL}/profile`, {
      headers: { Authorization: token },
    });

    return response.data;
  };

  // Logout User
  const logout = () => {
    localStorage.removeItem("token");
  };
  return <div>SignUp</div>;
};

export default SignUp;
