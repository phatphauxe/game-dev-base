export default (state = {ref: null, keys: [], direction: {x: 0, y: 0}, registered: false}, action) => {
  switch(action.type) {
    case 'ADD_KEY': 
      return Object.assign({}, state,{keys: [...state.keys, action.payload]});
    case 'REMOVE_KEY':
       return Object.assign({}, state, {keys: [...state.keys.filter(x => {return x.key !== action.payload})]});
    case 'UPDATE_DIRECTION':
        return Object.assign({}, state, {direction: action.payload});
    case 'SET_REGISTER':
        return Object.assign({}, state, {registered: true});
    default:
       return state;
  }
}