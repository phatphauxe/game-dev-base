import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addKeyDown, keyUp, updateDirectionValues, setRegister} from '../../actions/keyboardActions';

class KeyboardManager extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount () {
    window.addEventListener('keydown', this.keyEvent);
    window.addEventListener('keyup', this.keyUp);
    
  }

  componentDidUpdate = () => {
    if(this.props.updateRegister && !this.props.registered){
      this.props.updateRegister.addRegister('keyboardManager', this.mapDirection, this)
      this.props.setRegister();

    }
  }

  keyEvent = (event) => {
    let mods = null;
    if(event.getModifierState('Alt') || event.getModifierState('Shift') || event.getModifierState('Control') || event.getModifierState('Meta')){
      mods = this.getModifiers(event);
    }
    let key = event.key;
    if(!event.repeat){
      this.props.addKeyDown({key, mods})
    }
  }

  mapDirection = () => {
    if(this.props.keyData && this.props.keyData.length > 0){
      let directionsList =  this.props.keyData.map(k => {
        if(this.isDirectionalInput(k.key)){
          return this.getDirectionalValues(k.key);
        }
        else {
          return {x: 0, y: 0};
        }
      });
      let val = {x: 0, y:0};
      directionsList.forEach(d => {
        val.x += d.x;
        val.y += d.y;
      });

      if(val.x !== this.props.direction.x || val.y !== this.props.direction.y){
        this.props.updateDirectionValues(val);
      }
      
    }
    else {
      let val = {x: 0, y: 0};
      if(val.x !== this.props.direction.x || val.y !== this.props.direction.y){
        this.props.updateDirectionValues(val);
      }
    }
  }
  isDirectionalInput = (key) => {
    let result = false;
    switch(key){
      case 'ArrowUp':
      case 'ArrowRight':
      case 'ArrowLeft':
      case 'ArrowDown':
      case 'W':
      case 'A':
      case 'S':
      case 'D':
      case 'w':
      case 's':
      case 'a':
      case 'd':
        result =  true;
        break;
      default: 
        result =  false;
        break;
    }
    return result;
  }

  getDirectionalValues = (key) => {
    let x = 0; 
    let y = 0;
    switch(key){
      case 'ArrowUp':
      case 'W':
      case 'w':
        y = -1;
        break;
      case 'ArrowDown':
      case 'S':
      case 's':
        y = 1;
        break;
      case 'ArrowLeft':
      case 'A':
      case 'a':
        x = -1;
        break;
      case 'ArrowRight':
      case 'D':
      case 'd':
        x = 1;
        break;
      
    }
    let val = {x: 0, y:0};
    
     val.x = x
     val.y = y;
   
    return val;
  }


  getModifiers = (event) => {
    let alt, shift, ctrl, meta = false;
    alt = event.altKey;
    shift = event.shiftKey;
    ctrl = event.ctrlKey;
    meta = event.metaKey;
    return {alt, shift, ctrl, meta};
  }

  keyUp = (event) => {
    this.props.keyUp(event.key);
  }

  componentWillUnmount () {
    window.removeEventListener('keydown', this.keyEvent);
    window.removeEventListener('keyup', this.keyUp)
  }

  render(){
    return null;
  }
  
}

const mapStateToProps = (state) => {
  
  return {
    updateRegister: state.gameData ? state.gameData.updateRegister : null,
    keyData: state.keyData ? state.keyData.keys : [],
    direction: state.keyData ? state.keyData.direction : {x: 0, y:0},
    registered: state.keyData ? state.keyData.registered : null
  }
}

const mapDispatchToProps = {addKeyDown, keyUp, updateDirectionValues, setRegister}
export default connect(mapStateToProps, mapDispatchToProps)(KeyboardManager);