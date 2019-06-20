import Controller from '@ember/controller';

export default Controller.extend({
  // customPlayerVars: null,
  // customPlayerVars: {
  //   autoplay: 1,
  //   rel: 0,
  //   modestbranding: 1,
  //   loop: 1,
  //   showinfo: 0
  // },

  init() {
    this._super(...arguments);
    
    // this.customPlayerVars = {
    //   autoplay: 1,
    //   rel: 0,
    //   modestbranding: 1,
    //   loop: 1,
    //   showinfo: 0
    // };
  }
});
