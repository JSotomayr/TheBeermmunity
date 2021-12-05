import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.scss";
import logoSmall from "../../img/logoSmall.png";

// import "../../styles/navbar.scss";

export const Navbar = () => {
	return (
		<Fragment>
			<nav className="navbar">
				<i className="fal fa-bars"></i>
				<img src={logoSmall} />

			<div className="icons">

				<div className="userIconText">
					<i className="fas fa-user"></i>
					<p className="infoIcon">Perfil</p>
				</div>

				<div className="HeartIconText">
				<i className="far fa-heart"></i>
				<p className="infoIcon">Favoritos</p>
				</div>

			</div>
				
			</nav>

			<div className="container">
				{/* <Link to="/">
					<span className="navbar-brand mb-0 h1">HOME</span>
				</Link>
			</div>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn">demo</button>
				</Link>

				<Link to="/login">
					<button className="btn">LOGIN</button>
				</Link> */}
			</div>
		</Fragment>
	);
};
