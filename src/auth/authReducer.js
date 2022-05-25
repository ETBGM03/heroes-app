import { types } from "../types";

// const state = {
//   isAuthenticated: false,
//   name: "Esteban",
// };

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...action.payload,
        isAuthenticated: true,
      };
    case types.logout:
      return {
        isAuthenticated: false,
      };
    default:
      return state;
  }
};
