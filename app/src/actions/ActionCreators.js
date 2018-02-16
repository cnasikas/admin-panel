import {
  GET_PROJECTS,
  GET_PROJECT,
  ADD_PROJECT,
  UPDATE_PROJECT,
  DELETE_PROJECT,
  GET_PROJECT_PAYMENTS,
  ADD_PAYMENT,
  UPDATE_PAYMENT,
  DELETE_PAYMENT,
  GET_PROJECT_CREDENTIALS,
  ADD_CREDENTIAL,
  UPDATE_CREDENTIAL,
  DELETE_CREDENTIAL,
  GET_NOTES,
  UPDATE_NOTE,
  EDIT_NOTE,
  CLOSE_NOTE
} from './ActionTypes'

export function getProjects () {
  return {
    payload: {
      request: {
        method: 'get',
        url: '/projects'
      }
    },
    type: GET_PROJECTS
  }
}

export function getProject (id) {
  return {
    payload: {
      request: {
        method: 'get',
        url: '/projects/' + id
      }
    },
    type: GET_PROJECT
  }
}

export function addProject (project) {
  return {
    payload: {
      request: {
        method: 'post',
        url: '/projects',
        data: {...project}
      }
    },
    type: ADD_PROJECT
  }
}

export function updateProject (id, project) {
  return {
    payload: {
      request: {
        method: 'put',
        url: '/projects/' + id,
        data: {...project}
      }
    },
    type: UPDATE_PROJECT
  }
}

export function deleteProject (id) {
  return {
    payload: {
      request: {
        method: 'delete',
        url: '/projects/' + id
      }
    },
    type: DELETE_PROJECT
  }
}

export function getPayments (projectID) {
  return {
    payload: {
      request: {
        method: 'get',
        url: '/projects/' + projectID + '/payments'
      }
    },
    type: GET_PROJECT_PAYMENTS
  }
}

export function addPayment (payment, projectID) {
  return {
    payload: {
      request: {
        method: 'post',
        url: '/projects/' + projectID + '/payments',
        data: {...payment}
      }
    },
    type: ADD_PAYMENT
  }
}

export function updatePayment (id, projectID, payment) {
  return {
    payload: {
      request: {
        method: 'put',
        url: '/projects/' + projectID + '/payments/' + id,
        data: {...payment}
      }
    },
    type: UPDATE_PAYMENT
  }
}

export function deletePayment (id, projectID) {
  return {
    payload: {
      request: {
        method: 'delete',
        url: '/projects/' + projectID + '/payments/' + id
      }
    },
    type: DELETE_PAYMENT
  }
}

export function getCredentials (projectID) {
  return {
    payload: {
      request: {
        method: 'get',
        url: '/projects/' + projectID + '/credentials'
      }
    },
    type: GET_PROJECT_CREDENTIALS
  }
}

export function addCredential (credential, projectID) {
  return {
    payload: {
      request: {
        method: 'post',
        url: '/projects/' + projectID + '/credentials',
        data: {...credential}
      }
    },
    type: ADD_CREDENTIAL
  }
}

export function updateCredential (id, projectID, credential) {
  return {
    payload: {
      request: {
        method: 'put',
        url: '/projects/' + projectID + '/credentials/' + id,
        data: {...credential}
      }
    },
    type: UPDATE_CREDENTIAL
  }
}

export function deleteCredential (id, projectID) {
  return {
    payload: {
      request: {
        method: 'delete',
        url: '/projects/' + projectID + '/credentials/' + id
      }
    },
    type: DELETE_CREDENTIAL
  }
}

export function getNotes () {
  return {
    payload: {
      request: {
        method: 'get',
        url: '/notes'
      }
    },
    type: GET_NOTES
  }
}

export function updateNote (note) {
  return {
    payload: {
      request: {
        method: 'put',
        url: '/notes/' + note.id,
        data: {...note}
      }
    },
    type: UPDATE_NOTE
  }
}

export function editNote (note = {}) {
  return {payload: note, type: EDIT_NOTE}
}

export function closeNote (note = {}) {
  return {payload: note, type: CLOSE_NOTE}
}
