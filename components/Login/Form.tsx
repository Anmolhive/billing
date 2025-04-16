"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
const Form = () => {
    const router = useRouter();
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    console.log("password", password);
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        setMessage("Login successful!");
        setPassword(""); // Clear password field after login
        router.push("/dashboard");

      } else {
        setMessage("Invalid password, try again.");
      }
    } catch (error) {
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <fieldset className="fieldset">
      <h3 className="text-xl">Welcome back Sir</h3>
      <label className="fieldset-label">Password</label>
      <input
        onChange={onPasswordChange}
        value={password}
        type="password"
        className="input"
        placeholder="Password"
      />
      <button type="button" onClick={handleLogin} className="btn btn-neutral mt-4">
        Login
      </button>
      {message && <p className="mt-2">{message}</p>}
    </fieldset>
  );
};

export default Form;
