(function() {

  'use strict';

  angular
    .module('myApp.components.main', ['searchMoviesMod'])
    .controller('mainController', mainController);

  mainController.$inject = ['searchMoviesService'];

  function mainController(searchMoviesService) {
    /*jshint validthis: true */
    this.getMovies = (movieSearch) => {
      searchMoviesService.searchMovie(movieSearch)
      .then((results) => {
        this.movieResults = results.data.Search;
      });
    };
  }

})();
