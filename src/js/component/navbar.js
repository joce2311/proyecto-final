import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Un Manjarchs</span>
			</Link>
			<div>
				
				<Link to="/login">
				<button className="btn btn-primary">Ingresar</button>
				</Link>
				<Link to="/recuperarcontraseña">
				<button className="btn btn-primary">crear</button>
				</Link>
			</div>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div>
		</nav>
	);
};
