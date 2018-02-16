import {
  EDIT_NOTE,
  CLOSE_NOTE

} from '../actions/ActionTypes'

export default function notes (state = {}, action) {
  const { payload, type } = action

  const modals = {
    editNote: {open: false, note: {}}
  }

  switch (type) {
    case EDIT_NOTE:
      modals['editNote'] = {open: true, note: {...payload}}
      return {...modals}
    case CLOSE_NOTE:
      modals['editNote'] = {open: false, note: {...payload}}
      return {...modals}
    default:
      return modals
  }
}
