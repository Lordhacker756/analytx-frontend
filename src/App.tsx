import "./App.css";
import Login from "@/pages/Login.tsx";
import Register from "@/pages/Register.tsx";
import { useEffect, useState } from "react";
import { RateIntern } from "@/pages/RateIntern.tsx";
import InternAnalytics from "@/pages/InternAnalytics.tsx";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import VerifyOTP from "./pages/VerifyOTP";

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) setAuthenticated(true);
    else setAuthenticated(false);
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/login">
          {!authenticated ? <Login /> : <Redirect to="/rate" />}
        </Route>
        <Route path="/register">
          {!authenticated ? <Register /> : <Redirect to="/rate" />}
        </Route>
        <Route path="/forgot-password">
          {!authenticated ? <ForgotPassword /> : <Redirect to="/rate" />}
        </Route>
        <Route path="/verify-otp">
          {!authenticated ? <VerifyOTP /> : <Redirect to="/rate" />}
        </Route>
        <Route path="/reset-password">
          {!authenticated ? <ResetPassword /> : <Redirect to="/rate" />}
        </Route>

        {/* Protected Routes */}
        <Route path="/rate">
          {authenticated ? <RateIntern /> : <Redirect to="/login" />}
        </Route>
        <Route path="/analytics">
          {authenticated ? <InternAnalytics /> : <Redirect to="/login" />}
        </Route>
        {/* Redirect authenticated user to rate intern page */}
        <Route path="/">
          {authenticated ? <Redirect to="/rate" /> : <Redirect to="/login" />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
