// redux
import { applyMiddleware, createStore } from 'redux';

// third-party
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

// reducers
import reducers from '../reducers';

// sagas
import rootSaga from '../sagas/saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga);

export default store;
