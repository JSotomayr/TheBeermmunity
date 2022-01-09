import React, { Fragment, useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext.js";
import logoBig from "../../img/logoBig.png";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";

import "../../styles/login.scss";

export const Login = () => {
  const { store, actions } = useContext(Context);
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = (dataLogin) => actions.login(dataLogin);

  useEffect(() => {
    if (Object.keys(store.currentUser).length) {
      navigate(`/profile/${store.currentUser.id}`);
    }
  }, [store.currentUser]);

  return (
    <Fragment>
      <div className="btn_return">
        <Link to="/">
          <div className="btn btn_return_box">
            <i className="fas fa-undo-alt"></i>
            <div className="btn_return_word">VOLVER</div>
          </div>
        </Link>
      </div>
      <div className="loginContainer">
        <img
          className="topImage"
          src="https://res.cloudinary.com/de8eg0q3r/image/upload/v1641555560/TheBeermmunity_logos_colores-05_c8id3v.png"
        />
        <div className="title">Iniciar sesión</div>
        <div className="login-form">
          <form onSubmit={handleSubmit(submit)}>
            <label htmlFor="username" className="subtitle_form">
              Usuario
            </label>
            <input
              id="username"
              placeholder="Usuario"
              className="form-control"
              aria-invalid={errors.username ? "true" : "false"}
              {...register("username", { required: true, maxLength: 15 })}
            />

            {/* <div className="alertDiv">
							{errors.username && errors.username.type === "required" && <span role="alert">El campo Usuario es obligatorio</span>}
							{errors.username && errors.username.type === "maxLength" && <span role="alert">Máximo de caracteres excedido</span>}
						</div> */}

            <label htmlFor="email" className="subtitle_form">
              Email
            </label>
            <input
              id="email"
              placeholder="Email"
              className="form-control"
              aria-invalid={errors.email ? "true" : "false"}
              {...register("email", { required: true, minLength: 10 })}
            />

            {/* <div className="alertDiv">
							{errors.email && errors.email.type === "required" && <span role="alert">El campo Email es obligatorio</span>}
							{errors.email && errors.email.type === "minLength" && <span role="alert">El formato de email es incorrecto</span>}
						</div> */}

            <label htmlFor="password" className="subtitle_form">
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              placeholder="Contraseña"
              className="form-control"
              aria-invalid={errors.password ? "true" : "false"}
              {...register("password", { required: true, minLength: 5 })}
            />
            {/* <div className="alertDiv">
							{errors.password && errors.password.type === "required" && <span role="alert">El campo Contraseña es obligatorio</span>}
							{errors.password && errors.password.type === "minLength" && <span role="alert">Mínimo de longitud es de 5 caracteres</span>}
						</div> */}

            <p className="forgottenPassword">He olvidado mi contraseña</p>

            <div className="chooseUserBusiness mt-3">
              <Form.Check
                type="radio"
                label="Usuario"
                name="formHorizontalRadios"
                id="formHorizontalRadios2"
                required
              />
              <Form.Check
                type="radio"
                label="Empresa"
                name="formHorizontalRadios"
                id="formHorizontalRadios3"
              />
            </div>

            <input
              type="submit"
              className="btn form-control btn_submit mt-5"
              value="Acceder"
            />
            {errors.submit && errors.submit.type === "required" && (
              <span role="alertSubmitLog">
                !ERROR! Se ha producido un error en su intento de Inicio de
                sesión. Asegúrese de que el correo, el nombre de usuario y la
                contraseña son correctos
              </span>
            )}
          </form>
        </div>
      </div>
    </Fragment>
  );
};
