import { POST_LOGIN_REQUEST, POST_LOGIN_SUCCESS } from "./constants";

export const postLoginRequest = (payload) => ({
    type: POST_LOGIN_REQUEST,
    payload
})

export const postLoginSuccess = (data) => ({
    type: POST_LOGIN_SUCCESS,
    data
})