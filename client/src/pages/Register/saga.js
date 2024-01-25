import { call, put, takeLatest } from "redux-saga/effects";
import { register } from "@domain/api";
import { REGISTER } from "./constants";
import { setLoading } from "@containers/App/actions";

function* doRegister({ dataUser }) {
    yield put(setLoading(true));
    try {
        // console.log(dataUser, '<<<<<<<<<<<<<<<<<<<<<SAGA')
        const response = yield call(register, dataUser);

    } catch (error) {
        console.log(error)
    }
    yield put(setLoading(false))
}

export default function* registerSaga() {
    yield takeLatest(REGISTER, doRegister)
}