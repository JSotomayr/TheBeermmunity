import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import injectContext from "./store/appContext";

import { Home } from "./pages/home";

import AllBeers from "./pages/allBeers.jsx";
import BeerDetail from "./pages/beerDetail.jsx";
import Cerveteca from "./pages/cerveteca.jsx";
import Wishlist from "./pages/wishlist.jsx";

const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/beer" element={<AllBeers />}/>
					<Route path="/beer/:id" element={<BeerDetail />}/>
					<Route path="/customer/:id/cerveteca" element={<Cerveteca />} />
					<Route path="/customer/:id/wishlist" element={<Wishlist />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
