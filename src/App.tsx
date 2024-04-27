import './App.css'
import Login from "@/pages/Login.tsx";
import Register from "@/pages/Register.tsx";
import {useEffect, useState} from "react";
import {RateIntern} from "@/pages/RateIntern.tsx";
import InternAnalytics from "@/pages/InternAnalytics.tsx";

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if(token)
      setAuthenticated(true);
    else
      setAuthenticated(false);
  }, []);

  return (
   !authenticated ? <InternAnalytics /> : <Register />
  )
}

export default App
