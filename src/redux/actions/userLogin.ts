import { user } from "../reducers/userReducer";

export const userLogin = (payload: user) => ({
  type: "login",
  payload,
});
