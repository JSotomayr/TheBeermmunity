import React, { Fragment, useContext } from "react";

import { Context } from "../store/appContext.js";
import logoBig from "../../img/logoBig.png";
import { useForm } from "react-hook-form";

import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form'


import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


import "../../styles/login.scss";

export const Login = () => {
	const { store, actions } = useContext(Context);

	const {
		register,
		handleSubmit,
		formState: {errors}

	} = useForm();

	const onSubmit = data => actions.login(data)

	return (
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
				<div className="title">Iniciar sesión</div>
				<div className="login-form">
					<form
						onSubmit={handleSubmit(onSubmit)} >
						<label htmlFor="username"></label>
						<input 
							id ="username"
							placeholder="Usuario"
							className="form-control"
							aria-invalid={errors.username ? "true" : "false"}
							{...register("username", { required: true, maxLength: 30})}
						/>
						
						<div className="alertDiv">
							{errors.email && errors.username.type === "required" && <span role="alert">El campo Usuario es obligatorio</span>}
							{errors.email && errors.username.type === "maxLength" && <span role="alert">Max length exceedeed</span>}
						</div>


						<label htmlFor="password"></label>
						<input 
							id ="password"
							type="password"
							placeholder="Contraseña"
							className="form-control"
							aria-invalid={errors.password ? "true" : "false"}
							{...register("password", { required: true, minLength: 10})}
							/>
						<div className="alertDiv">
							{errors.password && errors.password.type === "required" && <span role="alert">El campo Contraseña es obligatorio</span>}
							{errors.password && errors.password.type === "minLength" && <span role="alert">Max length exceedeed</span>}
						</div>

						<p className="forgottenPassword">He olvidado mi contraseña</p>

						<div className="chooseUserBusiness mt-3">
							<FormControl component="fieldset">
								<RadioGroup row aria-label="gender" name="row-radio-buttons-group" >
									<FormControlLabel value="Usuario" control={<Radio />} label="Usuario" />
									<FormControlLabel value="Empresa" control={<Radio />} label="Empresa" />
								</RadioGroup>
							</FormControl>
						</div>
						<button type="submit" className="btn btn-primary form-control btn_submit mt-5">Iniciar sesión</button> 
						{errors.submit && errors.submit.type === "required" && <span role="alertSubmitLog">!ERROR! Se ha producido un error en su intento de Inicio de sesión. Asegúrese de que el correo, el nombre de usuario y la contraseña son correctos</span>}

					</form>
				</div>
				
			</div>

		</Fragment>
	);
	// }



};

