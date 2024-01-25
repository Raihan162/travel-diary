import { setLoading } from "@containers/App/actions";
import { addBookmark, getDataBookmark } from "@domain/api";
import { call, put, takeLatest } from "redux-saga/effects";
import { ADD_BOOKMARK, GET_BOOKMARK } from "./constants";
import { getCreateBookmark, setBookmark } from "./actions";

function* getBookmarkSaga() {
    yield put(setLoading(true))
    try {
        const response = yield call(getDataBookmark)
        console.log(response)
        yield put(setBookmark(response.data))
    } catch (error) {
        console.log(error)
    }
    yield put(setLoading(false))
}

function* createBookmarkSaga(action) {
    yield put(setLoading(true))
    try {
        const response = yield call(addBookmark, action.payload)
        console.log(response)
        yield put(getCreateBookmark(response.data))
    } catch (error) {
        console.log(error)
    }
    yield put(setLoading(false))
}

export default function* bookmarkSaga() {
    yield takeLatest(GET_BOOKMARK, getBookmarkSaga);
    yield takeLatest(ADD_BOOKMARK, createBookmarkSaga)
}