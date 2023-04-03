import { useSelector } from "react-redux";

const useRole = () => {
  const { role } = useSelector((state) => state.user);

  return role;
}

export default useRole;