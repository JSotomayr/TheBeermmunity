import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import injectContext from "./store/appContext";

import { Home } from "./pages/home";

import { Demo } from "./pages/demo";
import { Single } from "./pages/single";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";


const Layout = () => {
	
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
					<Navbar />
					<Routes>
						<Route path="/">
							<Home />
						</Route>
						<Route path="/all_products" element={<Demo />} />
						<Route path="/single/:theid" element={<Single />} />
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Routes>
					<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
