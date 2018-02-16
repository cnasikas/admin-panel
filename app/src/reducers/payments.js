import {
  GET_PROJECT_PAYMENTS_SUCCESS,
  ADD_PAYMENT_SUCCESS,
  UPDATE_PAYMENT_SUCCESS,
  DELETE_PAYMENT_SUCCESS

} from '../actions/ActionTypes'

export default function payments (state = [], action) {
  const { payload, type } = action
  switch (type) {
    case GET_PROJECT_PAYMENTS_SUCCESS:
      return [...payload.data]
    case ADD_PAYMENT_SUCCESS:
      return [payload.data, ...state]
    case UPDATE_PAYMENT_SUCCESS:
      let paymentIndex = state.findIndex(payment => payment.id === payload.data.id)
      state[paymentIndex] = {...payload.data}
      return [...state]
    case DELETE_PAYMENT_SUCCESS:
      return [...state.filter(payment => payment.id !== payload.data.id)]

    default:
      return state
  }
}
