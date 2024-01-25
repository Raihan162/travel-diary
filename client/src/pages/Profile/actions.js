import { GET_PROFILE, SET_PROFILE } from "./constants";

export const getProfileUser = () => ({
    type: GET_PROFILE,
})

export const setProfileUser = (data) => ({
    type: SET_PROFILE,
    data
})