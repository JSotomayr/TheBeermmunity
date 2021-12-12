import React, { Fragment, useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useForm, Controller } from "react-hook-form";
// import { Link } from "react-router-dom";
// import logoBig from "../../img/logoBig.png";



<p>hola</p>

 export const Register = () => {
	
	const [next, setNext] = useState(false);
	const [registerForm, setRegisterForm] = useState([]);
	const { handleSubmit, register, getValues, formState: { errors }} = useForm();
	const { store, actions } = useContext(Context);

	useEffect(() => {
		setRegisterForm(
			<Fragment>
				 <div className="loginContainer">
					<div className="btn nearLog">
						{/* <Link to="/">
							volver
						</Link> */}
					</div>
					<p>
						{/* <img src={logoBig} /> */}
					</p>
					<div className="title">Crear cuenta</div>
					<div className="login-form">
						<label htmlFor="username"></label>
						<input 
							id ="username"
							placeholder="Nombre de usuario"
							className="form-control"
							aria-invalid={errors.username ? "true" : "false"}
							{...register("username", { required: true, maxLength: 30, })}
						/>
							<div className="alertDiv">
									{errors.username && errors.username.type === "required" && <span role="alert">El campo Usuario es obligatorio</span>}
									{errors.username && errors.username.type === "maxLength" && <span role="alert">Máximo de caracteres excedido</span>}
							</div>
							<label htmlFor="username"></label>
						<input 
							id ="Email"
							placeholder="Email"
							className="form-control"
							aria-invalid={errors.Email ? "true" : "false"}
							{...register("Email", { required: true, maxLength: 30, pattern: {value: /\S+@\S+\.\S+/ }})}
						/>
							<div className="alertDiv">
									{errors.Email && errors.Email.type === "required" && <span role="alert">El campo correo es obligatorio</span>}
									{errors.Email && errors.Email.type === "maxLength" && <span role="alert">Máximo de caracteres excedido</span>}
									{errors.Email && errors.Email.type === "pattern" && <span role="alert">Correo inválido</span>}
							</div>
						<label htmlFor="password"></label>
 						 <input 
							 id ="password"
							 type="password"
							 placeholder="Contraseña"
							 className="form-control"
							 aria-invalid={errors.password ? "true" : "false"}
							 {...register("password", { required: true, minLength: 5})}
							 />
						 <div className="alertDiv">
							 {errors.password && errors.password.type === "required" && <span role="alert">El campo Contraseña es obligatorio</span>}
							 {errors.password && errors.password.type === "minLength" && <span role="alert">Mínimo de longitud es de 5 caracteres</span>}
						 </div>


						<label>Admin</label>
						<input
							type="radio"
							value="admin"
							name="userType"
							{...register("userType")}
						/>
						<label>Business</label>
						<input
							type="radio"
							value="business"
							name="userType"
							{...register("userType")}
						/>
						<button 
						onClick ={ (event) => {
							event.preventDefault();
							if (getValues("userType") != null){
								setNext(true);
								}
							}}
						>
							Next
						</button>
					
					</div>
				</div>
			</Fragment>
		);
	}, []);

	useEffect(() => {
		if (getValues("userType") =="admin") {
			setRegisterForm(
				<Fragment>
					<input
						plasceholder="Adress"
						{...register("adress", {required: true, maxLength: 20})}

					/>
					<input type ="submit" />
				</Fragment>
			);
		} else if (getValues("userType") == "business") {
			setRegisterForm(
				<Fragment>
					<input
						placeholder="CIF"
						{...register("cif", {required: true, maxLength: 20})}
					/>
					<input type ="submit" />
				</Fragment>
			);	
		}				
	}, [next]);
	return (
		<form
			onSubmit={handleSubmit((data) => {
				actions.register(data);
			})}
		>
			{registerForm}
		</form>
		);
	};
 
 export default Register;




//  import React, { Fragment, useContext } from "react";

//  import { Context } from "../store/appContext.js";
//  import logoBig from "../../img/logoBig.png";
//  import { useForm } from "react-hook-form";
 
//  import { Link } from "react-router-dom";
 
 
 
//  import Radio from '@mui/material/Radio';
//  import RadioGroup from '@mui/material/RadioGroup';
//  import FormControlLabel from '@mui/material/FormControlLabel';
//  import FormControl from '@mui/material/FormControl';
 
 
 
//  import "../../styles/login.scss";
 
//  export const Login = () => {
// 	 const { store, actions } = useContext(Context);
 
// 	 const {
// 		 register,
// 		 handleSubmit,
// 		 formState: {errors}
 
// 	 } = useForm();
 
// 	 const onSubmit = data => actions.login(data)
 
 
// 	 return (
// 		 <Fragment>
 
// 			 <div className="loginContainer">
// 				 <div className="btn nearLog">
// 					 <Link to="/">
// 						 volver
// 					 </Link>
// 				 </div>
// 				 <p>
// 					 <img src={logoBig} />
// 				 </p>
// 				 <div className="title">Iniciar sesión</div>
// 				 <div className="login-form">
// 					 <form
// 						 onSubmit={handleSubmit(onSubmit)} >
// 						 <label htmlFor="username"></label>
// 						 <input 
// 							 id ="username"
// 							 placeholder="Usuario"
// 							 className="form-control"
// 							 aria-invalid={errors.username ? "true" : "false"}
// 							 {...register("username", { required: true, maxLength: 15})}
// 						 />
						 
// 						 <div className="alertDiv">
// 							 {errors.username && errors.username.type === "required" && <span role="alert">El campo Usuario es obligatorio</span>}
// 							 {errors.username && errors.username.type === "maxLength" && <span role="alert">Máximo de caracteres excedido</span>}
// 						 </div>
 
 
// 						 <label htmlFor="password"></label>
// 						 <input 
// 							 id ="password"
// 							 type="password"
// 							 placeholder="Contraseña"
// 							 className="form-control"
// 							 aria-invalid={errors.password ? "true" : "false"}
// 							 {...register("password", { required: true, minLength: 5})}
// 							 />
// 						 <div className="alertDiv">
// 							 {errors.password && errors.password.type === "required" && <span role="alert">El campo Contraseña es obligatorio</span>}
// 							 {errors.password && errors.password.type === "minLength" && <span role="alert">Mínimo de longitud es de 5 caracteres</span>}
// 						 </div>
 
// 						 <p className="forgottenPassword">He olvidado mi contraseña</p>
 
// 					 {/* OPCION 1 */}
// 						 <div className="chooseUserBusiness mt-3">
// 							 <FormControl component="fieldset">
// 								 <RadioGroup row aria-label="gender" name="row-radio-buttons-group" >
// 									 <FormControlLabel value="Usuario" control={<Radio />} label="Usuario" />
// 									 <FormControlLabel value="Empresa" control={<Radio />} label="Empresa" />
// 								 </RadioGroup>
// 							 </FormControl>
// 						 </div>
 
// 						 {/* OPCION 2 */}
// 						 <input {...register("radio")} type="radio" value="A"   />
// 						   <input {...register("radio")} type="radio" value="B" />
// 						   <div className="alertDiv">
// 							 {errors.radio && errors.radio.type === "required" && <span role="alert">El campo elegir usuario o negocio es obligatorio</span>}
// 						 </div>
		   
// 						   {/* OPCION 3 */}
// 						   <input 
// 							 id ="chooseUserBusiness"
// 							 type="radio"
// 							 value="Usuario"
// 							 className="chooseUserBusiness"
// 							 {...register("chooseUserBusiness", { required: true,})}
// 							 />
// 						 <div className="alertDiv">
// 							 {errors.chooseUserBusiness && errors.chooseUserBusiness.type === "required" && <span role="alert">El campo elegir usuario o negocio es obligatorio</span>}
// 						 </div>
 
 
 
// 						 <button type="submit" className="btn btn-primary form-control btn_submit mt-5">Iniciar sesión</button> 
// 						 {errors.submit && errors.submit.type === "required" && <span role="alertSubmitLog">!ERROR! Se ha producido un error en su intento de Inicio de sesión. Asegúrese de que el correo, el nombre de usuario y la contraseña son correctos</span>}
 
// 					 </form>
// 				 </div>
				 
// 			 </div>
 
// 		 </Fragment>
// 	 );
 
 
//  };
 
 



