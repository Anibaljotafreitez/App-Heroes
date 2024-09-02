import { type } from "../types/type";


export const authReducer = (state = {}, action) => {

switch (action.type) {

    case type.login:
    return {
        ...state,  // siempre es util el spred, pueden haber mas propiedades a futuro
        logged: true,
        user: action.payload,
    }

    case type.logout:
        return {
            logged: false,
        }

    default:
      return  state;
}
};
