import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import sagas from './sagas';
import reducers from './ducks';

const middlewares = [];

const sagaMonitor = null;
/*  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;
*/

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

middlewares.push(sagaMiddleware);

const createAppropriateStore = createStore;
/*
  process.env.NODE_ENV === 'development'
    ? console.tron.createStore()
    : createStore;
*/

const store = createAppropriateStore(
  reducers,
  compose(applyMiddleware(...middlewares))
);

sagaMiddleware.run(sagas);

export default store;

/*

ver a aula carregando plkaylists do spotify no GoReact

*/
