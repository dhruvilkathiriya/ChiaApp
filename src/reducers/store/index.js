import {applyMiddleware, compose, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../../reducers/index';
import rootSaga from '../../sagas/index';
import {AsyncStorage} from 'react-native';
import {persistReducer, persistStore} from 'redux-persist';

const middleware = [];
const enhancers = [];

const persistConfig = {
  key: 'chia',
  storage: AsyncStorage,
};

const sagaMiddleware = createSagaMiddleware();
middleware.push(sagaMiddleware);

enhancers.push(applyMiddleware(...middleware));

const persistRootReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistRootReducer, compose(...enhancers));

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
