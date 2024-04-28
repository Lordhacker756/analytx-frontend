import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleLogin = async () => {
    if (!userEmail || !password) {
      setErrorMessage("Please fill out both email and password fields.");
      return;
    }

    if (!validateEmail(userEmail)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:8080/api/v1/auth/login", {
        email: userEmail,
        password: password,
      });
      localStorage.setItem("authToken", res.data.token);
      window.location.href = "/rate";
      toast("Logged-In successfully!🎆", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      console.log("RESPONSE::", res.data);
    } catch {
      localStorage.removeItem("authToken");
      setErrorMessage("Email or password is incorrect");
    }
  };

  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-black px-4">
      <div className="w-full max-w-md space-y-6 rounded-lg border bg-gray-900 p-6 shadow-lg dark:border-gray-800">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold text-white">Welcome back</h1>
          <p className="text-gray-400">
            Enter your email and password to sign in.
          </p>
        </div>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label className="text-gray-400" htmlFor="email">
              Email
            </Label>
            <Input
              className="bg-gray-800 text-white placeholder:text-gray-500"
              id="email"
              placeholder="email@example.com"
              required
              type="email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label className="text-gray-400" htmlFor="password">
                Password
              </Label>
              <a
                className="text-sm font-medium text-gray-400 hover:underline"
                href="#"
              >
                Forgot password?
              </a>
            </div>
            <Input
              className="bg-gray-800 text-white"
              id="password"
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button
            className="w-full bg-gray-800 text-white hover:bg-gray-700"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              handleLogin();
            }}
          >
            Sign in
          </Button>
          {errorMessage && <p className="text-red-400">{errorMessage}</p>}
        </form>
        <p className="text-center text-sm text-gray-400">
          Don't have an account?
          <Link
            className="font-medium text-gray-400 hover:underline"
            to="/register"
          >
            Sign up
          </Link>
        </p>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}
