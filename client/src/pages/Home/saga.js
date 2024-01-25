import { call, put, takeLatest } from "redux-saga/effects";
import { setLoading } from "@containers/App/actions";
import { GET_ALL_POST } from "./constants";
import { getAllPost } from "@domain/api";
import { setAllPost } from "./actions";

function* getAllPostSaga() {
    yield put(setLoading(true))
    try {
        const response = yield call(getAllPost)
        yield put(setAllPost(response.data))
    } catch (error) {
        console.log(error)
    }
    yield put(setLoading(false))
}

export default function* homeSaga() {
    yield takeLatest(GET_ALL_POST, getAllPostSaga)
}