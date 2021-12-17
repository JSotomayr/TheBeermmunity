import React, { Fragment, useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import { Context } from "../store/appContext";
import logoBig from "../../img/logoBig.png";
import "../../styles/register.scss";


export const Register = () => {
	const [next, setNext] = useState(false);
	const [registerForm, setRegisterForm] = useState([]);
	const { handleSubmit, register, getValues, formState: { errors }} = useForm();
	const { store, actions } = useContext(Context);
	let navigate = useNavigate();

	const onsubmit = (dataRegister) => {
		console.log(dataRegister);
		actions.register(dataRegister);
	}


								// REGISTRO USER Y BUSINESS COMUN
	useEffect(() => {
		setRegisterForm(
			<div className="login-form">
				<label htmlFor="username"></label>
				<input 
					id ="username"
					placeholder="Usuario"
					className="form-control"
					type="text"
					{...register("username", { required: true, maxLength: 30, })}
				/>
				<div className="alertDiv">
						{errors.username && errors.username.type === "required" && <span role="alert">El campo Usuario es obligatorio</span>}
						{errors.username && errors.username.type === "maxLength" && <span role="alert">Máximo de caracteres excedido</span>}
				</div>
				<label htmlFor="Email"></label>
				<input 
					id ="email"
					placeholder="Email"
					className="form-control"
					type="email"
					{...register("email", { required: true, maxLength: 30, pattern: {value: /\S+@\S+\.\S+/ }})}
				/>
				<label htmlFor="password"></label>
					<input 
						id ="password"
						type="password"
						placeholder="Contraseña"
						className="form-control"
						{...register("password", { required: true, minLength: 5})}
						/>
					<div className="alertDiv">
						{errors.password && errors.password.type === "required" && <span role="alert">El campo Contraseña es obligatorio</span>}
						{errors.password && errors.password.type === "minLength" && <span role="alert">Mínimo de longitud es de 5 caracteres</span>}
					</div>

				<div className="chooseUserBusiness mt-3">
					<label>Usuario</label>
					<input
						type="radio"
						label="Usuario"
						value="user"								
						name="userType"
						{...register("userType")}
					/>
					<label>Empresa</label>
					<input
						type="radio"
						label="Empresa"
						value="business"								
						name="userType"
						{...register("userType")}
					/>
				</div>
				<button className="btn btn-primary form-control btn_submit mt-5"
				onClick ={ (event) => {
					event.preventDefault();
					if (getValues("userType") && getValues("email") && getValues("password") && getValues("username")){
						setNext(true);
					} else {
						//TODO Añadir un <p> indicando que falta algún parámetro
					}}}
				>
					Siguiente
				</button>
			</div>
		);
	}, []);

	// HAY QUE ENVIAR AL BACK SI ES USER O BUSINESS
	useEffect(() => {
		if (getValues("userType") =="user") {
			setRegisterForm(
				<div className="register-form">
					<label htmlFor="name register_input">Nombre</label>
					<input 
						id ="name"
						placeholder="Nombre"
						className="form-control"
						type="text"
						{...register("name", { required: true, maxLength: 15})}
					/>	
				
					<label htmlFor="name register_input">Apellidos</label>
					<input 
						id ="lastname"
						placeholder="Apellidos"
						className="form-control"
						type = "text"
						{...register("lastname", { required: true, maxLength: 15})}
					/>
		
					<label htmlFor="name register_input">Ciudad</label>
					<input 
						id ="city"
						placeholder="Ciudad"
						className="form-control"
						type="text"
						{...register("city", { required: true, maxLength: 15})}
					/>

					<label htmlFor="name register_input">País</label>
					<input 
						id ="country"
						placeholder="País"
						className="form-control"
						type="text"
						{...register("country", { required: true, maxLength: 15})}
					/>
	
					<input type="submit" className="btn btn-primary form-control btn_submit mt-5" value="Acceder" />
				</div>
			);

								// REGISTRO BUSINESS
		} else if (getValues("userType") == "business") {
			setRegisterForm(
				<div className="register-form">
					<label htmlFor="nameBusiness register_input">Nombre de la Empresa</label>
					<input 
						id ="nameBusiness"
						placeholder="Nombre Empresa"
						className="form-control"
						aria-invalid={errors.nameBusiness ? "true" : "false"}
						{...register("nameBusiness", { required: true, maxLength: 15})}
					/>
					<label htmlFor="Adress">Dirección Empresa</label>
					<input 
						id ="Adress"
						placeholder="Dirección"
						className="form-control"
						aria-invalid={errors.Adress ? "true" : "false"}
						{...register("Adress", { required: true, maxLength: 15})}
					/>

					<label htmlFor="city">Ciudad</label>
					<input 
						id ="city"
						placeholder="Ciudad"
						className="form-control"
						aria-invalid={errors.city ? "true" : "false"}
						{...register("city", { required: true, maxLength: 15})}
					/>

					<label htmlFor="city">País</label>
					<input 
						id ="country"
						placeholder="País"
						className="form-control"
						aria-invalid={errors.country ? "true" : "false"}
						{...register("city", { required: true, maxLength: 15})}
					/>							

					<input type="submit" className="btn btn-primary form-control btn_submit mt-5" value="Acceder"/>
				</div>
			);	
		}				
	}, [next]);
	
	// useEffect(() => {
	// 	navigate(`/profile/${currentUser.id}`);
	// }, [store.currentUser])


	return (
		<div className="loginContainer">
			<div className="btn nearLog">
				<Link to="/">
					volver
				</Link>
			</div>
			<img src={logoBig} />
			<div className="step">
				<div className="step_left">1</div>
				<div className="step_line"></div>
				<div className="step_right_completed">2</div>
			</div>
			<div className="title">Crear cuenta</div>

			<form onSubmit = {(event) => {event.preventDefault(); onsubmit(getValues())}}>
				{registerForm}
			</form>
		</div>
	);
}

export default Register;

