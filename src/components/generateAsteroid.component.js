import React, {Component} from 'react';
import {connect} from 'react-redux';
import createjs from 'createjs-module';

class GenerateAsteroid extends Component {
  constructor(props){
    super(props);
    this.a = null;
  }
  componentDidMount = () => {
    this.a = new createjs.Shape();
    let sides = Math.floor(Math.random() * 5) + 8;
    let maxAng = 360/sides;
    let angleTotal = 360;
    let pos = []
    this.a.graphics.beginStroke('white').beginFill('grey');
    let angles = [];
    for(var i=0; i < sides; i++){
      angles.push(Math.random() * (2 * 3.1415));
    }
    angles.sort();
    angles.forEach(ang => {
      pos.push(({x: 100 * Math.cos(ang), y: 100 * Math.sin(ang)}))
    })
    
    console.log(pos);
    this.a.graphics.moveTo(pos[0].x, pos[0].y)
    pos.forEach(v => {
      this.a.graphics.lt(v.x, v.y);
    })
    this.a.graphics.closePath();
    this.a.x = 100;
    this.a.y = 100;
    this.props.stage.addChild(this.a);
    if(this.props.updateRegister){
      this.props.updateRegister.addRegister('asteroid', this.rotate, this)
    }
  }

  rotate = () => {
    this.a.rotation += 1;
  }

  render(){
    return '';
  }
}

const mapStateToProps = (state) => {
  return {
    updateRegister: state.gameData && state.gameData.updateRegister ? state.gameData.updateRegister : null,
    stage: state.gameData && state.gameData.stage ? state.gameData.stage : null
  }
}

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(GenerateAsteroid);