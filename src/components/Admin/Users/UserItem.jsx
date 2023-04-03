import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUserRole } from "../../../redux/actions/admin";
import RoleSelect from "./RoleSelect";

const UserItem = ({ id, phoneNumber, role, isRegistered }) => {
	const dispatch = useDispatch();

	const onSelectRole = (selectedRole) => {
		dispatch(setUserRole(id, selectedRole));
	};

	return (
		<tr className="user__item">
			<td>{id}</td>
			<td>{phoneNumber}</td>
			<td className="user__select">
				{isRegistered ? (
					<RoleSelect activeItem={role} onSelectItem={onSelectRole} />
				) : (
					role
				)}
			</td>
			<td>{isRegistered.toString()}</td>
		</tr>
	);
};

export default UserItem;
