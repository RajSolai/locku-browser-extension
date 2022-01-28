export type user = {
  uid: string;
  password: string;
};

const initialState: user = { uid: "empty", password: "empty" };

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "login":
      return (state = payload);

    default:
      return state;
  }
};
