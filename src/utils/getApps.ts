import axios from "axios";

export const loadApps = async (ownerId) => {
  const response = await axios.get(`http://localhost:5555/getApps/${ownerId}`);
  return response.data.apps;
};
