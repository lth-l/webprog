import { createBrowserRouter } from "react-router-dom";
import App from "./App";

import ComposeSalad from "./ComposeSalad";
import ViewOrder from "./ViewOrder";
import PageNotFound from "./PageNotFound";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import inventory from "./inventory.mjs";
import MySaladSelect from "./MySaladSelect";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import react from "react";

const router = createBrowserRouter([
	{
		path: "",
		element: <App />,
		children: [
			{
				path: "compose-salad",
				loader: inventoryLoader,
				Component: ComposeSalad,
			},
			{
				path: "view-order",
				element: <ViewOrder />,
			},
			{
				path: "*", // Catch-all route for page not found
				element: <PageNotFound />,
			},
		],
	},
]);
export default router;
