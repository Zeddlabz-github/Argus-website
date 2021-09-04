/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
import { API } from "../api";

//API is the server address

export const signup = (user) => {
	return fetch(`${API}/signup`, {
		method: "POST",
		headers: {
			Accept: "application/JSON",
			"Content-Type": "application/JSON",
		},
		body: JSON.stringify(user),
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};

export const signin = (user) => {
	console.log(JSON.stringify(user))
	return fetch(`${API}/signin`, {
		method: "POST",
		headers: {
			Accept: "application/JSON",
			"Content-Type": "application/JSON",
		},
		body: JSON.stringify(user),
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};

//aunthenticate method to set a user token

export const aunthenticate = (user, next) => {
	if (window !== "undefined") {
		localStorage.setItem("jwt", JSON.stringify(user));
		next();
	}
};

export const signout = (next) => {
	if (window !== "undefined") {
		localStorage.removeItem("jwt");
		next();
	}

	return fetch(`${API}/signout`, {
		method: "GET",
	})
		.then(() => console.log("Signout Sucessfully!"))
		.catch((err) => console.log(err));
};

export const isAuthenticated = () => {
	if (window == "undefined") {
		return false;
	}
	if (localStorage.getItem("jwt")) {
		return JSON.parse(localStorage.getItem("jwt"));
	} else {
		return false;
	}
};
