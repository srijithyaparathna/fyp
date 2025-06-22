import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App.tsx";
// import Signup from "@/pages/Signup";
import Login from "@/pages/login.tsx";
// import Forgetpw from "@/pages/Forgetpw.tsx";
// import Otp from "@/components/fogot password/Otp.tsx";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Routes>
        {/* <Route path="/signup" element={<Signup />} /> */}
        <Route path="/" element={<Login />} />
        {/* <Route path="/Forgetpw" element={<Forgetpw />} /> */}
        <Route path="/*" element={<App />} />
      </Routes>
    </Router>
  </StrictMode>
);

