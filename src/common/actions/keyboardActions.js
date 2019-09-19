export const addKeyDown = (keyData) => {
  return {
    type: 'ADD_KEY',
    payload: keyData
  }
}

export const keyUp = (key) => {
  return {
    type: 'REMOVE_KEY',
    payload: key
  }
}

export const updateDirectionValues = (vector) => {
  return {
    type: 'UPDATE_DIRECTION',
    payload: vector
  }
}

export const setRegister = () => {
  return {
    type: 'SET_REGISTER',
    paylaod: null
  }
}