import {
  GET_NOTES_SUCCESS,
  UPDATE_NOTE_SUCCESS

} from '../actions/ActionTypes'

export default function notes (state = [], action) {
  const { payload, type } = action
  switch (type) {
    case GET_NOTES_SUCCESS:
      return [...payload.data]
    case UPDATE_NOTE_SUCCESS:
      return state.map((note) => {
        if (payload.data.id === note.id) {
          return {...payload.data}
        }
        return note
      })
    default:
      return state
  }
}
