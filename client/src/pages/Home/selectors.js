import { createSelector } from 'reselect';
import { initialState } from '@pages/Home/reducer';

const selectHomeState = (state) => {
    // console.log(state)
    return state.home || initialState;
}

export const selectAllPost = createSelector(selectHomeState, (state) => state.allPost)