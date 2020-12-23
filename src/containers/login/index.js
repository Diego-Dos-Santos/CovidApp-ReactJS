import React, { useState } from "react";

function Login() {
  const adminUser = {
    email: "admin@admin.com",
    password: "12345",
  };

  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const loginUser = (details) => {
    console.log(details);
  };

  const logOut = () => {
    console.log("loginOut");
  };

  return (
    <div className="form-container">
      <h1>Login</h1>
    </div>
  );
}

export default Login;
