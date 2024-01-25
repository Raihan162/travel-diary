import { GET_BOOKMARK, SET_BOOKMARK, ADD_BOOKMARK, SET_ADD_BOOKMARK } from "./constants";

export const getBookmark = () => ({
    type: GET_BOOKMARK
})

export const setBookmark = (data) => ({
    type: SET_BOOKMARK,
    data
})

export const createBookmark = (payload) => ({
    type: ADD_BOOKMARK,
    payload
})

export const getCreateBookmark = (data) => ({
    type: SET_ADD_BOOKMARK,
    data
})