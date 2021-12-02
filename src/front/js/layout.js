import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import injectContext from "./store/appContext";

import { Home } from "./pages/home";

import AllBeers from "./pages/allBeers.jsx";

const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<Routes>
					<Route path="/" element={<Home />}/>
					<Route exact path="/all_beers" element={<AllBeers />}/>
					<Route>
						<h1>Not found!</h1>
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
