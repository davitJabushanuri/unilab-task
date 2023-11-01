import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { LandingPage } from "./routes/landing-page";
import { AuthPage } from "./routes/auth-page";
import { FormPage } from "./routes/form-page";
import { ApiPage } from "./routes/api-page";
import { NotFound } from "./routes/not-found.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <LandingPage />,
	},
	{
		path: "/login",
		element: <AuthPage />,
	},
	{
		path: "/form",
		element: <FormPage />,
	},
	{
		path: "/people",
		element: <ApiPage />,
	},

	{
		path: "*",
		element: <NotFound />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
