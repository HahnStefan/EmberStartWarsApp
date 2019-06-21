import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    gotoMovies(){
      this.target.transitionTo('home.movies');
    },
    gotoCharacters(){
      this.target.transitionTo('home.characters');
    },
    gotoVideo(){
      this.target.transitionTo('home.video');
    },
  }
});
