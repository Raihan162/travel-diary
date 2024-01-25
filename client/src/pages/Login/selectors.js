import { createSelector } from "reselect";
import { initialState } from "@pages/Login/reducer";

const selectLoginState = (state) => {

    return state.login || initialState
}
export const selectLogin = createSelector(selectLoginState, (state) => state.login);