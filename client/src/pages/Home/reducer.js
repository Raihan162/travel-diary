import { produce } from "immer";

import { GET_ALL_POST, SET_ALL_POST } from "./constants";

export const initialState = {
    allPost: []
}

export const storedKey = ['allPost']

const homeReducer = (state = initialState, action) =>
    produce(state, (draft) => {
        switch (action.type) {
            case GET_ALL_POST:
                draft.allPost = action.allPost
                break;

            case SET_ALL_POST:
                draft.allPost = action.data
                break;

            default:
                break;
        }
    })

export default homeReducer