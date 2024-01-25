import { setLoading } from "@containers/App/actions"
import { put, call, takeLatest } from "redux-saga/effects"
import { SET_NEW_JOURNEY } from "./constants"
import { createPost } from "@domain/api"

function* createNewJourney({ formData, cb }) {
    yield put(setLoading(true))
    try {
        console.log(formData)
        yield call(createPost, formData);
        cb();
    } catch (error) {
        console.log(error)
    }

    yield put(setLoading(false))
}

export default function* newJourneySaga() {
    yield takeLatest(SET_NEW_JOURNEY, createNewJourney)
}