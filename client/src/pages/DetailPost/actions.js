import { GET_DETAIL_POST, SET_DETAIL_POST } from "./constants";

export const getDetailPost = (id) => ({
    type: GET_DETAIL_POST,
    id
})

export const setDetailPost = (data) => ({
    type: SET_DETAIL_POST,
    data
})