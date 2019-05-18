import axios from 'axios';
import {
  FETCH_VALUES,
  FETCH_INDEXES,
  ADD_INDEX
} from 'actions/types'

export const fetchValues = () => async dispatch => {
  const response = await axios.get('/api/values/current')
  const values = response.data
  dispatch({ type: FETCH_VALUES, payload: values })
}

export const fetchIndexes = () => async dispatch => {
  const response = await axios.get('/api/values/all')
  const indexes = response.data
  dispatch({ type: FETCH_INDEXES, payload: indexes })
}

export const addIndex = (index) => async dispatch => {
  await axios.post('/api/values', { index });
  dispatch({ type: ADD_INDEX, payload: index })
}
