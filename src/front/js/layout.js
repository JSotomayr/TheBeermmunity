import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import injectContext from "./store/appContext";

import { Home } from "./pages/home";

import AllBeers from "./pages/allBeers.jsx";
import Wishlist from "./pages/wishlist.jsx";
import Cerveteca from "./pages/cerveteca.jsx";

const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/beer" element={<AllBeers />}/>
					<Route path="/cerveteca" element={<Cerveteca />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
