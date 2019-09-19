import React, {Component} from 'react';
import createjs from 'createjs-module';
import {connect} from 'react-redux';
import GenerateAsteroid from './generateAsteroid.component';

class BuildStage extends Component {

  constructor (props) {
    super(props);
   
  }


  modifyStage = () => {
    
    createjs.Ticker.framerate = 60;
    createjs.Ticker.addEventListener('tick', this.updateStage);



    //Game logic pieces go in the return
    return <GenerateAsteroid />;
  }

  updateStage = () => {
    //game logic updates go here
    if(this.props.updateRegister){
      this.props.updateRegister.update();
    }
    this.props.stage.update();
  }

  render () {
    return this.modifyStage();
  }

}

const mapStateToProps = (state) => {
  return {
    stage: state.gameData.stage,
    updateRegister: state.gameData.updateRegister
  }
}

const mapDispatchToProps = {}


export default connect(mapStateToProps, mapDispatchToProps)(BuildStage);