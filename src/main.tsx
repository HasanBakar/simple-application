import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import "@mui/material/styles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserInfo from './components/UserInfo';
import SecondPage from './components/SecondPage';
import ErrorPage from './components/ErrorPage';



const router = createBrowserRouter([
  {
    path: "/",
    element: <UserInfo></UserInfo>,
  },
  {
    path: "/secondPage",
    element: <SecondPage></SecondPage>,
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);



ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </RouterProvider>
  </React.StrictMode>
);


