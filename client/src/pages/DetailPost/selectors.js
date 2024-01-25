import { createSelector } from "reselect";
import { initialState } from '@pages/DetailPost/reducer'

const selectDetailState = (state) => {
    return state.detail || initialState
}

export const selectDetailPost = createSelector(selectDetailState, (state) => state.detailPost)