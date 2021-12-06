import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Footer } from "../component/footer";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
					<Footer />
				<p>Hola!</p>
			
		</div>
	);
};
