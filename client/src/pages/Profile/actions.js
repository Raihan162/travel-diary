import { GET_PROFILE, SET_PROFILE, GET_POST, SET_POST} from "./constants";

export const getProfileUser = () => ({
    type: GET_PROFILE,
})

export const setProfileUser = (data) => ({
    type: SET_PROFILE,
    data
})

export const getProfilePost = () =>({
    type: GET_POST
})

export const setPostProfile = (data) =>({
    type: SET_POST,
    data
})