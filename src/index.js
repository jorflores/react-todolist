import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import { AuthContextProvider } from "./store/auth-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthContextProvider>
     <Routes>
     <Route exact path="/*" element = {<App />} />
     </Routes>
    </AuthContextProvider>
  </BrowserRouter>
);
