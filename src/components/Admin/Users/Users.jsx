import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useFilteredUsers, useInput, usePagination } from "../../../hooks";
import { getAdminUsers } from "../../../redux/actions/admin";
import { Pagination } from "../../";
import UserItem from "./UserItem";
import { Button, Input } from "../../ui";

const Users = () => {
	const dispatch = useDispatch();
	const searchInp = useInput();

	const filteredUsers = useFilteredUsers(searchInp.value);
	const pagination = usePagination(filteredUsers.length, 10);

	useEffect(() => {
		dispatch(getAdminUsers());
	}, []);

	const offset = pagination.page * pagination.rowsPerPage;

	const paginatedUsers = filteredUsers.filter(
		(user, index) => index >= offset && index < offset + pagination.rowsPerPage
	);

	return (
		<div className="users">
			<div className="users__content">
				<div className="users__search">
					<Input label="Search" {...searchInp} />
				</div>
				<table className="table users-table">
					<thead>
						<tr>
							<th>id</th>
							<th>phone number</th>
							<th>role</th>
							<th>isRegistered</th>
						</tr>
					</thead>
					<tbody>
						{paginatedUsers.length ? (
							paginatedUsers.map((user) => <UserItem key={user.id} {...user} />)
						) : (
							<tr></tr>
						)}
					</tbody>
				</table>
				<Pagination {...pagination} />
			</div>
		</div>
	);
};

export default Users;
