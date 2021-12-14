import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.scss";
import logoSmall from "../../img/logoSmall.png";
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';


import "../../styles/navbar.scss";

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export const Navbar = () => {
	

	return (
		<Fragment>
			<nav className="navbar">


				<div className=" icons_left">
					<i className="fas fa-beer"></i>
				</div>

				<div className="icons_center"> 
					<img className="logoNavbar" src={logoSmall} />
				</div>

				<div className="nabvar_menu">
						<div className="nabvar_menu_friends">
							<p>Contactos</p>
						</div>
						<div className="nabvar_menu_cerveteca">
							<div>Cerveteca</div>
						</div>
						<div className="nabvar_menu_pending">
						<div>Pendientes</div>
						</div> 										
					</div> 

				 <div className="icons_right">
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

		

		</Fragment>
	);
};



				{/* ICONOS */}
				{/* <div className="nabvar_menu">
						<div className="nabvar_menu_friends">
							<i class="fas fa-users"></i>
							<p>Contactos</p>
						</div>
						<div className="nabvar_menu_cerveteca">
							<i class="fas fa-bookmark"></i>
							<div>Cerveteca</div>
						</div>
						<div className="nabvar_menu_pending">
						<i class="fas fa-shopping-bag"></i>
						<div>Pendientes</div>
						</div> 										
				</div> */}
