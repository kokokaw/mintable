import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer, { rootSagas } from './Modules';

// saga and state
const initialState = {}
const enhancers = []
const sagaMiddleware = createSagaMiddleware()
const middleware = [
 	sagaMiddleware
]

if (process.env.NODE_ENV === 'development') {
	const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

	if (typeof devToolsExtension === 'function') {
		enhancers.push(devToolsExtension())
	}
}

const composedEnhancers = compose(
	applyMiddleware(...middleware),
	...enhancers
)

export default createStore(
	rootReducer,
	initialState,
	composedEnhancers
)

rootSagas.forEach(sagaMiddleware.run)
