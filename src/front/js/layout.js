import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import { Home } from "./pages/home";
import injectContext from "./store/appContext";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<Routes>
						<Route path="/" element= {<Home />} />
    			</Routes>
				<Footer />
  			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);

