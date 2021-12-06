import React, { Fragment } from "react";
import "../../styles/footer.scss";

export const Footer = () => {
	return (
		<Fragment>
			<div className="container-fluid footer">
				<div className="row p-0 py-5">
					<div className="col-md-12 col-lg-3 footer_column">
						<h2 className="footerTitle">BeBeer</h2>
						<div className="footer_column_div">
							<p>Info</p>
							<p>Contacta con nosotros</p>
						</div>
					</div>
					<div className="col-md-12 col-lg-3 footer_column">
						<h2 className="footerTitle">Legal</h2>
						<div className="footer_column_div">
							<p>Política de Cookies</p>
							<p>Política de Privacidad</p>
						</div>
					</div>
					<div className="col-md-12 col-lg-3 footer_column">
						<h2 className="footerTitleConect">Conecta</h2>
						<div className="footer_column_img">
							<i className="fab fa-facebook footer_img" />
							<i className="fab fa-instagram footer_img" />
							<i className="fab fa-whatsapp footer_img" />
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};
