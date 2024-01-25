import { call, put, takeLatest } from "redux-saga/effects";
import { setLoading } from "@containers/App/actions";
import { getProfileUser, setProfileUser } from "./actions";
import { GET_PROFILE } from "./constants";
import { profileUser } from "@domain/api";

function* getProfile() {
    yield put(setLoading(true))
    try {
        const response = yield call(profileUser)
        yield put(setProfileUser(response.data))
    } catch (error) {
        console.log(error)
    }
    yield put(setLoading(false))
}

export default function* profileSaga() {
    yield takeLatest(GET_PROFILE, getProfile)
}