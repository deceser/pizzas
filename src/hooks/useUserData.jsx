import { useSelector } from "react-redux";

const useUserData = () => {
	return useSelector((state) => state.user.data);
};

export default useUserData;
