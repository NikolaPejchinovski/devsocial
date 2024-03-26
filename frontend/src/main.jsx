import React from "react";
import ReactDOM from "react-dom/client";
import HomeScreen from "./screens/HomeScreen.jsx";
import "./index.css";
import "./mobile.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./screens/SignUp.jsx";
import SignIn from "./screens/SignIn.jsx";
import Dashboard from "./screens/Dashboard.jsx";
import { AuthProvider } from "./contexts/AuthContext";
import { UserProvider } from "./contexts/UserContext.jsx";
import { PostProvider } from "./contexts/PostContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <PostProvider>
    <AuthProvider>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </AuthProvider>
  </PostProvider>
);
