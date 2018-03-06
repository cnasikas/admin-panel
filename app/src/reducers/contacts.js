import {
  GET_CONTACTS_SUCCESS,
  GET_CONTACT_SUCCESS,
  ADD_CONTACT_SUCCESS,
  UPDATE_CONTACT_SUCCESS,
  DELETE_CONTACT_SUCCESS

} from '../actions/ActionTypes'

export default function contacts (state = [], action) {
  const { payload, type } = action
  switch (type) {
    case GET_CONTACTS_SUCCESS:
      return [...payload.data]

    case GET_CONTACT_SUCCESS:
      return [{...payload.data}]

    case ADD_CONTACT_SUCCESS:
      return [payload.data, ...state]

    case UPDATE_CONTACT_SUCCESS:
      return [{...payload.data}]

    case DELETE_CONTACT_SUCCESS:
      return [...state.filter(contact => contact.id !== payload.data.id)]

    default:
      return state
  }
}
