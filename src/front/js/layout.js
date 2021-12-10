import React from "react";
<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from "react-router-dom";


import { Home } from "./pages/home";
import injectContext from "./store/appContext";
import { Footer } from "./component/footer";
=======
import { BrowserRouter, Route, Routes } from "react-router-dom";
import injectContext from "./store/appContext";

import { Home } from "./pages/home";

import AllBeers from "./pages/allBeers.jsx";
import BeerDetail from "./pages/beerDetail.jsx";
>>>>>>> main

const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<Routes>
<<<<<<< HEAD
						<Route path="/" element= {<Home />} />
    			</Routes>
				<Footer />
  			</BrowserRouter>
=======
					<Route path="/" element={<Home />}/>
					<Route path="/beer" element={<AllBeers />}/>
					<Route path="/beer/:id" element={<BeerDetail />}/>
				</Routes>
			</BrowserRouter>
>>>>>>> main
		</div>
	);
};

export default injectContext(Layout);

