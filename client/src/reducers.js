import { combineReducers } from 'redux';

import appReducer, { storedKey as storedAppState } from '@containers/App/reducer';
import clientReducer, { storedKey as storedClientState } from '@containers/Client/reducer';
import languageReducer from '@containers/Language/reducer';
import registerReducer, { storedKey as storedRegisterState } from '@pages/Register/reducer';
import loginReducer, { storedKey as storedLoginState } from '@pages/Login/reducer';
import profileReducer, { storedKey as storeProfileState } from '@pages/Profile/reducer';
import homeReducer, { storedKey as storeHomeState } from '@pages/Home/reducer';
import detailReducer, { storedKey as storeDetailState } from '@pages/DetailPost/reducer';
import bookmarkReducer, { storedKey as storeBookmarkState } from '@pages/Bookmark/reducer';

import { mapWithPersistor } from './persistence';

const storedReducers = {
  app: { reducer: appReducer, whitelist: storedAppState },
  client: { reducer: clientReducer, whitelist: storedClientState },
  register: { reducer: registerReducer, whitelist: storedRegisterState },
  login: { reducer: loginReducer, whitelist: storedLoginState },
  profile: { reducer: profileReducer, whitelist: storeProfileState },
  home: { reducer: homeReducer, whitelist: storeHomeState },
  detail: { reducer: detailReducer, whitelist: storeDetailState },
  bookmark: { reducer: bookmarkReducer, whitelist: storeBookmarkState }
};

const temporaryReducers = {
  language: languageReducer,
};

const createReducer = () => {
  const coreReducer = combineReducers({
    ...mapWithPersistor(storedReducers),
    ...temporaryReducers,
  });
  const rootReducer = (state, action) => coreReducer(state, action);
  return rootReducer;
};

export default createReducer;
