import {
  GET_PROJECT_CREDENTIALS_SUCCESS,
  ADD_CREDENTIAL_SUCCESS,
  UPDATE_CREDENTIAL_SUCCESS,
  DELETE_CREDENTIAL_SUCCESS

} from '../actions/ActionTypes'

export default function credentials (state = {}, action) {
  const { payload, type } = action
  switch (type) {
    case GET_PROJECT_CREDENTIALS_SUCCESS:
      return [...payload.data]
    case ADD_CREDENTIAL_SUCCESS:
      return [payload.data, ...state]
    case UPDATE_CREDENTIAL_SUCCESS:
      let credIndex = state.findIndex(cred => cred.id === payload.data.id)
      state[credIndex] = {...payload.data}
      return [...state]
    case DELETE_CREDENTIAL_SUCCESS:
      return [...state.filter(cred => cred.id !== payload.data.id)]

    default:
      return state
  }
}
