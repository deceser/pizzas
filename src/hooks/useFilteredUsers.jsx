import { useSelector } from "react-redux";

const useFilteredUsers = (phoneNumberPart) => {
	const { users } = useSelector((state) => state.admin);

	return phoneNumberPart
		? users.filter((user) => user.phoneNumber.includes(phoneNumberPart))
		: users;
};

export default useFilteredUsers;
