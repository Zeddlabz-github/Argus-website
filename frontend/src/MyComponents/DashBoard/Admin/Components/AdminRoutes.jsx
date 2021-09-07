/* eslint-disable no-unused-vars */
import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "./../../../../helpers/auth";

const AdminRoute = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) =>
				isAuthenticated() && isAuthenticated().user?.role === 2 /* User 2 is Admin */ ? (
					<Component {...props} />
				) : (
					<Redirect
						to={{
							pathname: "/signup",
							state: { from: props.location },
						}}
					/>
				)
			}
		/>
	);
};

export default AdminRoute;