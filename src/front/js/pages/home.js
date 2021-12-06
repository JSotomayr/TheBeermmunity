import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { Navbar } from "../component/navbar";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center">
			<Navbar/>
			<div className="btn mt-5">
				<Link to="/login">
					LOGIN
				</Link>	
			</div>
			<div className="btn mt-5">
				<Link to="/register">
					REGISTER
				</Link>	
			</div>
			<div>
				<Link to="/demo">
					DEMO
				</Link>
			</div>
			
			<h1>ESTE ES EL HOME</h1>

			<div className="alert alert-info">{store.message || "Loading message from the backend..."}</div>
			<p>

				This boilerplate comes with lots of documentation:{" "}
				<a href="https://github.com/4GeeksAcademy/react-flask-hello/tree/95e0540bd1422249c3004f149825285118594325/docs">
					Read documentation
				</a>
			</p>
		</div>
	);
};