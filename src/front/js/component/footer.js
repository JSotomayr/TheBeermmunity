import React, { Fragment } from "react";
import "../../styles/footer.scss";

export const Footer = () => {
	return (
		<Fragment>
			<div className="container-fluid footer">
				{/* <div className="row p-0 py-5">
					<div className="col-md-12 col-lg-3 footer_column"> */}

					<div className="container1">
						<p className="footerTitle">BeBeer</p>
							<div className="footer_column_div">
								<p>Info</p>
								<p>Contacta con nosotros</p>
							</div>
						{/* </div> */}
					</div>

					<div className="container2"> 
					{/* <div className="col-md-12 col-lg-3 footer_column"> */}
						<p className="footerTitle">Legal</p>
							<div className="footer_column_div">
								<p>Política de Cookies</p>
								<p>Política de Privacidad</p>
							</div>
						{/* </div> */}
					</div>

					<div className="container3">
					{/* <div className="col-md-12 col-lg-3 footer_column"> */}
						<p className="footerTitleConect">Conecta</p>
							<div className="footer_column_img">
								<i className="fab fa-facebook footer_img" />
								<i className="fab fa-instagram footer_img" />
								<i className="fab fa-whatsapp footer_img" />
							</div>
					</div>

					{/* </div> */}
				{/* </div> */}
			</div>
		</Fragment>
	);
};
