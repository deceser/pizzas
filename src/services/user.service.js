import protectedApi from "./protectedApi";
import api from "./api";

export const fetchUserData = async () => {
  const response = await protectedApi().get("user/data");
  return response.data;
};

export const callBackQuery = async (phoneNumber) => {
  const response = await api.post("/call-backs/add", { phoneNumber });
  return response.data;
};
