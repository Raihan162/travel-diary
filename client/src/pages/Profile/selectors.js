import { createSelector } from 'reselect';
import { initialState } from '@pages/Profile/reducer';

const selectProfileState = (state) => {
    return state.profile || initialState;
}

export const selectProfile = createSelector(selectProfileState, (state) => state.profile)

// export const selectLogin = createSelector(selectClientState, (state) => state.login);