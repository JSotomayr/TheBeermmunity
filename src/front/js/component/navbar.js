import React, { Fragment } from "react";
import "../../styles/navbar.scss";
import logoSmall from "../../img/logoSmall.png";
import "../../styles/navbar.scss";
import MenuListComposition from "../component/menuListComposition.jsx";
import SearchBar from "./searchBar.jsx";
import { Link } from "react-router-dom";

export const Navbar = () => {
	
	return (
		<Fragment>
			<nav className="navbar">
				<div className=" icons_left">
						<MenuListComposition />
				</div>
				<Link to={"/"}>
					<div className="icons_center"> 	
						<img className="logoNavbar" src={logoSmall} />
					</div>
				</Link>

				<div className="nabvar_menu">
						<div className="nabvar_menu_friends">
							<p>Contactos</p>
						</div>
						<div className="nabvar_menu_cerveteca">
							<p>Cerveteca</p>
						</div>
						<Link to={"/wishlist"}>
							<div className="nabvar_menu_pending">
								<p>Pendientes</p>
							</div> 	
						</Link>							
					</div> 

				 <div className="icons_right">
					<div className="searchbar">
						<SearchBar />
					</div>
					<Link to={"/profile/1"}>
						<div className="userIconText">
							<i className="fas fa-user"></i>
							<p className="infoIcon">Perfil</p>
						</div>
					</Link>
					<Link to = "/favourite">
						<div className="HeartIconText">
							<i className="far fa-heart"></i>
							<p className="infoIcon">
								Favoritos
							</p>
						</div>
					</Link>			
				</div> 
			</nav>  
		</Fragment>
	);
};
