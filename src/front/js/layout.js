import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import injectContext from "./store/appContext";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Register } from "./pages/register.jsx";
import { Favourite } from "./pages/favourite.jsx";
import { Navbar } from "./component/navbar";
import Landing from "./pages/landing";

import Map from "./pages/map.jsx";
import { Profile } from "./pages/profile.jsx";
import AllBeers from "./pages/allBeers.jsx";
import BeerDetail from "./pages/beerDetail.jsx";
import Cerveteca from "./pages/cerveteca.jsx";
import Wishlist from "./pages/wishlist.jsx";
import { HomeLog } from "./pages/homeLog";
import { SearchBeers } from "./pages/searchBeers.jsx";

import AllCustomers from "./pages/allCustomers.jsx";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/brewers" element={<AllCustomers />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/cerveteca" element={<Cerveteca />} />
          <Route path="/profile/:id/favourite" element={<Favourite />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/beer" element={<AllBeers />} />
          <Route path="/beer/:id" element={<BeerDetail />} />
          <Route path="/map" element={<Map />} />
          <Route path="/homeLog" element={<HomeLog />} />
          <Route path="/searchBeers" element={<SearchBeers />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
