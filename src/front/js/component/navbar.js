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
				{/* <Container >
					<Row>
						<Col xs={4} className="icons_left">
							<i className="fas fa-beer"></i>
						</Col>
						<Col xs={4} className="icons_center">
							<img className="logoNavbar" src={logoSmall} />
						</Col >
						<Col xs={4} className="icons_right">
							<div className="userIconText">
								<i className="fas fa-user"></i>
								<p className="infoIcon">Perfil</p>
							</div>

							<div className="HeartIconText">
								<i className="far fa-heart"></i>
								<p className="infoIcon">Favoritos</p>
							</div>
							
						</Col>
					</Row>
				</Container>			
			</nav>  

				</Container>			 */}
				<div className=" icons_left">
					<i className="fas fa-beer"></i>
				</div>

				<div className="icons_center"> 
					<img className="logoNavbar" src={logoSmall} />
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
					<div className="patata">!!!!PATATA!!!!</div>
				</div> 
			</nav>  

		

		</Fragment>
	);
};




