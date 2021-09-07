/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { API } from "../api";

const Imagehelper = ({param, id }) => {
	let imageUrl = id
		? `${API}/${param}/get-photo/${id}`
		: "";
	return (
		<div className='rounded border border-success p-2' style = {
			{
				height : "250px"
			}
		}> 
			<img
				src={imageUrl}
				alt='photo'
				style={{ maxHeight: "100%", maxWidth: "100%" }}
				className='mb-3 rounded'
			/>
		</div>
	);
};

export default Imagehelper;
