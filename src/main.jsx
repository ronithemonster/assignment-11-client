import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";


import { RouterProvider } from "react-router-dom";
import router from "./components/Routes/Routes.jsx";
import AuthProvider from "./components/Providers/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      
    <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
       </ThemeProvider>
  
  </React.StrictMode>
);
