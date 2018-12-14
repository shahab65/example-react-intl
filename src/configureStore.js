import {createStore, combineReducers} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import locale from './reducers/localeReducer';

const persistConfig = {
  key: 'root',
  storage: storage,
};

const appReducer = combineReducers({
  locale,
});
const persistedReducer = persistReducer(persistConfig, appReducer);

export const store = createStore(
  persistedReducer
  );

export const persistor = persistStore(store);
