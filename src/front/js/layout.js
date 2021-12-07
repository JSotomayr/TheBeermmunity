


import React from "react";
import {
	BrowserRouter,
	Routes,
	Route
  } from "react-router-dom";

import injectContext from "./store/appContext";

import injectContext from "./store/appContext";
import { Home } from "./pages/home";

import { Login } from "./pages/login";




import AllBeers from "./pages/allBeers.jsx";

const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<Routes>
					<Route path="/" element={<Home />}/>
					<Route path="/beer" element={<AllBeers />}/>
					<Route path="/login" element={<Login />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
