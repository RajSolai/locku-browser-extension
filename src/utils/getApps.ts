import axios from "axios";
import { getAppsUrl } from "./urls";

export const loadApps = async (ownerId: string) => {
  const doc = { email: ownerId };
  const response = await axios.post(getAppsUrl, doc);
  return response.data["msg"] || [];
};
