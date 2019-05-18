import { combineReducers } from 'redux'
import {
  FETCH_VALUES,
  FETCH_INDEXES,
  ADD_INDEX
} from 'actions/types'

const valuesReducer = (state={}, action) => {
  switch(action.type) {
    case FETCH_VALUES:
      return action.payload
    default:
      return state
  }
}

const indexesReducer = (state=[], action) => {
  switch(action.type) {
    case FETCH_INDEXES:
      return action.payload
    case ADD_INDEX:
      if (state.includes(action.payload)) {
        return state
      } else {
        return [...state, action.payload]
      }
    default:
      return state
  }
}

export default combineReducers({
  values: valuesReducer,
  indexes: indexesReducer
})
