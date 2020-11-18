import { put, call, fork, takeEvery, all } from 'redux-saga/effects';
import FxTradeApi from '../api/fxtradeapi';
import * as actionTypes from '../actions/actionTypes';

function* loadFxTrades(){
    try {
        const fxtrades = yield call(FxTradeApi.getAllComments);
        yield put({type:actionTypes.LOAD_FXTRADES_SUCCESS, fxtrades})
        
    } catch(e) {
        yield put({type:actionTypes.LOAD_FXTRADES_FAILED, e})
    }
}

function* watchLoadFxTrades(){
    yield takeEvery(actionTypes.LOAD_FXTRADES_REQUEST, loadFxTrades);
}

export default function* rootSaga(){
    yield all([
        fork(watchLoadFxTrades)
    ]);
}