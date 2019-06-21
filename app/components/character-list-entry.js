import Component from '@ember/component';

export default Component.extend({
  init(){
    this._super(...arguments);
    this.set('showDetails', false);
    this.set('buttonTxt', "More");
  },

  actions: {
    showCharacterDetails() {
      if(this.showDetails === false) {
        this.set('showDetails', true);
        this.set('buttonTxt', "Less");    
      } else {
        this.set('showDetails', false);
        this.set('buttonTxt', "More");   
      } 
    }
  }

});
