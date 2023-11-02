import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { LandingPage } from "./landing-page";
import { AuthPage } from "./auth-page";
import { FormPage } from "./form-page";
import { ApiPage } from "./api-page";
import { NotFound } from "./not-found.jsx";

export const Router = () => {
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

	return <RouterProvider router={router} />;
};
