import { call, put, takeLatest } from "redux-saga/effects";
import { setLoading } from "@containers/App/actions";
import { getDetailPost } from "@domain/api";
import { GET_DETAIL_POST } from "./constants";
import { setDetailPost } from "./actions";

function* getDetail({ id }) {
    yield put(setLoading(true))
    try {
        const response = yield call(getDetailPost, id)
        // console.log(response)
        yield put(setDetailPost(response.data))
    } catch (error) {
        console.log(error)
    }

    yield put(setLoading(false))
}

export default function* detailSaga() {
    yield takeLatest(GET_DETAIL_POST, getDetail)
}