import { createReducer, createAction } from 'redux-act'
import { put, takeLatest } from 'redux-saga/effects'

export const LOADING_TOGGLE = createAction('app/LOADING_TOGGLE')

export const LOADING_ACTION = createAction('app/action/LOADING_ACTION')

const initialState = {
	loading: false
}

export const reducer = createReducer({
	[LOADING_TOGGLE]: (state) => ({
	...state,
	loading: !state.loading
	}),
}, initialState)

export function * toggleLoadingSaga() {
	yield put(LOADING_TOGGLE())
}

export const rootSaga = function * () {
	yield takeLatest(LOADING_ACTION, toggleLoadingSaga)
}
