import { produce } from "immer";

import { GET_PROFILE, SET_PROFILE } from "./constants";

export const initialState = {
    profile: {}
}

export const storedKey = ['profile']

const profileReducer = (state = initialState, action) =>
    produce(state, (draft) => {
        switch (action.type) {
            case GET_PROFILE:
                draft.profile = action.profile
                break;
            case SET_PROFILE:
                draft.profile = action.data
                break;
            default:
                break;
        }
    })

export default profileReducer