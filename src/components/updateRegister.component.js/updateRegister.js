class UpdateRegister {
  constructor(){
    this.activeRegister = [];
    this.inactiveRegister = [];
  }

  addRegister = (id, func, binder) => {
    this.activeRegister.push({id: id, update: func.bind(binder)});
  }

  removeRegister = (id) => {
    this.activeRegister = this.activeRegister.filter((x) => {
     return x.id !== id;
    });
    this.inactiveRegister = this.inactiveRegister.filter(x => {
      return x.id !== id;
    })
  }

  pauseRegister = (id) => {
    let reg = this.activeRegister.find(x => {
      return x.id === id;
    })
    if(reg){
      this.inactiveRegister.push(reg);
    }
    this.activeRegister = this.activeRegister.filter(x => {
      return x.id !== id;
    });
  }

  resumeRegister = (id) => {
    let reg = this.inactiveRegister.find(x => {
      return x.id === id;
    })
    if(reg){
      this.activeRegister.push(reg);
    }
    this.inactiveRegister = this.inactiveRegister.filter(x => {
      return x.id !== id;
    });
  }

  addPausedRegister = (id, func) => {
    this.inactiveRegister.push({id: id, update: func});
  }

  update = () => {
    
    this.activeRegister.forEach(i => {
      i.update();
    });
  }
}

export default UpdateRegister;