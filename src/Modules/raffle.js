import { createReducer, createAction } from 'redux-act';
import { put, takeLatest } from 'redux-saga/effects';

export const GET_TICKETS_REQUESTED = createAction('raffle/GET_TICKETS_REQUESTED')
export const TICKETS = createAction('raffle/GET_TICKETS')

export const GET_TICKETS_ACTION = createAction('raffle/action/GET_TICKETS_ACTION')

const initialState = {
  tickets: [],
  isLoading: false
}

export const reducer = createReducer({
  [GET_TICKETS_REQUESTED]: state => ({
    ...state,
    isLoading: true
  }),
  [TICKETS]: (state, payload) => ({
    ...state,
    tickets: payload.data,
    isLoading: false
  }),
}, initialState)

export function * getTicketsSaga() {
  yield put(GET_TICKETS_REQUESTED())
  // Api call here instead
  yield put(TICKETS({
    data: [
      { id: 1, count: 1, type: 'silver' },
      { id: 2, count: 3, type: 'gold' },
      { id: 2, count: 4, type: 'diamond' }
    ]
  }))
}

export const rootSaga = function * () {
  yield takeLatest(GET_TICKETS_ACTION, getTicketsSaga)
}
