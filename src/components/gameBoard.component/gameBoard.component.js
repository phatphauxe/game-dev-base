import React, {Component} from 'react';
import createjs from 'createjs-module';
import {connect} from 'react-redux';
import {SetStage, SetUpdateRegister} from '../../common/actions/gameDataActions';
import BuildStage from '../buildstage.component';
import UpdateRegister from '../updateRegister.component.js/updateRegister';

class GameBoard extends Component {
  constructor(props){
    super(props);
   
  }
  componentDidMount () {
    if(!this.props.stage){
      this.props.SetStage(new createjs.Stage('main-stage'));
      this.props.SetUpdateRegister(new UpdateRegister());
    }
  }
  render () {
    return (
      <div style={{marginTop: '50px'}}>
        <canvas id='main-stage' height='800' width='1080' style={{backgroundColor: 'black'}}/>
        {this.props.stage ? <BuildStage /> : ''}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    stage: state.gameData && state.gameData.stage ? state.gameData.stage : null
  }
}

const mapDispatchToProps = {SetStage, SetUpdateRegister};

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);