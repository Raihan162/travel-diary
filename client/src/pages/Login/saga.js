import { call, put, takeLatest } from "redux-saga/effects";
import { POST_LOGIN_REQUEST, POST_LOGIN_SUCCESS } from "./constants";
import { login } from "@domain/api";
import { setLoading } from "@containers/App/actions";
import { postLoginRequest, postLoginSuccess } from "./actions";

function* doLogin(action) {
    yield put(setLoading(true))
    try {
        const response = yield call(login, action.payload)

        yield put(postLoginSuccess(response.data))
    } catch (error) {
        console.log(error)
    }
    yield put(setLoading(false))
}

export default function* loginSaga() {
    yield takeLatest(POST_LOGIN_REQUEST, doLogin)
}