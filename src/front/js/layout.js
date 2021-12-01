import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import injectContext from "./store/appContext";

import { Home } from "./pages/home";

import AllBeers from "./pages/allBeers.jsx";
import Wishlist from "./pages/wishlist";

const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/all_beers">
					<AllBeers />
				</Route>
				<Route exact path="/wishlist">
					<Wishlist />
				</Route>
				<Route>
					<h1>Not found!</h1>
				</Route>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
