import { produce } from "immer";
import { REGISTER } from "./constants";

export const initialState = {
    dataUser: {
    }
}

export const storedKey = ['dataUser']

const registerReducer = (state = initialState, action) =>
    produce(state, (draft) => {
        switch (action.type) {
            case REGISTER:
                draft.dataUser = action.dataUser
                break;

            default:
                break;
        }
    })

export default registerReducer;