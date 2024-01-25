import { createSelector } from 'reselect';
import { initialState } from '@pages/Profile/reducer';

const selectProfileState = (state) => {
    // console.log(state)
    return state.profile || initialState;
}

export const selectProfile = createSelector(selectProfileState, (state) => state.profile)
export const selectPost = createSelector(selectProfileState, (state) => state.myPost)

// export const selectLogin = createSelector(selectClientState, (state) => state.login);