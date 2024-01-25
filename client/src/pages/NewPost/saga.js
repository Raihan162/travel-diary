import { setLoading } from "@containers/App/actions"
import { put, call, takeLatest } from "redux-saga/effects"
import { SET_NEW_JOURNEY } from "./constants"

function* createNewJourney(token, formData) {
    yield put(setLoading(true))
    try {
        console.log(formData)
    } catch (error) {
        console.log(error)
    }

    yield put(setLoading(true))
}

export default function* newJourneySaga() {
    yield takeLatest(SET_NEW_JOURNEY, createNewJourney)
}