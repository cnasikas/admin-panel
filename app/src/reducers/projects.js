import {
  GET_PROJECTS_SUCCESS,
  GET_PROJECT_SUCCESS,
  ADD_PROJECT_SUCCESS,
  UPDATE_PROJECT_SUCCESS,
  DELETE_PROJECT_SUCCESS

} from '../actions/ActionTypes'

export default function projects (state = [], action) {
  const { payload, type } = action
  switch (type) {
    case GET_PROJECTS_SUCCESS:
      return [...payload.data]

    case GET_PROJECT_SUCCESS:
      return [{...payload.data}]

    case ADD_PROJECT_SUCCESS:
      return [payload.data, ...state]

    case UPDATE_PROJECT_SUCCESS:
      return [{...payload.data}]

    case DELETE_PROJECT_SUCCESS:
      return [...state.filter(proj => proj.id !== payload.data.id)]

    default:
      return state
  }
}
