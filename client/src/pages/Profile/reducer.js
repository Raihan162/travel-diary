import { produce } from "immer";

import { GET_POST, GET_PROFILE, SET_POST, SET_PROFILE } from "./constants";

export const initialState = {
    profile: {},
    myPost: []
}

export const storedKey = ['profile', 'myPost']

const profileReducer = (state = initialState, action) =>
    produce(state, (draft) => {
        switch (action.type) {
            case GET_PROFILE:
                draft.profile = action.profile
                break;
            case SET_PROFILE:
                draft.profile = action.data
                break;

            case GET_POST:
                draft.myPost = action.myPost
                break;
            case SET_POST:
                draft.myPost = action.data

            default:
                break;
        }
    })

export default profileReducer