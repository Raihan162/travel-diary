import { produce } from "immer";

import { GET_DETAIL_POST, SET_DETAIL_POST } from "./constants";

export const initialState = {
    detailPost: {}
}

export const storedKey = ['detailPost']

const detailReducer = (state = initialState, action) =>
    produce(state, (draft) => {
        switch (action.type) {
            case GET_DETAIL_POST:
                draft.detailPost = action.data
                break;

            case SET_DETAIL_POST:
                draft.detailPost = action.data

            default:
                break;
        }
    })

export default detailReducer