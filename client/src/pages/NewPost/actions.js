import { SET_NEW_JOURNEY } from "./constants";

export const addJourney = (token, formData) => ({
    type: SET_NEW_JOURNEY,
    token,
    formData
})