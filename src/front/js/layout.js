import React from "react";
import {
	BrowserRouter,
	Routes,
	Route
  } from "react-router-dom";

import injectContext from "./store/appContext";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Navbar } from "./component/navbar";
// import AllBeers from "./pages/allBeers.jsx";
// import Wishlist from "./pages/wishlist.jsx";
import Cerveteca from "./pages/cerveteca.jsx";
import BeerDetail from "./pages/beerDetail.jsx";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<BrowserRouter>
			{/* <Navbar /> */}
			<Routes>
				
				<Route path="/" element={<Home />} />
				<Route path="/navbar" element={<Navbar />} />
				<Route path="/login" element={<Login />} />
				<Route path="/cerveteca" element={<Cerveteca />} />
				{/* <Route path="/beer" element={<AllBeers />}/> */}
				{/* <Route path="/homelog" element={<Homelog />} /> */}
			</Routes>
	
		</BrowserRouter>
	);
};

export default injectContext(Layout);

