import React, { Fragment, useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import logoBig from "../../img/logoBig.png";
import { Navbar } from "../component/navbar";
import Form from 'react-bootstrap/Form'
import "../../styles/register.scss";





 export const Register = () => {
	
	const [next, setNext] = useState(false);
	const [registerForm, setRegisterForm] = useState([]);
	const { handleSubmit, register, getValues, formState: { errors }} = useForm();
	const { store, actions } = useContext(Context);


	const onSubmit = dataRegister => actions.register(dataRegister)

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
							id ="Email"
							placeholder="Email"
							className="form-control"
							aria-invalid={errors.Email ? "true" : "false"}
							{...register("Email", { required: true, maxLength: 30, pattern: {value: /\S+@\S+\.\S+/ }})}
						/>
							{/* <div className="alertDiv">
									{errors.Email && errors.Email.type === "required" && <span role="alert">El campo correo es obligatorio</span>}
									{errors.Email && errors.Email.type === "maxLength" && <span role="alert">Máximo de caracteres excedido</span>}
									{errors.Email && errors.Email.type === "pattern" && <span role="alert">Correo inválido</span>}
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

	useEffect(() => {
		if (getValues("userType") =="user") {
			setRegisterForm(
				<Fragment>

					<input
					placeholder="CIF"
					{...register("cif", {required: true, maxLength: 20})}
					/>
					<input type ="submit" />
				</Fragment>
			);
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
		<form
			onSubmit={handleSubmit((dataRegister) => {
				actions.register(dataRegister);
			})}
		>
			{registerForm}
		</form>
		);
	};
 
 export default Register;



							// tirar 
								{/* <input
								placeholder="CIF"
								{...register("cif", {required: true, maxLength: 20})}
								/> */}

							{/* OPCION ORIGINAL */}
							// <input type ="submit" />
							{/* OPCION 2 */}
							// <label htmlFor="submitRegister">Crear Cuenta</label>
							// <input type ="submit" className="btn btn-primary form-control btn_submit mt-5" placeholder="Crear cuenta" />
							//  */}