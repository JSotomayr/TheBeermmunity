import React, { Fragment, useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useForm, Controller } from "react-hook-form";


<p>hola</p>

 export const FormBusiness = () => {
	
	const [next, setNext] = useState(false);
	const {registerForm, setRegisterForm} = useState();
	const { handleSubmit, register, getValues} = useForm();
	const { store, actions } = useContext(Context);

	useEffect(() => {
		// setRegisterForm(
			<Fragment>
				<input placeholder ="Name"
				{...register("firstName", {required: true, maxLength: 20})}
 				/>
				<input placeholder ="LastName"
				{...register("LastName", {required: true, maxLength: 20})}
 				/>
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
			</Fragment>
		// );
	}, []);

	useEffect(() => {
		if (getValues("userType") =="admin") {
			// setRegisterForm(
				<Fragment>
					<input
						plasceholder="Adress"
						{...register("adress", {required: true, maxLength: 20})}

					/>
					<input type ="submit" />
				</Fragment>
			// );
		} else if (getValues("userType") == "business") {
			setRegisterForm(
				<Fragment>
					<input
						placeholder="CIF"
						{...register("cif", {required: true, maxLength: 20})}
					/>
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
 
 export default FormBusiness;









// 	return (
// 		<Fragment>
// 			<div>
// 				<h1 className="title">Crear cuenta de Empresa</h1>
// 			</div>
			
// 				<form
// 					onSubmit={handleSubmit(onSubmit)} >
// 					<label htmlFor="username"></label>
// 					<input 
// 						id ="username"
// 						placeholder="Nombre y apellidos"
// 						className="form-control"
// 						aria-invalid={errors.username ? "true" : "false"}
// 						{...register("username", { required: true, maxLength: 30})}
// 					/>
					
// 					<div className="alertDiv">
// 						{errors.username && errors.username.type === "required" && <span role="alert">El campo Usuario es obligatorio</span>}
// 						{errors.username && errors.username.type === "maxLength" && <span role="alert">Max length exceedeed</span>}
// 					</div>
// 					<label htmlFor="company_name"></label>
// 						<input 
// 							id ="company_name"
// 							type="company_name"
// 							placeholder="Nombre de la empresa"
// 							className="form-control"
// 							aria-invalid={errors.company_name ? "true" : "false"}
// 							{...register("company_name", { required: true, minLength: 30})}
// 							/>
// 						<div className="alertDiv">
// 							{errors.company_name && errors.company_name.type === "required" && <span role="alert">El campo Contraseña es obligatorio</span>}
// 							{errors.company_name && errors.company_name.type === "minLength" && <span role="alert">Max length exceedeed</span>}
// 						</div>	
// 					<label htmlFor="Adress"></label>
// 						<input 
// 							id ="Adress"
// 							type="Adress"
// 							placeholder="Dirección"
// 							className="form-control"
// 							aria-invalid={errors.Adress ? "true" : "false"}
// 							{...register("Adress", { required: true, minLength: 30})}
// 							/>
// 						<div className="alertDiv">
// 							{errors.Adress && errors.Adress.type === "required" && <span role="alert">El campo Contraseña es obligatorio</span>}
// 							{errors.Adress && errors.Adress.type === "minLength" && <span role="alert">Max length exceedeed</span>}
// 						</div>
// 						<label htmlFor="city"></label>
// 						<input 
// 							id ="city"
// 							type="city"
// 							placeholder="Ciudad"
// 							className="form-control"
// 							aria-invalid={errors.city ? "true" : "false"}
// 							{...register("city", { required: true, minLength: 30})}
// 							/>
// 						<div className="alertDiv">
// 							{errors.city && errors.city.type === "required" && <span role="alert">El campo Contraseña es obligatorio</span>}
// 							{errors.city && errors.city.type === "minLength" && <span role="alert">Max length exceedeed</span>}
// 						</div>							
// 					<label htmlFor="country"></label>
// 						<input 
// 							id ="country"
// 							type="country"
// 							placeholder="País"
// 							className="form-control"
// 							aria-invalid={errors.country ? "true" : "false"}
// 							{...register("country", { required: true, minLength: 30})}
// 							/>
// 						<div className="alertDiv">
// 							{errors.country && errors.country.type === "required" && <span role="alert">El campo Contraseña es obligatorio</span>}
// 							{errors.country && errors.country.type === "minLength" && <span role="alert">Max length exceedeed</span>}
// 						</div>	

// 						<label> Business</label>		
// 						<input
// 							type="radio"
// 							value="Business"	
// 							name="userType"
// 							{...register("userType")}
// 						/>
// 						<label> Customer </label>		
// 						<input
// 							type="radio"
// 							value="Customer"	
// 							name="userType"
// 							{...register("userType")}
// 						/>
// 						<button 
// 							onClick = {(event)} => {
// 							event.preventDefault();
// 							if (getValues("userType" != null) {
// 								setNext(true);
// 								}
// 							}}
// 						>
// 						Next
// 						</button>
							
// 				</form>
		
// 		</Fragment>
			
// 	)	
// }

// export default FormBusiness;







