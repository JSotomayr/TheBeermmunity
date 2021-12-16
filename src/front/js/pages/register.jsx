import React, { Fragment, useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useForm } from "react-hook-form";
import { Link, useLocation } from "react-router-dom";
// import { Link, useHistory } from "react-router-dom";
import logoBig from "../../img/logoBig.png";
import { Navbar } from "../component/navbar";
import Form from 'react-bootstrap/Form'
import "../../styles/register.scss";
import { useNavigate } from 'react-router-dom';

export const Register = () => {
	const [next, setNext] = useState(false);
	const [registerForm, setRegisterForm] = useState([]);
	const { handleSubmit, register, getValues, formState: { errors }} = useForm();
	const { store, actions } = useContext(Context);
	// let location = useLocation();
	// let navigate = useNavigate();


	// console.log(window.location, "@@@@@@")  
	// console.log(window.navigate, "@@@@@@")  


								// REGISTRO USER Y BUSINESS COMUN
	useEffect(() => {
		setRegisterForm(
			<Fragment>
				<Navbar />
				 <div className="loginContainer">
					<div className="btn nearLog">
						<Link to="/">
							volver
						</Link>
					</div>
					<p>
						<img src={logoBig} />
					</p>
					<div className="step">
						<div className="step_left">1</div>
						<div className="step_line"></div>
						<div className="step_right">2</div>
					</div>
					<div className="title">Crear cuenta</div>
					<div className="login-form">
						<label htmlFor="username"></label>
						<input 
							id ="username"
							placeholder="Usuario"
							className="form-control"
							aria-invalid={errors.username ? "true" : "false"}
							{...register("username", { required: true, maxLength: 30, })}
						/>
							{/* <div className="alertDiv">
									{errors.username && errors.username.type === "required" && <span role="alert">El campo Usuario es obligatorio</span>}
									{errors.username && errors.username.type === "maxLength" && <span role="alert">Máximo de caracteres excedido</span>}
							</div> */}
						<label htmlFor="Email"></label>
						<input 
							id ="email"
							placeholder="Email"
							className="form-control"
							aria-invalid={errors.email ? "true" : "false"}
							{...register("email", { required: true, maxLength: 30, pattern: {value: /\S+@\S+\.\S+/ }})}
						/>
							{/* <div className="alertDiv">
									{errors.email && errors.email.type === "required" && <span role="alert">El campo correo es obligatorio</span>}
									{errors.email && errors.email.type === "maxLength" && <span role="alert">Máximo de caracteres excedido</span>}
									{errors.email && errors.email.type === "pattern" && <span role="alert">Correo inválido</span>}
							</div> */}
						<label htmlFor="password"></label>
 						 <input 
							 id ="password"
							 type="password"
							 placeholder="Contraseña"
							 className="form-control"
							 aria-invalid={errors.password ? "true" : "false"}
							 {...register("password", { required: true, minLength: 5})}
							 />
						 {/* <div className="alertDiv">
							 {errors.password && errors.password.type === "required" && <span role="alert">El campo Contraseña es obligatorio</span>}
							 {errors.password && errors.password.type === "minLength" && <span role="alert">Mínimo de longitud es de 5 caracteres</span>}
						 </div> */}

						 <div className="chooseUserBusiness mt-3">
						  <Form.Check
								type="radio"
								label="Usuario"
								value="user"								
								name="userType"
								{...register("userType")}
								/>
							<Form.Check
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
							if (getValues("userType") != null){
								setNext(true);
								}
							}}
						>
							Siguiente
						</button>

					
					</div>
				</div>
			</Fragment>
		);
	}, []);

	// HAY QUE ENVIAR AL BACK SI ES USER O BUSINESS
	useEffect(() => {
		if (getValues("userType") =="user") {
			setRegisterForm(
				<Fragment>

							{/* REGISTRO USER */}
					<div className="loginContainer">
						<div className="btn nearLog">
							<Link to="/">
								volver
							</Link>
						</div>
						<p>
							<img src={logoBig} />
						</p>
						<div className="step">
							<div className="step_left">1</div>
							<div className="step_line"></div>
							<div className="step_right_completed">2</div>
						</div>
						<div className="title">Crear cuenta</div>
						
							<div className="register-form">

								<label htmlFor="name register_input">Nombre</label>
									<input 
										id ="name"
										placeholder="Nombre"
										className="form-control"
										aria-invalid={errors.name ? "true" : "false"}
										{...register("name", { required: true, maxLength: 15})}
									/>
								
									<div className="alertDiv">
										{errors.name && errors.name.type === "required" && <span role="alert">El campo Usuario es obligatorio</span>}
										{errors.name && errors.name.type === "maxLength" && <span role="alert">Máximo de caracteres excedido</span>}
									</div>
								
									<label htmlFor="name register_input">Apellidos</label>
									<input 
										id ="lastname"
										placeholder="Apellidos"
										className="form-control"
										aria-invalid={errors.lastname ? "true" : "false"}
										{...register("lastname", { required: true, maxLength: 15})}
									/>
								
									<div className="alertDiv">
										{errors.lastname && errors.lastname.type === "required" && <span role="alert">El campo Usuario es obligatorio</span>}
										{errors.lastname && errors.lastname.type === "maxLength" && <span role="alert">Máximo de caracteres excedido</span>}
									</div>
						
									<label htmlFor="name register_input">Ciudad</label>
									<input 
										id ="city"
										placeholder="Ciudad"
										className="form-control"
										aria-invalid={errors.country ? "true" : "false"}
										{...register("city", { required: true, maxLength: 15})}
									/>
								
									<div className="alertDiv">
										{errors.city && errors.city.type === "required" && <span role="alert">El campo Usuario es obligatorio</span>}
										{errors.city && errors.city.type === "maxLength" && <span role="alert">Máximo de caracteres excedido</span>}
									</div>

									<label htmlFor="name register_input">País</label>
									<input 
										id ="country"
										placeholder="País"
										className="form-control"
										aria-invalid={errors.country ? "true" : "false"}
										{...register("country", { required: true, maxLength: 15})}
									/>
								
									<div className="alertDiv">
										{errors.country && errors.country.type === "required" && <span role="alert">El campo Usuario es obligatorio</span>}
										{errors.country && errors.country.type === "maxLength" && <span role="alert">Máximo de caracteres excedido</span>}
									</div>
					
							<button type="submit" className="btn btn-primary form-control btn_submit mt-5">Acceder</button> 
							{errors.submit && errors.submit.type === "required" && <span role="alertSubmitLog">!ERROR! Se ha producido un error en su intento de Inicio de sesión. Asegúrese de que el correo, el nombre de usuario y la contraseña son correctos</span>}
						</div>
					</div>
				</Fragment>
			);

								// REGISTRO BUSINESS
		} else if (getValues("userType") == "business") {
			setRegisterForm(
				<Fragment>
					<div className="loginContainer">
						<div className="btn nearLog">
							<Link to="/">
								volver
							</Link>
						</div>
						<p>
							<img src={logoBig} />
						</p>
						<div className="step">
							<div className="step_left">1</div>
							<div className="step_line"></div>
							<div className="step_right_completed">2</div>
						</div>
						<div className="title">Crear cuenta</div>
						
							<div className="register-form">

								<label htmlFor="nameBusiness register_input">Nombre de la Empresa</label>
									<input 
										id ="nameBusiness"
										placeholder="Nombre Empresa"
										className="form-control"
										aria-invalid={errors.nameBusiness ? "true" : "false"}
										{...register("nameBusiness", { required: true, maxLength: 15})}
									/>
								
									<div className="alertDiv">
										{errors.nameBusiness && errors.nameBusiness.type === "required" && <span role="alert">El campo Usuario es obligatorio</span>}
										{errors.nameBusiness && errors.nameBusiness.type === "maxLength" && <span role="alert">Máximo de caracteres excedido</span>}
									</div>

								<label htmlFor="Adress">Dirección Empresa</label>
									<input 
										id ="Adress"
										placeholder="Dirección"
										className="form-control"
										aria-invalid={errors.Adress ? "true" : "false"}
										{...register("Adress", { required: true, maxLength: 15})}
									/>
									
									<div className="alertDiv">
										{errors.Adress && errors.Adress.type === "required" && <span role="alert">El campo Usuario es obligatorio</span>}
										{errors.Adress && errors.Adress.type === "maxLength" && <span role="alert">Máximo de caracteres excedido</span>}
									</div>

								<label htmlFor="city">Ciudad</label>
									<input 
										id ="city"
										placeholder="Ciudad"
										className="form-control"
										aria-invalid={errors.city ? "true" : "false"}
										{...register("city", { required: true, maxLength: 15})}
									/>
									
									<div className="alertDiv">
										{errors.city && errors.city.type === "required" && <span role="alert">El campo Usuario es obligatorio</span>}
										{errors.city && errors.city.type === "maxLength" && <span role="alert">Máximo de caracteres excedido</span>}
									</div> 

									<label htmlFor="city">País</label>
									<input 
										id ="country"
										placeholder="País"
										className="form-control"
										aria-invalid={errors.country ? "true" : "false"}
										{...register("city", { required: true, maxLength: 15})}
									/>
									
									<div className="alertDiv">
										{errors.country && errors.country.type === "required" && <span role="alert">El campo Usuario es obligatorio</span>}
										{errors.country && errors.country.type === "maxLength" && <span role="alert">Máximo de caracteres excedido</span>}
									</div> 								

									<button type="submit" className="btn btn-primary form-control btn_submit mt-5">Acceder</button> 
									{errors.submit && errors.submit.type === "required" && <span role="alertSubmitLog">!ERROR! Se ha producido un error en su intento de Inicio de sesión. Asegúrese de que el correo, el nombre de usuario y la contraseña son correctos</span>}

							</div>
						</div>
						
				</Fragment>
			);	
		}				
	}, [next]);
	
	return (
		// <form
		// 	onSubmit={(e) => {
		// 		console.log("DATOS FORMULARIO", dataRegister)
		// 		e.preventDefault();
		// 	handleSubmit((dataRegister) => {				
		// 		if (actions.register(dataRegister)) {
		// 		// window.location.pathname = "/";
		// 		window.navigate.pathname = "/"
		// 		}
		// 		// else AÑADIR FRASE;

		// 	})}}
		// >

		<form 
			onSubmit = {handleSubmit((dataRegister) => {
				actions.register(dataRegister);
			})}
		>
			{registerForm}
		</form>
	);
}

export default Register;

