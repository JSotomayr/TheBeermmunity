import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";

import injectContext from "./store/appContext";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Register } from "./pages/register.jsx";
import { Favourite } from "./pages/favourite.jsx";
import { Navbar } from "./component/navbar";

import { Profile } from "./pages/profile.jsx"
import AllBeers from "./pages/allBeers.jsx";
import BeerDetail from "./pages/beerDetail.jsx";
import Cerveteca from "./pages/cerveteca.jsx";
import Wishlist from "./pages/wishlist.jsx";


//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    return (
        <div>
            <BrowserRouter basename={basename}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
					<Route path="/profile/:id" element={<Profile />} />
					<Route path="/cerveteca" element={<Cerveteca />} />
                    <Route path="/wishlist" element={<Wishlist />} />
                    <Route path="/favourite" element={<Favourite />} />                    <Route path="/beer" element={<AllBeers />} />
                    <Route path="/beer/:id" element={<BeerDetail />} />
                    <Route path="/navbar" element={<Navbar />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);

