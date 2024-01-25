import { SET_NEW_JOURNEY } from "./constants";

export const addJourney = (formData, cb) => ({
    type: SET_NEW_JOURNEY,
    formData,
    cb
})