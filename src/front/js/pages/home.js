import React, { useContext } from "react";
import { Context } from "../store/appContext";
<<<<<<< HEAD
=======
import { Link } from "react-router-dom";
>>>>>>> main
import "../../styles/home.scss";
import { Footer } from "../component/footer";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
<<<<<<< HEAD
		<div className="text-center mt-5">
					<Footer />
				<p>Hola!</p>
			
=======
		<div>
			<Link to={"/beer"}>
				<h1>ENSEÑAME LA BIRRA</h1>
			</Link>
>>>>>>> main
		</div>
	);
};
