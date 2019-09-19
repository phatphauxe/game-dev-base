import {combineReducers} from 'redux';
import GameDataReducer from './gameDataReducer';
import KeyboardReducer from './keyboardReducer';

export default combineReducers({
  gameData: GameDataReducer,
  keyData: KeyboardReducer
})