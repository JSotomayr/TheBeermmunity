import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import injectContext from "./store/appContext";

import { Home } from "./pages/home";

import AllBeers from "./pages/allBeers.jsx";

import FormBusiness from "./pages/formBusiness.jsx"

const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<Routes>
					<Route path="/" element={<Home />}/>
					<Route path="/beer" element={<AllBeers />}/>
					<Route path="/formBusiness" element={<FormBusiness />}/>

				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
