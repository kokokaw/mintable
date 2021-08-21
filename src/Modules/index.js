import { combineReducers } from 'redux'
import * as Raffle from './raffle'
import * as App from './app'

export default combineReducers({
	app: App.reducer,
	raffle: Raffle.reducer
})

export const rootSagas = [
	App.rootSaga,
	Raffle.rootSaga
]
