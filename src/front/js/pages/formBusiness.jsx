import React, { Fragment, useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useForm } from "react-hook-form";



 const FormBusiness = () => {
	const { store, actions } = useContext(Context);
	const {
		register,
		handleSubmit,
		formState: {errors}

	} = useForm();

	const onSubmit = data => actions.login(data)

	return (
		<Fragment>
			<div>
				<h1 className="title">Crear cuenta de Empresa</h1>
			</div>
			<div className="formContainer">
				<form
					onSubmit={handleSubmit(onSubmit)} >
					<label htmlFor="username"></label>
					<input 
						id ="username"
						placeholder="Nombre y apellidos"
						className="form-control"
						aria-invalid={errors.username ? "true" : "false"}
						{...register("username", { required: true, maxLength: 30})}
					/>
					
					<div className="alertDiv">
						{errors.username && errors.username.type === "required" && <span role="alert">El campo Usuario es obligatorio</span>}
						{errors.username && errors.username.type === "maxLength" && <span role="alert">Max length exceedeed</span>}
					</div>
					<label htmlFor="company_name"></label>
						<input 
							id ="company_name"
							type="company_name"
							placeholder="Nombre de la empresa"
							className="form-control"
							aria-invalid={errors.company_name ? "true" : "false"}
							{...register("company_name", { required: true, minLength: 30})}
							/>
						<div className="alertDiv">
							{errors.company_name && errors.company_name.type === "required" && <span role="alert">El campo Contraseña es obligatorio</span>}
							{errors.company_name && errors.company_name.type === "minLength" && <span role="alert">Max length exceedeed</span>}
						</div>	
					<label htmlFor="Adress"></label>
						<input 
							id ="Adress"
							type="Adress"
							placeholder="Dirección"
							className="form-control"
							aria-invalid={errors.Adress ? "true" : "false"}
							{...register("Adress", { required: true, minLength: 30})}
							/>
						<div className="alertDiv">
							{errors.Adress && errors.Adress.type === "required" && <span role="alert">El campo Contraseña es obligatorio</span>}
							{errors.Adress && errors.Adress.type === "minLength" && <span role="alert">Max length exceedeed</span>}
						</div>
						<label htmlFor="city"></label>
						<input 
							id ="city"
							type="city"
							placeholder="Ciudad"
							className="form-control"
							aria-invalid={errors.city ? "true" : "false"}
							{...register("city", { required: true, minLength: 30})}
							/>
						<div className="alertDiv">
							{errors.city && errors.city.type === "required" && <span role="alert">El campo Contraseña es obligatorio</span>}
							{errors.city && errors.city.type === "minLength" && <span role="alert">Max length exceedeed</span>}
						</div>							
					<label htmlFor="country"></label>
						<input 
							id ="country"
							type="country"
							placeholder="País"
							className="form-control"
							aria-invalid={errors.country ? "true" : "false"}
							{...register("country", { required: true, minLength: 30})}
							/>
						<div className="alertDiv">
							{errors.country && errors.country.type === "required" && <span role="alert">El campo Contraseña es obligatorio</span>}
							{errors.country && errors.country.type === "minLength" && <span role="alert">Max length exceedeed</span>}
						</div>					
				</form>
			</div>
		</Fragment>
			
	)	
}

export default FormBusiness;






