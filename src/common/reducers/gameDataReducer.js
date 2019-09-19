export default (state={stage: null, updateRegister: null}, action) => {
  switch(action.type) {
    case 'SET_STAGE':
       return Object.assign({}, state, {stage: action.payload})
    case 'SET_UPDATE_REGISTER':
       return Object.assign({}, state, {updateRegister: action.payload})
    default: 
      return state;
  }
}