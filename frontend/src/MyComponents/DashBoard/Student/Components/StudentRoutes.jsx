/* eslint-disable no-unused-vars */
import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "../../../../helpers/auth";

const StudentRoutes = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) =>
				isAuthenticated() && isAuthenticated().user?.role === 1 ? (
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

export default StudentRoutes;