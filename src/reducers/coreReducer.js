import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState'

export default function coreReducer(state = initialState.fxtrades, action){
    switch(action.type){
        case actionTypes.LOAD_FXTRADES_SUCCESS:
            return [...action.fxtrades]
        default:
            return state
    }
}